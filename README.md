# typescript-npm-package-starter
Typescript NPM Package Starter

My template for creating npm packages using typescript.

- TS to JS complication
- Testing via Jest, includes coverage
- ESLint
- Ignore files to ensure minimal code is stored/shipped

### Getting Started

To create a new project based on this template using degit:

```bash
npx degit el3um4s/typescript-npm-package-starter
```

Then install the dependencies with

```bash
npm install
```

Now update the name field in package.json with your desired package name. Then update the homepage field in package.json. And finally add your code.

### Build the package

Run

```bash
npm run build
```

### Test the package

You can test the code with [Jest](https://jestjs.io/)

```bash
npm test
```

You can find the test coverage in `coverage/lcov-report/index.html`.

### Publish

First commit the changes to GitHub. Then login to your [NPM](https://www.npmjs.com) account (If you don’t have an account you can do so on [https://www.npmjs.com/signup](https://www.npmjs.com/signup))

```bash
npm login
```

Then run publish:

```bash
npm publish
```

If you're using a scoped name use:

```bash
npm publish --access public
```

### Bumping a new version

To update the package use:

```bash
npm version patch
```

and then

```bash
npm publish
```
