# Next.js Enterprise Boilerplate

Welcome to the _Next.js Enterprise Boilerplate_, an open-source template for enterprise projects! It's loaded with features that'll help you build a high-performance, maintainable, and enjoyable app. We've done all the heavy lifting for you, so sit back, relax, and get ready to conquer the world with your incredible app! 🌍

## 📚 Features

With this template, you get all the awesomeness you need:

- 🏎️ **[Next.js](https://nextjs.org/)** - Fast by default, with config optimized for performance
- 💅 **[Mantine](https://mantine.dev)** - A fully featured React components library with dark mode support
- ✨ **[ESlint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** - For clean, consistent, and error-free code
- 🛠️ **[Extremely strict TypeScript](https://www.typescriptlang.org/)** - With [`ts-reset`](https://github.com/total-typescript/ts-reset) library for ultimate type safety
- 📊 **[Bundle analyzer plugin](https://www.npmjs.com/package/@next/bundle-analyzer)** - Keep an eye on your bundle size
- 🧪 **[Jest](https://jestjs.io/)** and **[React Testing Library](https://testing-library.com/react)** - For rock-solid unit and integration tests
- 🎭 **[Cypress]()** - Write end-to-end tests like a pro
- 📕 **[Storybook](https://storybook.js.org/)** - Create, test, and showcase your components
- 🌬️ **Smoke Testing** and **Acceptance Tests** - For confidence in your deployments
- 📝 **[Conventional commits git hook](https://www.conventionalcommits.org/)** - Keep your commit history neat and tidy
- 🔍 **[Observability](https://opentelemetry.io/)** - Open Telemetry integration for seamless monitoring
- 🎯 **[Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)** - No more spaghetti imports
- 🐛 **[Sentry](https://docs.sentry.io/?original_referrer=https%3A%2F%2Fwww.google.com%2F)** - Sentry is a
  developer-first error tracking and performance monitoring platform.
- ❤️️ *
  *[Health checks](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)
  ** - Kubernetes-compatible for robust deployments
- 🤖 **[Dependa BOT](https://github.com/dependabot)** - Auto-updating dependencies, so you can focus on coding
- 🩹 **[Patch-package](https://www.npmjs.com/package/patch-package)** - Fix external dependencies without losing your mind
- 📈 **Components coupling and cohesion graph** - A tool for managing component relationships
- 🚀 **[GitHub Actions](https://github.com/features/actions)** - Pre-configured actions for smooth workflows, including Bundle Size and performance stats
- 💯 **Perfect Lighthouse score** - Because performance matters
- 🚢 **[Semantic Release](https://github.com/semantic-release/semantic-release)** - for automatic changelog
- 💻 **[T3 Env](https://env.t3.gg/)** - Manage your environment variables with ease

# Project Setup Guide

This guide provides step-by-step instructions on how to set up your local environment for this project.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/), which includes `npm`.
- [Yarn](https://yarnpkg.com/) package manager.

## Installation

1. **Clone the Repository:**
   Clone the project repository to your local machine using Git.

   ```bash
   git clone [repository URL]
   cd [project directory]
   ```

2. **Install Dependencies:**
   Use yarn to install the necessary dependencies.

   ```bash
   yarn install
   ```

## Running the Project

1. **Development Environment:**
   To start the development server, run:

   ```bash
   yarn dev
   ```
   This will start the Next.js development server. You can view your application at `http://localhost:3000`.


2. **Building for Production:**
   To create a production build, use:

   ```bash
   yarn build
   ```

   After building, you can start the production server with:

   ```bash
   yarn start
   ```

## Testing

- **Run Unit Tests:**
  To execute unit tests, use:

  ```bash
  yarn test
  ```

- **End-to-End Testing with Cypress:**
  Open Cypress for interactive testing:

  ```bash
  yarn cypress:open
  ```

  Or run Cypress tests headlessly:

  ```bash
  yarn cypress:run
  ```

## Linting and Code Quality

- **Linting:**
  Check for linting errors with:

  ```bash
  yarn lint
  ```

- **Code Quality Audits:**
  Perform security and environment audits:

  ```bash
  yarn audit
  yarn audit:env
  ```

## Additional Scripts

- **Generate GraphQL Code:**
  To generate GraphQL types and queries, use:

  ```bash
  yarn generate
  ```

- **Analyze Bundle Size:**
  Analyze the bundle size with:

  ```bash
  yarn analyze
  ```

- **Prepare Environment:**
  Set up your environment variables and hooks:

  ```bash
  yarn prepare:env
  ```

- **Release:**
  For semantic versioning and release, run:

  ```bash
  yarn release
  ```

- **Check & configure your enviroment**

    ```bash
    ## Check your environment
    yarn audit:env
    
    ## Set husky and our code quality tools
    yarn prepare:env
    ```

- This project uses a git hook to enforce [conventional commits](https://github.com/qoomon/git-conventional-commits). To
  install the git hook, run the following command in the root directory of the project:

    ```sh
    brew install pre-commit
    pre-commit install -t commit-msg
    ```
