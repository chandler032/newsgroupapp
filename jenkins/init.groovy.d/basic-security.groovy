#!groovy
import jenkins.model.*
import hudson.security.*

def instance = Jenkins.getInstance()

if (instance.securityRealm instanceof HudsonPrivateSecurityRealm) {
    println "--> Security already configured. Skipping setup."
} else {
    println "--> Setting up security..."
    def hudsonRealm = new HudsonPrivateSecurityRealm(false)
    hudsonRealm.createAccount("admin", "admin123")
    instance.setSecurityRealm(hudsonRealm)

    def strategy = new FullControlOnceLoggedInAuthorizationStrategy()
    instance.setAuthorizationStrategy(strategy)
    instance.save()
}
