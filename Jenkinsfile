pipeline {
    agent any

    environment {
        NODEJS_HOME = tool 'NodeJS 18' // Set Node.js version from Jenkins
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/rameshinumulas/form_test_case.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'  // Use 'bat' for Windows instead of 'sh'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'  // Adjust if using Jest, Cypress, etc.
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }
    }
}
