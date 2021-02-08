
set -xe

    echo "Running deploy script"

    eval "$(ssh-agent -s)"
    echo "Agent started"
    ssh-add ~/.ssh/id_rsa
    echo "Added keys"
    echo "Trying to ssh into digital ocean:"
    ssh test_travis@157.245.252.42 'bash -s' < ./success.sh
    


