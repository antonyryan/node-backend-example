<h1>node-backend-example</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A example REST API example made with Node.js

## API docs

- https://andre000.github.io/node-backend-example/

## Requirements

- Docker
- Node.js >= 12

## 1. Install

```sh
npm install
```

## 2. Setting up environment

```sh
docker-compose up -d
```

Two services will be created:
  - A MySQL database running on port 3306
  - A Database admin (adminer) running on port 8080 (http://localhost:8080)

Before start using the database, make sure that the container status is healthy using `docker ps`. (It may take up to 5 minutes)

## 3. Migration

Before using the project, the following command must be executed:

```sh
npm run db:migrate
```

## 4. Usage

```sh
npm run dev
```

The default port is 3333. But it can be changed on `.env` file

## 5. Run tests

In order to run the tests, a MySQL docker instance must be running with all migrations applied.

```sh
npm run test
```

## 6. Generating docs

```sh
npm run docs
```

## Author

👤 **Andre L. Adriano**

* Github: [@andre000](https://github.com/andre000)
* LinkedIn: [@andreadriano](https://linkedin.com/in/andreadriano)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
