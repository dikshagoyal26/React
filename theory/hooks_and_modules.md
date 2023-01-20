● What is difference between `Named export`, `Default export` and `*` as import ?
> Default export
    ```
        const name = "Diksha";
        export default name;

        // imported as 
        import name from "<fileName>"

    ```
> Named export
    ```
        export const name = "Diksha";

        // imported as 
        import {name} from "<fileName>"

    ```
> * as import - used with named export. It imports all the exports with the given name & accessible as an object
    ```
        export const name = "Diksha";
        export const age = 24;

        //imported as
        import * as user from "<filename>"

        console.log(user.name) //"Diksha"
        console.log(user.age) //24

    ```

● What is the importance of config.js or constant.js file?
> It helps maintain the constants used throughout the project to have a single source for those.


● What are React Hooks?
> Hooks are nothing but a function dedicated to do a specific task. They let you use state and other React features without writing a class.
> When would I use a Hook? - If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component Ref: https://reactjs.org/docs/hooks-state.html .
> Normal JS function

● Why do we need a useState Hook?
> `useState` hook allows us to update and re-render a value on the UI without any confusion. It provides us a variable and a method dedicated to a value / variable that helps us avoid any mis-match while updating the code / UI.
> It declares a “state variable”. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React. 
> Gives functionality to create local variables in React
> When there is something that updates the UI, then we create it using `useState`
> When there is change in the state, the DOM tree modifies, react will re-render & node will be updated.
> Current tree is updated with the updated tree and whatever difference is there, it is updated on the DOM
> React doesn't track normal variables
> React only tracks state variables
> Component rerenders on state / prop change
