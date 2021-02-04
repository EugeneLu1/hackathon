# CxmUI

## Customer Experience Management UI

The React - Redux UI for the CxM Application that is built on top of React Boilerplate (https://github.com/react-boilerplate/react-boilerplate)

## Requirements

- Node >= 8.15.1
- npm >= 5
- Optional:
  - UILibrary
    - Option 1: Have `CPM.StubService` installed (https://git.vcilabs.com/vci/CPM.StubService)
    - Option 2: Run `cxm.stubservice` (https://git.vcilabs.com/avneet-sunner/cxm.stubservice) and modify the ui project's config file: `apps/ui/app/env/config.json` uilibrary > base_url to `http://localhost:3199/UILibrary`

## Set Up

1.  `git clone https://git.vcilabs.com/vci/CXM`
2.  `cd apps/ui`
3.  `npm install`
4.  `npm run start`
5.  Open your browser and navigate to `http://localhost:3030`

## Useful commands

- `npm run generate` - scaffolding generation for containers, components and languages
  - When asked about asynchronous loading, choose carefully to optimize # files downloaded vs file download size. Asynchronous loading for containers and non-asynchronous loading for components is a good starting point.
- `npm run start:usestub` - does the same thing as `npm run start`, but also uses port 3031 for a stub server.
  - you will also need to modify `app/env/config.json` to point `res_base_url` and `am_base_url` to port 3031
- `npm run test` - runs all the tests (with coverage)
- `npm run test:watch` - runs all tests, will re-run all tests on any file updates
- `npm run test:watch "YourContainerName"` - same as above, but runs only the tests in the `YourContainerName` folder
- `npm run build` - compresses and outputs files into the `build` folder.
- `npm run commit` - builds, lints, tests and translates. This should pass before making a PR as it will run in the pipelines

## Useful Tools

- ESLint - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- Prettier - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- Debugger for Chrome - https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
- React Developer Tools - https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
- Redux DevTools - https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

## Dev Guidelines

- `npm run commit` must pass before merging your PR
- Check your translation files in as a seperate PR
- Follow the linting rules
  - Install ESLint and Prettier and configure your format on save setting in Visual Studio Code
- Delete branches after merging
- If you are adding a new container, first create a PR with ONLY the files created by the `generate` command (this will make the actually interesting changes easier to see later)
- Keep PRs small and easy to review
- Ensure you have complete code coverage

## Adding new routes

- Add a `Route` component nested in the `Switch` component with the format:
  - `<Route exact path=<MyNewRouteHere> component={<MyNewComponentHere>} />`

## Debugging

1. Run `npm start`
2. Press `F5`
3. Set breakpoints in source files in VSCode

## Testing

Run `npm run test:watch`

- Use the commandline interface to filter by file(s)
- Use the u command to update snapshots if you are sure the changes are intended
- Use the `f` or `x` prefix to filter by or exclude tests or test suites ie. `describe` and `it`
  - eg. `fdescribe` to only run prefixed test suite and `xit` to exclude prefixed test
    _Note_: Currently there is no nice way to debug test in a browser. Ideally tests should be small and assertions will output diffs. But if needed, `console.log` can be used.

## Localization

### Adding new resource strings

1. Add a new message object with `id` and `defaultMessage` to `messages.js`
2. Run `npm run extract-intl`

### Adding localization to a component/container

1. Inject internationalization into your component using `injectIntl` from `react-intl`
2. Add `intl: intlShape.isRequired` to `PropTypes`
3. Create `messages.js` in the component directory. See `app/containers/App/messages.js` for format.
4. Resources can be rendered in one of two ways:
   _ using React eg. `<FormattedMessage {...messages.title} />`
   _ using JavaScript eg. `this.props.intl.formatMessage(messages.title);`
   Note: The component or method can be swapped for anything defined for `react-intl`. See `https://github.com/yahoo/react-intl/wiki/API` for details and additional formatting options.

### Adding a new locale

1. Run `npm run generate language`
2. Input the locale name
3. _Conditional:_ If the locale name has regional specifiers (eg. aa-AA) cleanup syntax errors in `i18n.js` and `app.js`
4. Run `npm run extract-intl`

## Documentation

- [**The Hitchhikers Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
- [**Troubleshooting**](docs/general/gotchas.md): Solutions to common problems faced by developers.

## License

This project is licensed under the MIT license, Copyright (c) 2017 Maximilian
Stoiber. For more information see `LICENSE.md`.
