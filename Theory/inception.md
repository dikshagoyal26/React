● What is Emmet?
> Plugin that has abbreviations for HTML & CSS workflows. It is a free add-on to the text editors which allows us to write shortcuts & which an emmet then expand to the piece of code. Example
    `!` gives the following codes
        ```

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                
            </body>
            </html>

        ```


● Difference between a Library and Framework?
> Library is a piece of code that can be used with an existing or a new pacakage offering the required functionalities. It doesn't affect our package structure. Where a framework is a structured set of libraries, implementing the package following it's own package structure.

● What is CDN? Why do we use it?
> CDN or content delivery network is a global network of servers that work together to provide ultra-fast delivery of Internet content, such as web pages and streaming video. It has lower latency & fast performance & is reliable to use.

● Why is React known as React?
> React was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app’s data, the view should “react” or change with those user events. User events being mouse clicks, typing, submitting a form.

● What is crossorigin in script tag?
> The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain. CORS is used to manage cross-origin requests. CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

● What is diference between React and ReactDOM
> React is used to create views while React Dom is used to render components in the web UI.

● What is difference between react.development.js and react.production.js files via CDN?
> react.development.js is used for development purpose and the code is not compressed while react.production.js is used for production purposes and the code for this library is compressed.


● What is async and defer?
> Async - It loads the scripts while HTML is being rendered. When scripts are loaded, then HTML rendering stops and execution of script starts. When execution is completed, HTML rendering resumes. It does not guarantee the execution scequence of the scripts.	
`<script async src = '...'></script> ` 

>Defer - It loads the scripts while HTML is being rendered but executes them only after the HTML is completely rendered. It guarantees the execution sequence of scripts in which they are ordered. `<script defer src = '...'></script>`


