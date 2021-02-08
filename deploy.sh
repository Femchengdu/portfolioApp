!/bin/bash

# print outputs ond exit on first filure
set -xe
if [$TRAVIS_BRANC == 'master']; then
    echo "Running deploy script"
    # setup ssh agent, git config and remote
    eval "$(ssh-agent -s)"
    echo "Agent started"
    ssh-add ~/.ssh/id_rsa
    echo "Added keys"
    echo "Trying to ssh into digital ocean:"
    ssh test_travis@157.245.252.42
    echo "Maybe success ? writing docker version "
    docker -v >> success.txt
        echo "Succesful writ ? written version "
    # Dont know what to do with git here

    # Pull the latest docker images
##    docker build .

    # Stop exisiting containers 

    # Start a new container using the latest image

fi