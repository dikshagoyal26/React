● Is JSX mandatory for React?
> No it is not mandatory. JSX internally uses `React.createElement` so we can also directly use React APIs instead of using JSX. JSX is just a syntactical sugar.
> JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.

● Is ES6 mandatory for React?
> No, it is not. 

● How to add comments in JSX?
> We can add any JS code inside `{}` with JSX. Considering that normal JS comments work in JSX too. `//` can add single line comment & `/** */` can add multi line comments.
```
const test = () => (
  <div>
    {
      // This is a single line comment
      /**
       * This is a multi line comment
       */
    }
  </div>
)

```

● What is `<React.Fragment></React.Fragment>` and `<></>`?
> A common pattern in React is for a component to return multiple elements. Fragments allows to group a list of children without adding extra nodes to the DOM. 
> `<React.Fragment>` = `<></>`

● What is Virtual DOM?
> A representation of actual DOM in our code. 
> The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.
> Virtual DOM is required for reconciliation.

● What is Reconciliation in React?
> The process of comparing the real DOM with a virtual DOM & syncing them together is called reconciliation.
> It is an algorthim to diff one tree from another & it determines what needs to change & what need not to change in UI.
> It then just small portion of  the application. It doesn't re-render the complete DOM.

● What is React Fiber?
> Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.
> <!-- TODO: read more about this   -->
> https://github.com/acdlite/react-fiber-architecture

● Why do we need keys in React? When do we need keys in React?
> When children have keys, React uses the key to match children in the original tree with children in the subsequent tree.
> Keys are required when the we are using subsequent HTML tags, it helps React with the reconciliation process.
> It keys in place, react exactly remembers what needs to be updated.

● Can we use index as keys in React?
> We can but we should not. In case of array updates, index also modifes, which lets the react confuse about which properties belonged to which mapped components.
> Index as a key is an anti-pattern.
> Ref: https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/

● What is props in React? What are the different ways to provide props?
> In any user defined component, react passes JSX attributes & children to the component as a single object. This single object is known as `props`.
> Props allow a component to render dynamic data.

● What is config driven UI?
> UI which is derived through the specified configuration.
> Usually this configuration is returned by the backend.
> Backend specifies the component type(ex: carousel, list etc.) along with the data & UI takes that information & render it as per the response.

● Why React is Fast?
> React uses something known as virtual dom.
> Virtual DOM is a representation of DOM, not an actual DOM.
> It also uses something known as reconciliation, it is a process, where we have a diff algorithmn, which founds out the difference between the trees, which will then re-render only the portion that is required. 
> When it has different ends, it will only re-render.
> Portions identified by the diff algo are only re-rendered.


● Why React has Faster DOM manipulation?
> React Fiber