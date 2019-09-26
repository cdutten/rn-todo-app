# Todo App with React native

Example Todo App created in the Basic Section of [this course](https://www.udemy.com/react-native-the-practical-guide).

## Docker image build 

The URN_HOSTNAME var stores the hostname of the Computer (something like 192.168.0.##).
With this I can set the hostname where expo is going to be.

`
    URN_HOSTNAME=`hostname -I | grep -o "^\S*"`&&
    docker build 
    -t udemy-rn 
    hostname=$URN_HOSTNAME 
    .
`

## Docker container create

`
    docker run 
    -dit 
    -p 19000:19000
    -p 19001:19001 
    -p 19002:19002 
    -v $PWD:/usr/src/app 
    --name urn
    udemy-rn
`
