pipeline{
  agent any

  environment {
    DOCKER_USER = 'sudhanshud100'
    DOCKER_REPO_BACKEND = "{DOCKER_USER}/mern_backend"
    DOCKER_REPO_FRONTEND = "{DOCKER_USER}/mern_frontend"
  }

  stages{
    stage('Checkout'){
      steps {
        checkout scm
      }
    }
    stage('Build Image'){
      steps {
        sh "docker build -t ${DOCKER_REPO_BACKEND}:${BUILD_NUMBER} ./backend"
        sh "docker build -t ${DOCKER_REPO_FRONTEND}:${BUILD_NUMBERR} ./frontend"
      }
    }

    stage('Login and Push'){
      withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER_ENV')]){
        sh "echo \$DOCKER_PASS | docker login -u \DOCKER_USER_ENV --password-stdin"
        sh "docker push ${DOCKER_REPO_BACKEND}:${BUILD_NUMBER}"
        sh "docker push ${DOCKER_REPO_FRONTEND}:${BUILD_NUMBER}"
        }
      }
    }
    stage('Cleanup'){
      steps {
        sh "docker emi ${DOCKER_REPO_BACKEND}:${BUILD_NUMBER} ${DOCKER_REPO_FRONTEND}:${BUILD_NUMBER}"
      }
    }
  }
}
