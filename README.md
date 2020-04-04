# redis-graphql-server

* Graphql server using Typescript, Node.js, PostgreSQL, Redis, React, Jest, OAuth, TypeORM, and SparkPost. This is complex tutorial code (almost 8 hours) from Ben Awad (see 'Inspiration' below) and was an opportunity to see a very competent coder in action. This is a work in progress and I need to correct bugs likely due to the latest versions of dependencies being used. Hence no screen shots as yet.

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
* [ioredis](https://www.npmjs.com/package/ioredis) Redis client for Node.js. Redis is an in-memory data structure with an in-memory key-value database with optional durability
* [Express.js middleware v4.17.1](https://expressjs.com/)
* [Express rate-limit v5.1.1](https://www.npmjs.com/package/express-rate-limit) rate-limiting middleware for Express, to limit repeated requests to public APIs and/or endpoints such as password reset
* [Node.js v12.4.0](https://nodejs.org/es/)

## Setup

* Install [PostgreSQL](https://www.postgresql.org/) & run it (requires the password you created during installation)
* Run `npm i` command, setup database settings inside `ormconfig.json` file
* Run `npm run start` command

## Code Examples

* extract from startServer.ts to create session with a cookie that lasts 7 days

```typescript
server.express.use(
    session({
      store: new RedisStore({
        client: redis as any,
        prefix: redisSessionPrefix
      }),
      name: "qid",
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
      }
    } as any)
  );
```

## Features

* For each module there is a separate `errorMessages.ts` file that is imported in `resolvers.ts` file

## Status & To-Do List

* Status: bugs prevent testing from starting. Error `Argument of type '{ store: any; windowMs: number; max: number; delayMs: number; }' is not assignable to parameter of type 'Options'. Object literal may only specify known properties, and 'delayMs' does not exist in type 'Options'.` to fix in main `startServer.ts` file.

## Inspiration/General Tools

* [freeCodeCamp.org: Youtube video by Ben Awad, GraphQL Server Intermediate Tutorial - Boilerplate with Typescript, PostgreSQL, and Redis](https://www.youtube.com/watch?v=-iwjiiCGiO0)
* [PostgreSQL Quick Command List](http://jcsites.juniata.edu/faculty/rhodes/dbms/pgsql.htm)
* [Guru99: PostgreSQL CREATE DATABASE with Example](https://www.guru99.com/postgresql-create-database.html)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
