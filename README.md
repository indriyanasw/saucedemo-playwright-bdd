# SauceDemo Playwright BDD Automation Framework

## Project Overview

This project is a Web UI Test Automation Framework built using Playwright, TypeScript, Cucumber BDD, Gherkin, and Page Object Model (POM).

The framework is designed to automate end-to-end testing scenarios on the SauceDemo web application.

## Tech Stack

- **Programming Language:** TypeScript
- **Automation Tool:** Playwright
- **BDD Framework:** Cucumber
- **Test Specification:** Gherkin
- **Design Pattern:** Page Object Model (POM)
- **Runtime Environment:** Node.js
- **Test Data:** JSON

## Project Structure

```text
saucedemo-playwright-bdd/
├── features/          # Gherkin feature files
├── hooks/             # Cucumber hooks
├── pages/             # Page Object Model classes
├── reports/           # Test report utilities
├── step-definitions/  # Cucumber step definitions
├── test-data/         # Test data files
├── tests/             # Reusable test cases
├── utils/             # Reusable helper functions
├── cucumber.js        # Cucumber configuration
├── package.json       # Project dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## Automated Test Scenarios

The framework covers the following functional areas:

1. **Login**
    - Login with valid credentials
    - Login with different user accounts
    - Negative login scenarios

2. **Product**
    - Verify product list is displayed

3. **Shopping Cart**
    - Add product to cart
    - Verify cart item count

4. **Checkout**
    - Complete checkout with valid information
    - Validate checkout with missing information

5. **Logout**
    - Verify user can log out successfully

## Installation

Clone the repository:

```bash
git clone https://github.com/indriyanasw/saucedemo-playwright-bdd.git
```

Navigate to the project directory:

```bash
cd saucedemo-playwright-bdd
```

Install dependencies:

```bash
npm install
```

## Run Automated Tests

Run all test scenarios:

```bash
npm test
```

Run smoke tests:

```bash
npm run test:smoke
```

Run login tests:

```bash
npm run test:login
```

Run end-to-end tests:

```bash
npm run test:e2e
```

## Test Reporting

The project includes a Cucumber HTML reporting utility to generate test execution reports.

## Author

QA Automation Engineer Portfolio

GitHub: [@indriyanasw](https://github.com/indriyanasw)
