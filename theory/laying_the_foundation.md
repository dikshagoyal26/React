● What is `jsx`?
> JSX is a HTML like syntax. It is a fancy way of writing HTML. It is created by developers at Facebook 
> It helps update HTMl in a better way
> JSX is not a HTML inside JS
> JSX is an alternative for `React.createElement`. JSX uses React.createElement behind the scenes.
> JSX is executed by `babel` which converts it into React Elements, react elements are nothing but objects which then gets rendered on DOM.
> JSX => React.createElement => Object => HTML (DOM)
> JSX is secure of XSS attack, it will make sure app is safe by sanitizing it, called sanitisation
> XSS - Cross site scripting (XSS) is an attack in which an attacker injects malicious executable scripts into the code of a trusted application or website. Attackers often initiate an XSS attack by sending a malicious link to a user and enticing the user to click it.
> JSX can have only one parent element
> in order to have 2 parents, wrap it inside a `div` or a component `<React.Fragment></React.Fragment>` or `<></>`
> `<React.Fragment>` = `<></>`

```
const h1 = <h1 id="title" key="h1">Namaste React</h1>
```

● Supporters of JSX?
> Secure 
> Easy to maintain & debug
> readability, developer experience, syntactical sugar, maintainability, less code, no repetition


● `{TitleComponent}` VS `{<TitleComponent/>}` VS `<TitleComponent></TitleComponent>` in JSX?
> `{TitleComponent}` - This value describes the TitleComponent as a javascript expession or a value. The {} can embed any javascript expression or values inside it.
> `{<TitleComponent/>}` -  It is a self closing tag. This represents a component returning some JSX or a function that is returning a JSX value. 
> `<TitleComponent></TitleComponent>`- It is similar to the above one `{<TitleComponent/>}` when there is no child element associated.

● Babel? What does it do?
> It is compiler/transpiler. It takes a piece of code & delievers it
> how babel works?babel AST
> babel comes as a dependency along with parcel
> Note: Parcel will not remove console.log automatically. We need to configure for it. There is a package for it : babel-plugin-transform-remove-console & use it via `.babelrc` file

● React Key reconcilation
> When there are siblings in an array, we need to give keys for each sibling

● component composition?
> using component inside another component

● Types of Component in React?
> Class Based Component - It's an old way to manage components
> Functional Component - It's nothing but a function. Name of component starts with capital letter (standard convention). 
