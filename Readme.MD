#### Images

backend image docker.io/rdevcd2020/prtbackend:1.0
client image docker.io/rdevcd2020/prtclient:1.0

# Docker commands for my convenience

### Run docker and overide the default start command in docker file

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
