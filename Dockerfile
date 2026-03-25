# Base Node image
FROM node:20-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# App directory
WORKDIR /app

# Install dependencies (only package files to cache layer)
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# Copy application source code
COPY . .

# Build the application (adjust if using Next.js standalone build)
RUN pnpm run build

# Expose port
EXPOSE 3000

# Start command
CMD ["pnpm", "start"]
