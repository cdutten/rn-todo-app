# Udemy course with React Native

Build docker command

`
    URN_HOSTNAME=`hostname -I | grep -o "^\S*"`&&
    docker build 
    -t udemy-rn 
    hostname=$URN_HOSTNAME 
    .
`

Run docker container

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
