FROM php:7.4-fpm

# Set working directory
WORKDIR /var/www

# Copy composer.lock and composer.json
COPY ./ /var/www/


# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    default-mysql-client \
    libpng-dev \
    libxslt-dev libxml2-dev libpam-dev libedit-dev \
    libjpeg62-turbo-dev \
    locales \
    jpegoptim optipng pngquant gifsicle \
    npm \
    nodejs


# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install extensions
RUN docker-php-ext-install pdo_mysql pdo gd



RUN chown -R www-data:www-data /var/www

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]