pipeline{
  agent any

  environment {
    DOCKER_USER = 'sudhanshud100'
    DOCKER_REPO_BACKEND = "${env.DOCKER_USER}/mern_backend"
    DOCKER_REPO_FRONTEND = "${env.DOCKER_USER}/mern_frontend"
  }

  stages{
    stage('Checkout'){
      steps {
        checkout scm
      }
    }
    stage('Build Image'){
      steps {
        sh "docker build -t ${env.DOCKER_REPO_BACKEND}:${env.BUILD_NUMBER} ./backend"
        sh "docker build -t ${env.DOCKER_REPO_FRONTEND}:${env.BUILD_NUMBER} ./frontend"
      }
    }

    stage('Login and Push'){
      steps {
      withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER_ENV')]){
        sh "echo \$DOCKER_PASS | docker login -u \$DOCKER_USER_ENV --password-stdin"
        sh "docker push ${env.DOCKER_REPO_BACKEND}:${env.BUILD_NUMBER}"
        sh "docker push ${env.DOCKER_REPO_FRONTEND}:${env.BUILD_NUMBER}"
        }
      }
    }
    stage('Cleanup'){
      steps {
        sh "docker emi ${env.DOCKER_REPO_BACKEND}:${env.BUILD_NUMBER} ${env.DOCKER_REPO_FRONTEND}:${env.BUILD_NUMBER}"
      }
    }
  }
}
