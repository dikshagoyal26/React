● different layers in a web application?
- UI layer - everything in UI, all jsx
- Data layer - UI layer is powered by data layer
    - state & props manage the data

● difference between state & props?
- state: scoped only to a particular component/container
- props: data passed from one component to another component
    - local state variable for parent component

● Prop Drilling?
- data in parent passed to grand child or great grand child passed through props, we are drilling all the components for that use case which is known as prop drilling
- Lots of re-rendering
- Code cluttered

● Pass data from child to parent?
- localStorage - not a good way
- custom hooks - not a good way
- redux

● Lifting the state up?
- Modify the state of sibling - we cannot directly do that
    - maintain the state in parent
    - instead of children having the control for its state, parent will have that control

<!-- TODO: explore Components & Profiling from React Dev Tools -->

● What is context provider & context consumer?
<!-- TODO -->

● If you don't pass a value to the provider does it take a default value?
<!-- TODO -->

● Can a context come inside context?
<!-- TODO -->

● How do you manage more than 1 context?
<!-- TODO -->

● Can we have multiple nested context?
<!-- TODO -->
