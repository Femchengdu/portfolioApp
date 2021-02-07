#!/bin/bash

# print outputs ond exit on first filure
set -xe
if [$TRAVIS_BRANC == 'master']; then

    # setup ssh agent, git config and remote
    eval "$(ssh-ageng -s)"
    ssh-add ~/.ssh/test_travis_rsa
    # Dont know what to do with git here

    # Pull the latest docker images
    docker build .

    # Stop exisiting containers 

    # Start a new container using the latest image

fi