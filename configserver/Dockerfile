# Use a base image with Java runtime
FROM --platform=linux/amd64 openjdk:17-jdk-slim

# Set a working directory
WORKDIR /app

RUN apt-get update && apt-get install -y curl && apt-get clean

# Copy the Spring Boot JAR file into the container
COPY target/configserver-0.0.1-SNAPSHOT.jar app.jar

# Expose the application's port
EXPOSE 8071

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]