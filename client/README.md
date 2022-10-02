## Fill in .env && env-cmdrc

REACT_APP_SOURCE=

REACT_APP_SOURCE1=

## Running Docker

docker build -t client ./

docker run -it -p 3000:3000 client

## Where to run build on low spec server

Run your react build on a powerful local machine and drop build folder into lower spec prod server