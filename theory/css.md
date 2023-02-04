● Should we use a css library?
> Yes, because:-
  - It gives us modular css
  - It saves time

● Different ways to write css?
 - normal native css file
 - scss & sass -> makes the css experience good. 
    - nesting
    - mixins
    - reusability
    - variables
    - It is converted to CSS & then shipped
 - in-line css - not a good way to write css, always try to avoid it
 - styled components 
    - strong writing style
    - less used in industry
 - using libraries like matierialUI, baseUI, ant design, chakra
    - we can use 2 libraries in a single project
    - but we should not use it, it using a single one will help to maintain consistency
    - cons
        - bundle size heavy
        - lose control over how design looks
        - customising the components take a lot of time
        - 
    - pro
        - makes development very fast
        - easy to code
        - good to maintain consistency
        - it takes care of responsiveness
        - CSS on the go using class names
        - reusability
    - tailwind css
        - less bundle size
        - flexible UI (easy to customise)
        - CSS on the go using class names
        - reusability
        - use `ctrl-space` to get suggestions if you are not getting suggestions after installing `Tailwind CSS IntelliSense` extension
        - `[]` bracked notation
           - when we have to apply a property value which tailwind css doesn't provide
           - Example: `w-[200px]`
           - try to stick to native classes
                - consistency
                - tailwind will then end up creating dynamic css classes for each custom class
        - pros
            - code is less
            - easy to use
            - no duplicate css
            - bundle size is small
            - faster development
            - easy to debug
            - customisable & lot more control
            - newer way of writing css
        - cons
            - too much classes
            - high learning curve
            
● How to configure Tailwind?
<!-- TODO -->


● In `tailwind.config.js` what does the keys mean (content, theme, extend, plugins)?
<!-- TODO -->


● Why do we have `postcssrc` file?
<!-- TODO -->

