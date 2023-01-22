● Class based components
> Class based components are no longer used
> We can do almost everything with functional components
> extends is used to inherit some properties
> in order to update the state, we do not mutate the state directly. Never do 
```
this.state = {} // when updating the state

```



● Why do we do `super(props)`?
<!-- TODO -->





● How do you create Nested Routes `react-router-dom` configuration?
<!-- TODO -->


● createHashRouter, createMemoryRouter?
<!-- TODO -->

● What is order of life cycle method cals in Class based component?
<!-- TODO -->


● Why do we use componentDidMount?
<!-- TODO -->


● Why do we use componentWillUnmount? Show with example?
<!-- TODO -->


● If we don't pass props to constructor & super. It still works fine. Why?
<!-- TODO -->





● React Lifecycle Methods?
> 
 - constructor
 - render
 - componentDidMount - best place to make api calls
 - 

> mount means to load 

#### Flow in case of parent child relationship
- Parent constructor
- Parent Render
- Child constructor
- Child render
- Child componentDidMount
- Parent componentDidMount

#### Flow in case of parent with 2 childs
- Parent constructor
- Parent render
    - Child1 constructor
    - Child1 render
    - Child2 constrcutor 
    - Child2 render
    - Child1 ComponentDidMount
    - Child2 ComponentDidMount
- Parent ComponentDidMount

Reason: 
- 




> two phases when reconcilation happens
<!-- TODO -->



● `async componentDIdMount` but useEffect cannot be async? Why useEffect callback function cannot be `async`?
<!-- TODO -->


<!-- TODO: test when useEFfect is dependent on a property & we have to unmount -->
