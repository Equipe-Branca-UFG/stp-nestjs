# Use Node.js LTS version
FROM node:21

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Set the environment variable to ignore unauthorized TLS certificates
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose the application port
EXPOSE 3000

