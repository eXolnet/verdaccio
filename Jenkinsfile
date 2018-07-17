node('docker'){
    catchError {
        timestamps {
            wrap([$class: 'AnsiColorBuildWrapper']) {
                def app

                stage('Clone repository') {
                    /* Let's make sure we have the repository cloned to our workspace */

                    checkout scm
                }

                stage('Build image') {
                    /* This builds the actual image; synonymous to
                     * docker build on the command line */

                    app = docker.build("exolnet-verdaccio:3.2.0", "-t exolnet-verdaccio:latest .")
                }

                stage('Test image') {
                    /* Ideally, we would run a test framework against our image.
                     * For this example, we're using a Volkswagen-type approach ;-) */

                    app.inside {
                        sh 'echo "Tests passed"'
                    }
                }
            }
        }
    }
    step([
        $class: 'Mailer',
        notifyEveryUnstableBuild: true,
        recipients: ['build-stability@exolnet.com', emailextrecipients([[$class: 'CulpritsRecipientProvider'], [$class: 'RequesterRecipientProvider']])].join(' ')
    ])
}
