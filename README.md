# redis graphql-server

* Graphql server using redis & postgreSQL database. Tutorial code (see 'Inspiration' below)

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* PostgreSQL needs to be installed and running - I started it from my Windows 10 PostgreSQL 12 dropdown option 'SQL shell (psql)'
* Postman used to test the backend before frontend was available
* Postgresql shell commands: `\l` list all databases. `\c database1` connect to database1. `\d` describe database .`\dt` inspect tables. `\q` to quit.

## Screenshots

![Backend screenshot](./img/postgresql.png)

## Technologies

* [Typeorm v0.2.22](https://typeorm.io/#/) Object-relational mapping (ORM) 'virtual object database' to convert data between incompatible type systems
* [GraphQL](https://graphql.org/) API query language
* [Graphql-yoga](https://www.npmjs.com/package/graphql-yoga) Graphql server
* [Prisma GraphQL extension](https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql) used for .graphql files but there is Apollo and others to choose from
* [PostgreSQL v12.2](https://www.postgresql.org/)
* [PostgreSQL Installer for Windows](https://www.postgresqltutorial.com/install-postgresql/)
* [Jest v25.2.3](https://jestjs.io/en/) Javascript testing framework
* [graphql-request v1.8.2](https://www.npmjs.com/package/graphql-request) GraphQL client
* [Schema Stitching](https://www.apollographql.com/docs/graphql-tools/schema-stitching/) deprecated
* [Yup v0..28.3](https://www.npmjs.com/package/yup) JavaScript schema builder for value parsing and validation
* [Express.js middleware v4.17.1](https://expressjs.com/)
* [Node.js v12.4.0](https://nodejs.org/es/)
* [Nodemon](https://www.npmjs.com/package/nodemon) npm module so server will automatically restart after code changes

## Setup

* Install [PostgreSQL](https://www.postgresql.org/) & run it (requires the password you created during installation)
* Install [Nodemon v2.0.2](https://www.npmjs.com/package/nodemon) globally if you don't already have it
* Run `npm i` command, setup database settings inside `ormconfig.json` file
* Run `npm start` command - app will restart after each code update due to nodemon

## Code Examples - Backend

* todo

```javascript

```

## Features

* [Try-catch](https://expressjs.com/en/advanced/best-practice-performance.html) used to catch exceptions in synchronous code, e.g. JSON parsing errors.

## Status & To-Do List

* Status: in progress

## Inspiration/General Tools

* [freeCodeCamp.org: Youtube video, GraphQL Server Intermediate Tutorial - Boilerplate with Typescript, PostgreSQL, and Redis](https://www.youtube.com/watch?v=-iwjiiCGiO0)
* [PostgreSQL Quick Command List](http://jcsites.juniata.edu/faculty/rhodes/dbms/pgsql.htm)
* [Guru99: PostgreSQL CREATE DATABASE with Example](https://www.guru99.com/postgresql-create-database.html)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
