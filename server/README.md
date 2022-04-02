# JWT AUTH

Steps to run this project:

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

# Required ormconfig.json

```
{
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "root",
    "password": "root",
    "database": "database",
    "synchronize": true,
    "logging": false,
    "entities": ["src/entity/**/*.ts"],
    "migrations": ["src/migration/**/*.ts"],
    "subscribers": ["src/subscriber/**/*.ts"],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
}

```

#### When running local `npm run dev`

Be sure to add the correct db host in the ormconfig.json
`"host": "localhost"`

#### When running docker

Be sure to add the correct db host in the ormconfig.json
`"host": "host.docker.internal"`

docker build -t server ./

docker run -it -p 4000:4000 server
