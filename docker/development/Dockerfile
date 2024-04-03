# Use the base image with Node.js 18 and Alpine
FROM node:18-alpine AS base

WORKDIR /app

# Copy package.json and lock files
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies
# This stage is separated to leverage Docker caching
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Copy the rest of your application code
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# The command to run your application
CMD ["npm", "run", "dev"]
