# CICD-Practice

## What is CI/CD ?

- CI/DI is a method to frequently deliver apps to customers by introducing automation into the stages of app development.
- Continuous Integration / Continuous Delivery.

As developers, we write code, and that code needs to be built, to be tested and to be merged. In the end it should be released and deployed to production.

- BUILD + TEST + MERGE = Integration
- RELEASE TO REPO + DEPLOY TO PRODUCTION = Delivery

## Github Actions:

- Is a solution for CI/CD and all kinds of automation
- Solution to automate developer workflows.
- Can be used for CI/CD - among many other automation.

## Accessing databases for testing:

- Work databases are secured and hard to access (behind a VPN)
- Solution: local test database (2 options)
  - Complicated option: real test database implementation
  - Local Test DB
  - Simple option: Docker database - works also on CI-DI

// docker pull mongo
// docker container run --name mydatabase --publish 27017:27017 -d mongo
// docker ps
