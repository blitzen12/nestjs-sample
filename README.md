## Requirements

 - [Node v7.6+](https://nodejs.org/en/download/current/)
 - [Yarn](https://yarnpkg.com/en/docs/install)

## Technology/Library used
  - [ExpressJS](https://expressjs.com/)
  - [Mongoose](https://mongoosejs.com/docs/guide.html)
  - [NestJS](https://docs.nestjs.com/)
  - [ClassValidator](https://github.com/typestack/class-validator)
## Setup
```
 Install Mongodb
```

#### Install dependencies:

```bash
npm install -g @nestjs/cli
npm install -g typescript
yarn install
```

### Setup Database/Mongodb Locally
```
update .env with your db credentials
```

## Running Locally

```bash
yarn start
```

## Lint

```bash
# lint code with ESLint
yarn lint

# try to fix ESLint errors
yarn lint:fix

# lint and watch for changes
yarn lint:watch
```

## Test

```bash
# run all tests with Mocha
yarn test

# run unit tests
yarn test:unit

# run integration tests
yarn test:integration

# run all tests and watch for changes
yarn test:watch

# open nyc test coverage reports
yarn coverage
```

## Validate

```bash
# run lint and tests
yarn validate
```

## Logs

```bash
# show logs in production
pm2 logs
```

## Documentation

```bash
# generate and open api documentation
yarn docs


## License

[MIT License](README.md)
