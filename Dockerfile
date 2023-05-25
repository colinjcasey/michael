# Use a base image with Node.js pre-installed
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install vite --save-dev
RUN npm install

# Copy the entire application to the working directory
COPY . .

# Build the application
#RUN npm run dev

# Expose a port (if your application uses a specific port)
EXPOSE 3000

# Start the application
CMD [ "npm", "run", "start" ]
