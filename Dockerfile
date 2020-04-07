# Docker Image which is used as foundation to create
from node:10.16.0-alpine

# A directory within the virtualized Docker environment
WORKDIR /app

# Copies everything over to Docker environment
COPY . .

# Installs all node packages
RUN yarn

# Uses port which is used by the actual application
EXPOSE 3000

# Finally runs the application
CMD [ "yarn", "start" ]