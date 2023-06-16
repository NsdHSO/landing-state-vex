# landing-state-vex

## Motivation 
```markdown
    I want to experiment with vue.
    I'm an angular developer, but it seems to me that angular is in decline. 
    It goes in a direction towards populism, this mentality is not always good for it.
    I want to create an application that has 

```
- [ ] Shell Page
- [ ] Dashboard Page
- [ ] Users page
- [ ] Auth Page

## Development
```markdown
We can use FontawesomeIcon like
    <icon :icon="['fas','user-secret']" />
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
