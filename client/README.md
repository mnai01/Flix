## Fill in .env && env-cmdrc

REACT_APP_SOURCE=

REACT_APP_SOURCE1=

REACT_APP_API_REFRESH=http://{Website_or_IP_address_here}:4000/rest/auth/refresh_tokenrefresh_token

REACT_APP_API_GRAPHQL=http://{Website_or_IP_address_here}:4000/graphql

when setting for docker make sure to add remove :4000 and place /api

ex. www.website.com/api/graphql

## Running Docker

docker build -t client ./

docker run -it -p 3000:3000 client

## Where to run build on low spec server

Run your react build on a powerful local machine and drop build folder into lower spec prod server
