# Basic Node v6 Template

Want an easy template for a node v6 script with some build features, like:
  - ESLint file for consistent code (can be disabled by running `npm run simple-watch`)
  - Flow static typing (optional with `/* @flow */` header)
  - Babel compilation for ECMA2017+
  - Watch commands to auto lint, typecheck, and compile


## Dependencies
 - Flow
 - ESLint (Not Yet)
 - Babel v7


## Development Commands
 `npm run watch` - watch files for changes and run lint (sson), flow and babel to compile to `/out` directory


 `npm run simple-watch` - watch files for changes and run flow and babel to compile to `/out` directory


 `npm run build` - to compile to `/out` directory


 `npm run clean` - destroy `/out` directory


 `npm run app` - run the app/script that was compiled to `/out` directory


### Process

1. Started with Node v6 `npm init`
2. Added Babel v7
3. Added .babelrc with `env` preset (Promises work)
4. Needed `polyfill` preset imported to entry point for async/await
5. Added flow and ran `flow init` for .flowconfig + `flow` preset
6. Added nodemon for running flow on file changes

trying to figure out how to watch???

TODO: linting
