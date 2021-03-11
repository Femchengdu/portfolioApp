#### Images

backend image docker.io/rdevcd2020/prtbackend:1.0
client image docker.io/rdevcd2020/prtclient:1.0

# Docker commands for my convenience

### Run docker and overide the default start command in docker file

## Run the shell in a container to poke around

docker run -it <container_name> sh

docker run -it<standard> -p <optional_port_mapping> <container-name> <command>

### Add tests to a running container from docker compose

docker exec -it <container_name> <overide_command>

### Run docker file from command line with volumes specified

docker run -t -p <optional_port_mapping> -v </container_root/node_modules> -v <$(pwd):/container_root> <container_name>

### Using docker compose to ochestrate multiple containers

docker-compose up --build<optional_when_changes_made>
docker-compose down

#### Interacting with test from docker-compose

docker attach <container_id> cannot take inputs for rerunning tests

#### Build a docker image

docker build . <default>

docker build -f <filename_option>

docker build -t <buildwithtag/tag_name:latest> .

### Exit react tests immediatly by setting CI=true

docker run -e CI=true rdevcd2020/prtclient:1.0 yarn test --coverage

### SSH into digital ocean

It is important to have the sha key in the project root when
you rund travis encrypt, after which you can delete the source file

### Using the ip of the droplet as a travis variable

This will prompt a connection confirmation. Best to use
the raw ip in the travis.yml file under addons: ssh_know_host: keys

### Passing the server commands after the ssh user@server_ip command

There are two ways to do this:
user@server_ip "other server commands seperated by exit"

### Or I can create a seperate shell script and link it:

user@server_ip "bash -s" < other_shell_script.sh

## Note in the other shell script, some commands would need to be wrapped in eval e.g.

eval "$(docker -v >> somefile.txt)"

### here, any other command after the exit command is not logged to the travis command line

### Because of this, I prefer the one line method, as I can log values after I exit the servers

### Running sudo code with a passowrd is tedious

### I have decided to disable password for the user

### SSH into the server as the root user then run

```
sudo visudo
```

### Look for a line that says

```
%sudo ALL=(ALL:ALL) ALL
```

### Change it to

```
%sudo   ALL=(ALL:ALL) NOPASSWD:ALL
```

### This ensures that all sudo users can run sudo without a password

sudo docker run -d -p 80:2888 rdevcd2020/express-react-feb8:/app/portfolio

docker cp config.js 23c75289a7b7:/app/portfolio

### Certbot renewal after failed google card payment

ssh into the server

stop the server running teardown.sh

run sudo certbot certonly --standalone

### Copy the new files into the .env file

copy cert/fullchain
copy cert/private

### After saving the files run,

sudo docker-compose up -d
