## Update Cors origin with your website name or ip address

index.ts

`const origins = ['https://studio.apollographql.com', 'http://{UPDATE_THIS}'];`

## Fill in example.env

API_KEY_TMDB=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
REGISTER_TOKEN_SECRET=
NODE_ENV=

## Fill in redis.env

REDIS_PASSWORD=

REDIS_HOST=redis <-- docker container name OR localhost for running locally

## Fill in postgres.env

POSTGRES_USER=

POSTGRES_PASSWORD=

POSTGRES_DB=

POSTGRES_PORT=

POSTGRES_HOST=db <-- docker container name OR localhost for running locally

### Generate / Migrate

Once your containers are up make sure to generate and migrate typeorm for the API container so it builds the correct postgres tables

Make sure to change the function name of the migration if you want to run it multiple times. For example if you want to add multiple profiles with seeding, after each insert the function name needs to change or the migration wont run it again

### Steps to run this project:

1. start express
2. create connection with typeorm
3. create apollo server pass in basic resolver
4. start apollo server
5. apply express middleware to apollo
6. Create Register resolver
7. Hash password, Insert into db
8. Create Login resolver
9. Find user in db where email matches
10. Check if password passed in matches hashed one in db
11. if valid add cookie to res with refresh token
12. return access token based on userID
13. Create auth middleware
14. On any secure route with isAuth as middleware
15. check for auth header
16. split bearer and token
17. verify token with secret using JWT
18. if valid return payload to context so function has access to user data without need for db verification

#### When running local `npm run dev`

Install Postgres

Create database

Run `CREATE DATABASE movie_db`

Be sure to add the correct db host in the ormconfig.json
`"host": "localhost"`

#### Updating Networks json data

run `node ./updateNetworkJSON` to get a json list of the updated networks. To get a JSON with updated network IDs download it from here `https://files.tmdb.org/p/exports/tv_network_ids_${month}_${day}_${year}.json.gz` replace tv_network.json with downloaded json and run node script again

#### Install redis server

Using windows subsystem for linux

Ubuntu 20.04.4 LTS (Found in microsoft store)

sudo apt-add-repository ppa:redislabs/redis

sudo apt-get update

sudo apt-get upgrade

sudo apt-get install redis-server

#### Start redis

sudo service redis-server start

sudo service redis-server stop

sudo service redis-server restart

#### Open redis-cli in docker redis image

sudo docker exec -i flix-redis-1 redis-cli

AUTH PASSWORD

KEYS \*

#### When running docker

Be sure to add the correct db host in the ormconfig.json
`"host": "<database_container_name_in_docker_compose>"`

docker build -t server ./

docker run -it -p 4000:4000 server

#### Run command in specific image

docker exec -i flix_api_1 npm run generate

#### Mirgate with docker

The generated migration file needs to be ran 1st before the seed. I havent figured out if theres a specific way to do it yet but for now just remove seed file then add it back after initional migrate command

#### Change database owner

docker exec -i flix_db_1 psql -U postgres

`CREATE USER username_here PASSWORD 'password-here!'`

`ALTER DATABASE movie_db OWNER TO dummy;`

`GRANT CONNECT ON DATABASE movie_db TO dummy;`

`GRANT ALL PRIVILEGES ON DATABASE movie_db TO dummy;`

_This one might not be required_

`GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO user_name;`

_MAKE SURE TO CONNECT TO SPECIFIC DATABASE FIRST_

`GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO user_name;`

`GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO user_name`

_Shows when password required ("trust" means no password is needed, "md5" means need MD5 password)_

sudo docker exec -i flix-db-1 cat /var/lib/postgresql/data/pg_hba.conf

_GRANT PERMISSION TO ALTER TABLES BY MAKING USER A MEMBER OF ADMIN (POSTGRES) IMPORTANT FOR MIGRATIONS_

`GRANT postgres to dummy;`

#### Check database

\c movie_db

`SELECT \* FROM table_name`
