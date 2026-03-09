FROM php:8.5-cli

# Install PostgreSQL client, git, image libraries (for GD), and PDO extension
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libwebp-dev \
    git \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install pdo pdo_pgsql gd \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Copy all application files
COPY . .

# Install dependencies (will create composer.lock)
RUN composer install --optimize-autoloader --prefer-dist

EXPOSE 8080

CMD ["php", "-d", "display_errors=0", "-S", "0.0.0.0:8080", "-t", "public"]
