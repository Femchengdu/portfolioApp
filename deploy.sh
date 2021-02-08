
set -xe

    echo "Running deploy script"

    eval "$(ssh-agent -s)"
    echo "Agent started"
    ssh-add ~/.ssh/id_rsa
    echo "Added keys"
    echo "Trying to ssh into digital ocean:"
    ssh -t -t -R test_travis@157.245.252.42 "docker -v >> success.txt" "exit"
    echo "Succesful writ ? written version "
    echo "Maybe success ? writing docker version "


