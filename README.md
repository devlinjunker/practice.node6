# Basic Node v6 Template

Want an easy template for a node v6 script with some build features, like:
  - ESLint file for consistent code (can be ignored by running `npm run simple-watch`)
  - Flow static typing (optional with `/* @flow */` header)
  - Babel compilation for ECMA2017+
  - Watch commands to auto lint, typecheck, and compile


## Dependencies
 - Babel v7
 - Flow
 - ESLint


## Development
 `npm run watch` - watch files for changes and run lint (sson), flow and babel to compile to `/out` directory


 `npm run simple-watch` - watch files for changes and run flow and babel to compile to `/out` directory


 `npm run build` - to compile to `/out` directory


 `npm run clean` - destroy `/out` directory


 `npm run app` - run the app/script that was compiled to `/out` directory


## Notes
  Atom still displays lint errors in the editor if you have linter-eslint package,
   installed so you will probably implicitly use the linting if this is your dev strategy.
   If you are using an editor without linting tips, you may want to use the `simple-watch`
   and `simple-build` commands so you bypass linting during the compile/build process.

  - [ ] May want to set more eslint rules to just warnings? or create a production linter file that enforces style harsher?

### Process

1. Started with Node v6 `npm init`
2. Added Babel v7
3. Added .babelrc with `env` preset (Promises work)
4. Needed `polyfill` preset imported to entry point for async/await
5. Added flow and ran `flow init` for .flowconfig + `flow` preset
6. Added nodemon for running flow on file changes
7. Added my eslintrc yaml file with a few removals to make quick js development easier
