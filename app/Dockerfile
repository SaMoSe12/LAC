# Stage 1: Base Image
FROM oven/bun:alpine AS base  
# Description: This line specifies the base image to use.

# Update Package Manager and Upgrade Packages
RUN apk add --upgrade apk-tools \
    && apk upgrade
# Description: Updates the Alpine package manager (`apk`) and then upgrades all existing packages to their latest versions.
# This ensures you have the most up-to-date and secure dependencies.

# Switch to Non-Root User
USER bun

# Set Working Directory
WORKDIR /app
# Description: Sets the working directory inside the container to `/app`. All subsequent commands will be run in this directory.

# Copy Package File
COPY ./package.json ./
# Description: Copies only the `package.json` file from your local project directory to the `/app` directory within the container.
# This is done separately to take advantage of Docker's layer caching during builds.

# Install Dependencies
RUN bun install
# Description: Installs the project's dependencies using Bun. The `package.json` file copied earlier specifies these dependencies.

# Copy Project Files
COPY --chown=bun:bun . .