---
id: version-2.0-installation
title: Installation
original_id: installation
---

First, you need to include the Lighthouse package in your `composer.json` file.

```json
"require": {
    // ...
    "nuwave/lighthouse": "2.0.*"
}
```

Or you can use Composer's `require` command from your terminal

```bash
$ composer require nuwave/lighthouse
```

Lighthouse has auto-discovery, but you could also add the Service Provider to your `config/app.php` file

```php
'providers' => [
    // ...
    /*
     * Package Service Providers...
     */
    Nuwave\Lighthouse\Providers\LighthouseServiceProvider::class,
]
```

Add the GraphQL facade to your `config/app.php` file

```php
'aliases' => [
    // ...
    'GraphQL' => Nuwave\Lighthouse\Support\Facades\GraphQLFacade::class,
]
```

Publish the package configuration

```bash
$ php artisan vendor:publish --provider="Nuwave\Lighthouse\Providers\LighthouseServiceProvider"
