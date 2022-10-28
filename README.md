<p align="center">
  <a href="https://playwright.dev/">
    <img width="140" alt="Playwright Logo" src="https://seeklogo.com/images/P/playwright-logo-22FA8B9E63-seeklogo.com.png" />
    </a>
</p>



<p align="center">
A payment application to demonstrate <strong>real-world</strong> usage of <a href="https://playwright.dev/">Playwright</a> testing methods, patterns, and workflows.
</p>

The Cypress Real-World App (RWA) is a full-stack Express/React application backed by a local JSON database.

The app is bundled with [example data](./data/database.json) (`data/database.json`) that contains everything you need to start using the app and run tests out-of-the-box.

> 🚩 **Note**
>
> You can login to the app with any of the [example app users](./data/database.json#L2). The default password for all users is `s3cret`.  
> Example users can be seen by running `yarn list:dev:users`.

### Prerequisites

The only requirement for this project is to have [Node.js](https://nodejs.org/en/) **version 14** installed on your machine. Refer to the [.node-version](./.node-version) file for the exact version.

TypeScript will be added as a local dependency to the project, so no need to install it.

### Installation

```shell
cd cypress-realworld-app/
yarn install
```

#### Mac M1 chip users will need to prepend `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true`.

```shell
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install
```

### Run the app

```shell
yarn dev
```

> 🚩 **Note**
>
> The app will run on port `3000` (frontend) and `3001` (API backend) by default. Please make sure there are no other applications or services running on both ports.
> If you want to change the default ports, you can do so by modifying `PORT` and `REACT_APP_BACKEND_PORT` variables in `.env` file.
> However, make sure the modified port numbers in `.env` are not committed into Git since the CI environments still expect the application to run on the default ports.

### Start Playwright

```shell
cd Playwright\ example\ test
npm init playwright@latest
```

> 🚩 **Note**
> This project is for sheer purpose of presenting Playwright possibilities. The application code was eddited slighlty for tuning up the performance.
> All credits are for  <strong>Great</strong> <a href="https://github.com/cypress-io/cypress-realworld-app">Cypress Team</a>




## License

[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/cypress-io/cypress/blob/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).


