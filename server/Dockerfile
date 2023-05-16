# base image
FROM node:20.1.0

# set working directory
# WORKDIR /Downloads/expengo
WORKDIR ./

# install and cache app dependencies
COPY package*.json ./
# ADD package.json /Downloads/expengo/package.json
# RUN npm install focus-trap-react
RUN npm install


# Bundle app source
COPY . .

# Specify port
EXPOSE 5000

# CMD ["npm", "install", "focus-trap-react"]
# start app
CMD ["npm", "test"]