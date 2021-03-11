
set -xe
echo "Running deploy script"
eval "$(ssh-agent -s)"
echo "Agent started"
ssh-add ~/.ssh/id_rsa
echo "Added keys"
echo "Trying to ssh into digital ocean:"
ssh test_travis@157.245.252.42 'load your image here exit'
echo "Tearing down site"
sudo docker-compose down
echo "Stopped all containers"
sudo docker ps
echo "Removing dangling containers"
yes | sudo docker system prune
echo "Removing previous images"
sudo docker rmi rdevcd2020/express-react-feb8
exit
echo "If you get here, you need to receive your masters"
echo "Deployment successful!!!!"
    


