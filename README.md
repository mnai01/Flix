download postgres
Add postgres to to system env
create db
CREATE DATABASE <name>

ENV
Add secrets
Add api key

Rebuild compose

For dev build make sure to allocate more resources to client server in docker compose

sometimes when starting dev after prod I run into this error (docker allocation failure gc in old space requested)
To fix it I just delete any restrictions and volumes from docker-compose and it fix's the problem

**REMOVE:**

```
volumes:
    - /app/node_modules
    - ./client:/app
mem_limit: 2048M
mem_reservation: 256M
cpus: 0.5
```

#### Stop down the services

docker-compose stop

#### Remove the previously created docker resources

docker-compose rm

#### Bring up the services again

docker-compose up --build
