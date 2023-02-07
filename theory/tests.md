- jest & react-testing-library
- react-testing-library is built on top of jest
    - it uses jest behind the scenes

> Types of testing
  - Manual Testing
  - Automation Testing - code testing a code
     - Selenium testing
  - End to End Testing - covers entire user journey, they uses headless browser
     - replacing manual testing with code
     - we can execute test cases faster with headless browsers as it doesn't have to paint on browser, changing the view port
  - Unit Testing - core job of developers
     - means testing small units
     - small component feature testing
  - Integration Testing - testing integration between components


> jest
  - delightful js testing framework
  - full fledged framework in itself



> Why do we need test cases
<!-- TODO -->

> How to setup a unit testing framework?
   - `npm i -D @testing-library/react`
   - `npm i -D jest` (29 Major version is new)
   - configure jest
      - jest.config file using `npx jest --init`
        - using TS? Y/N
        - test environment node/jsdom? - jsdom for browsers
        - add coverage reports? Y
        - Provider to instrument code for coverage? v8 or babel? babel
        - Automatically clear mock calls, instances, contexts and results before every test? Y
   - How to run these test cases? npm run test
        - Validation Error: Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module. As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.
        - Fix: `npm i -D jest-environment-jsdom`
   - Create the first test in a directory `__tests__` (Jest Regex: `**/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)`) 
        - `_` also known as dunder test
   - Writing first test
        - `import { sum } from "../sum";`  SyntaxError: Cannot use import statement outside a module
            - Fix: 
                - need to configure jest with babel
                - `npm i -D babel-jest @babel/preset-env @babel/core`
                - Configure it in a `babel.config.js` or `.babelrc` both are good ways
                - https://jestjs.io/docs/28.x/getting-started#using-babel
                - Add the following in `.babelrc`
                  ```
                   "presets": [
                        ["@babel/preset-env", { "targets": { "node": "current" } }],
                    ]
                  ```
   - gitignore coverage report
   - Executing first test cases with JSX using `render()`
        - Error: Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax. Support for the experimental syntax 'jsx' isn't currently enabled. `const header = render(<Header />);`
            - FIX: we will need one more package & add it in `.babelrc`
                - `["@babel/preset-react", { "runtime": "automatic" }]`
        - Error: Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax. SyntaxError: D:\workplace\namaste-react\src\assets\img\logo.png: Unexpected character '�'. (1:0)
            - FIX: create a dummy Logo & add the following configuration in `jest.config.js`
                ```
                    moduleNameMapper: {
                        "\\.(jpg|png|svg)" : "../mocks/dummyLogo.js"
                    }
                ```
        - Error: could not find react-redux context value; please ensure the component is wrapped in a <Provider>
            - Fix: 
                ```
                    import store from "../../utils/store"
                    const header = render(<Provider store={store}><Header /></Provider>);
                ```
        - Error: useHref() may be used only in the context of a <Router> component
            - Fix: Give it a router
                ```
                    import { StaticRouter } from "react-router-dom/server";
                    const header = render(
                        <StaticRouter>
                        <Provider store={store}>
                            <Header />
                        </Provider>
                        </StaticRouter>
                    );
                ```
        - `render()` now worked
        - Fetch elements using `getByTestId` & test id is passed using `data-testid` to the HTML element
        - Another error in some other test case:  ReferenceError: fetch is not defined
            - Fix: mock API call
            ```
                global.fetch = jest.fn(() =>
                    Promise.resolve({
                        json: () => Promise.resolve(RESTRAUNT_DATA),
                    })
                );

            ```
        - Another Issue: to test only DOM: use `expect(...).toBeInTheDocument()`
            - for that need to install `@testing-library/jest-dom`
            - but this is **not a good & recommended way**
            - otherwise check if the children has been loaded or not


                

> JSON & JS object are not the same

> What are the differences between the JSON & JS Object?
            
> to run test cases use `jest`
> HMR for tests `jest --watch`


