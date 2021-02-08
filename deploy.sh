# print outputs ond exit on first filure
set -xe

    echo "Running deploy script"
    # setup ssh agent, git config and remote
    eval "$(ssh-agent -s)"
    echo "Agent started"
    ssh-add ~/.ssh/id_rsa
    echo "Added keys"
    echo "Trying to ssh into digital ocean:"
    ssh test_travis@$DEPLOY_IP < ./success.sh

    # Dont know what to do with git here

    # Pull the latest docker images
##    docker build .

    # Stop exisiting containers 

    # Start a new container using the latest image

