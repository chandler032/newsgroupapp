FROM jenkins/jenkins:lts

# Switch to root user to install additional packages
USER root

# Install Docker CLI inside Jenkins container
RUN apt-get update && \
    apt-get install -y docker.io && \
    rm -rf /var/lib/apt/lists/*

# Allow Jenkins user to access Docker
RUN usermod -aG docker jenkins

# Switch back to Jenkins user
USER jenkins

# Define Jenkins Home Directory
ENV JENKINS_HOME /var/jenkins_home
# Set up default Jenkins user
ENV JENKINS_ADMIN_ID=admin
ENV JENKINS_ADMIN_PASSWORD=admin123
# Expose ports for Jenkins UI & agents
EXPOSE 8082 50000

# Start Jenkins on port 8082
CMD ["sh", "-c", "java -jar /usr/share/jenkins/jenkins.war --httpPort=8082"]


