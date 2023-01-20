● What is a Microservice Architecture?
> Small different projects serving different functionalities.
> Every project can be hosted on different ports
> Advantages
    - Easier to test
    - Indepentent projects
    - Seperation of concern
    - Single Responsibility
> A microservices architecture is a type of application architecture where the application is
developed as a collection of services. It provides the framework to develop, deploy, and 
maintain microservices architecture diagrams and services independently.

● What is a Monolith Architecture?
> It is a unified model for design of software. It states that all the functionalities are composed in single project

● What is the difference between Monolith & Microservice Architecture?
|Monolith| Microservice|
|---|---|
|Consists of single code base with multiple modules|Consists of multiple modules with each services being responsible for exactly one functionality|
|Easier Deployment|Relatively complex|
|Updating system is tedious as  entire system needs to be redeployed even for a very small change|only service which is required is redeployed|
|Reusing modules is easy|easily used in development|
|single point of failure|no single point of failure|

● Ways to make an API call?
> Loads => API => render page
> Loads => render page => API => update UI

● Why do we need a `useEffect` hook?
> `useEffect` connects a component to an external system
> called after the component is rendered
> It accepts a callback as the first argument
> If second argument is not passed, it executes after every re-render
> To fix it, pass a dependency array `[]` then it will be executed just once *after initial render*
> To execute it on change of a particular state, then pass that value in the dependency array & it will be then executed on every state update for that state. Example `[text]` -> it will be executed once after initial render + everytime after render(text changes)

● What is Optional Chaining?
> The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.

● What is Shimmer UI?
<!-- TODO -->




● What is difference between JS expression & JS statement?
>  A JS expression produces a value. A number, string, ternary conditions (return true or false), math opertions and array map method (returns new array) are all examples of js expression.
```
- "Diksha" -> String is a valid expression 
- 1234    -> Number is a valid expression 
- (isLoggedIn) ? "Logout" : "Login"    -> Ternary operator returning value is a valid expression
- [1,2,3,4].map(num => num*2)  -> array map function is a valid expression which returns a new array after transformation
- (1+2+3)   -> math operation is a valid expression
```
> - A js statement just executes/performs an action but does not return/produce a value. A variable assignment, if condition (with no return) and for loops are examples of js statement.
```
- console.log("Hello world")  -> This does not return any value, just prints the content on screen.
- let name = "Diksha";  -> Variable assigment is a statement 
- if(true){ 
    console.log("true"); 
  } else {
    console.log("true"); 
  }  
- for(let i=0; i< 5; i++) {
    arr.push(i);
  } 


```

● What is conditional Rendering? Explain with code example
> Render a component based on some condition is conditional rendering. Many times we come across situations where we want to render a particular component only on basis of some condition.
> For Example: if you have an array of restruants to render. If there's any data in that array display the list of restraunts but if there is no restraunt then display `no restraunt found`
> We can add conditions with different operators: `if(){} else{}` or `? :` or `&&`

```
restruants.length === 0 ? `no restraunt found` : restruants.length

```

● What is CORS?
> CORS
<!-- TODO: https://youtu.be/tcLW5d0KAYE watch -->


● What is async await?
<!-- TODO -->


● What is the use of `const data = await data.json()`?
> fetch() returns a readable stream, it needs to be converted to JSON object so that we can read it

