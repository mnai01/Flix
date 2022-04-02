Create ENV with video src link
REACT_APP_SOURCE=LINK

docker build -t client ./

docker run -it -p 3000:3000 client
