FROM node:12.2.0
WORKDIR /usr/src/app

RUN npm i -s -g expo-cli

# Your computer ip
# can be solved with "$ hostname -I"
# the first ip in the command output is your computer ip
# write the output of the date command into a file called tmp_variable
ARG hostname
ENV REACT_NATIVE_PACKAGER_HOSTNAME=${hostname}

# Expose all the ports needed for Expo
# ref https://stackoverflow.com/questions/54569589/can-i-develop-react-native-app-inside-docker-image
EXPOSE 19000:19000
EXPOSE 19001:19001
EXPOSE 19002:19002

