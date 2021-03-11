set -xe
echo "Changing into portfolio directory"
cd portfolio
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
