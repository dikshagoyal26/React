● What is `NPM`?
>  NPM is a package manager. It *doesn't* stand for `node package manager`. Alternative soluution: `yarn`
> `npm init` is used to initiate the package manager setup. It creates a `package.json` file

● What is `Parcel/Webpack`? Why do we need it?
> They are bundlers. They are used to bundle all the package artefacts & power it with different features like minifying, code cleanup etc.
> Parcel offers blazing fast performance utilizing multicore processing, and requires zero configuration.

● What is `.parcel-cache`?
> It is a directory automatically built up by parcel which helps reducing the build time of the application. It caches some information about the package during the first build & which then is updated with every update in the package. 

● What is `npx` ?
> `npx` is a command line tool and enables npm to execute command line NodeJs tools without having them installed globally.

● What is difference between `dependencies` vs `devDependencies`?
> A dependency is a library that a project needs to function effectively. DevDependencies are the packages are required only during development.

● What is Tree Shaking?
> It is a term commonly used within a JS context to describe the removal of dead code. It relies on the import & export statements to detect if code modules are exported & imported for use between Javascript files.
> Modern bundlers automatically remove dead code when bundling JS files into single files. This is important for preparing clean & minimal production ready code.
> When Parcel can determine which exports of a dynamically imported module you use, it will tree shake the unused exports from that module. This works with static property accesses or destructuring, with either await or Promise .then syntax.


● What is Hot Module Replacement?
> HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained with changes in the code. CSS changes are automatically applied via HMR with no page reload necessary. This is also true when using a framework with HMR support built in, like React (via Fast Refresh), and Vue.

● List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words. 
> Superpowers of Parcel
  * HMR - Hot Module Replacement - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
  * File watcher algorithm - made with C++
  * MINIFY - minifies the code 
  * BUNDLING - bundles data files into HTML, CSS & JS files
  * Cleaning our code - clean the code by removing logs & unused code
  * DEV and production Build - builds supported for both dev & prod environments
  * Super fast building algorithm -  Parcel uses worker processess to enable multicore compilation, and has a file system cache for fast rebuilds.
  * does image optimization also - Parcel supports resizing, converting, and optimizing images
  * Caching while development - Parcel includes several optimizations related to browser and CDN caching, including content hashing, bundle manifests, and shared bundles.
  * Compresses - Parcel provides compression properties to compress our files e.g images to optimize the performance of our app. Parcel supports compressing bundles using Gzip and Brotli.
  * Compatible with older version of browser - Parcel allows support for older broswers also.
  * HTTPS in dev - can test the application on https
  * port Number - support for dynamic port. If we run parallel applications, all will have different ports
  * Consistent hashin algorithm - Parcel automatically includes content hashes in the names of all output files, which enables long-term browser caching. Whenever the contents of a bundle changes, the hash included in the filename will be updated, triggering invalidation of CDN and browser caches.
  * Zero Configuration - Unlike Webpack, Parcel requires zero configurations to setup.

● What is `.gitignore`? What should we add and not add into it?
> It is a file which lists out all the files which are to be ignored to be added to the source. Usually the auto-generated files & directories are added to the `.gitignore` file

● What is the difference between `package.json` and `package-lock.json`
> `Package.json` contains all the metadata of a project. The project's basic information, such as package name, version, description, author, dependencies, etc., are present in package.json.The `npm init` command generates the package.json file.
> `package-lock.json` is an auto-generated file, managed when running `npm i`. It stores the exact version of the specified dependencies.  

● Why should I not modify `package-lock.json`?
> `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it might cause dependency issues on the server.

● What is `node_modules` ? Is it a good idea to push that on git?
> node_modules is a folder that contains all the packages and dependecies(direct & transient) used within the package. \n It is big file that we should not push to github.

● What is the `dist` folder?
> It contains the minified build for the application containing all the source code within `html, css & js` with other files

● What is `browserlists`?
> browserlist is a list browsers that any applicaion should support. It also covers the browser coverage over a geographical area.

● Difference between `^ - caret` and `~ - tilda`?
> `~version` “Approximately equivalent to version”, will update to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.
> `^version` “Compatible with version”, will update to all future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.

● Script Tags in HTML. What types does it support? Which to use & when?
> The script HTML element is used to embed executable code
> type: indicates the type of file represented. The value of this attribute will be one of the following:
  * attribute not set : refers to JS files
  * module: code to be treated as JS module. The charset and defer attributes have no effect. 
  * importmap: indicates that body of the element contains an import map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules.
  * any other value: The embedded content is treated as a data block, and won't be processed by the browser. All of the other attributes will be ignored, including the src attribute. 

● Why react is fast?
> It is not only the virtual DOM that makes React faster but other components like bundlers (e.g. parcel, webpack ,vite etc. ) and development ecosystem.

● What are transitive dependencies?
> It is a type of dependency where one dependency requires another dependency to work properly and another dependency requires an another dependecy.
> When an indirect relationship causes functional dependency it is called Transitive Dependency.
> If  P -> Q and Q -> R is true, then P-> R is a transitive dependency.

