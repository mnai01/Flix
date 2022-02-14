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