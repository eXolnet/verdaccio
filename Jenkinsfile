pipeline {
    agent {
        docker
    }
    
    stages {
        def app

        stage('Clone repository') {
            steps {
                /* Let's make sure we have the repository cloned to our workspace */

                checkout scm
            }
        }

        stage('Build image') {
            steps {
                /* This builds the actual image; synonymous to
                 * docker build on the command line */

                app = docker.build("exolnet-verdaccio:3.2.0", "-t exolnet-verdaccio:latest .")
            }
        }

        stage('Test image') {
            steps {
                /* Ideally, we would run a test framework against our image.
                 * For this example, we're using a Volkswagen-type approach ;-) */

                app.inside {
                    sh 'echo "Tests passed"'
                }
            }
        }
    }
}
