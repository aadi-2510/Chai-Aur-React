# React All Notes
## Basic Initialization:  
Basic data present in app.js mainly in 2 files :
-Public : Index.html => SPA HTMl  (Single Page Application) => Connects all app data to "root" named variable.
-src 

* first letter of File name should be in capital letters and so is function name 

example for evaluated expression is:
const codeme = abc.. 
function etc(){
return(
    a series of code {codeme}
)}
therefore js evaluated outcome/variable is written in jsx inside {}.  

* In React.js, "render" refers to the process of converting React elements into a DOM representation 
 and displaying them on the screen. It's the mechanism by which React components output what the user sees in the browser.

## Hooks
* The useState hook is called inside a functional component. It returns an array with two elements: 
the current state value and a function to update that state.
syntax: 
const [state , setstate] = useState(initial state)

* useEffect 

* useCallback

* useRef

## Fibre
* HYDRATION : when dom tree loads in web page, it loads the structure first like- buttons etc. then it loads javascripts,
this process is called hydration.

* FIBRE : react now used fibre behind the scenes to update virtual tree. It is just an updated react's algorithm which uses
fibre for updating virtual dom. 

* Reconciliation : Its a react's algorithm that redconsiders which elemets or props should be updated or checked.
"The algorithm React uses to differnciate one tree with another to determine which parts need to be changed."
 
Infact, reconciliation is the algorithm behind what is known as 'Virtual DOM'


## Must Read documentation for react fibre architecture basics : 

``` https://github.com/acdlite/react-fiber-architecture ```

## For readymade components user websites like:
- devui.io 
- bootstrap.com

## Higher order Component:
A higher-order component (HOC) is a pattern in React that allows you to reuse component logic. It's a function that takes a component and returns a new component with enhanced functionality. Essentially, it's a way to compose components and share functionality between them without repeating code.

## Memoization
Memoization is an optimization technique used to improve the performance of functions by caching the results of expensive function calls and returning the cached result when the same inputs occur again. In React, memoization is often used in the context of functional components to prevent unnecessary re-renders 
<hr>

#### Always use 'key', if you want to use loops/maps i.e. iterations in jsx file.

# REDUX
* Just like React is a main library and React-DOM is another lib for manipulating DOM. 
Similarlly Redux is a liberary and React-Redux is like a bridge that connects react with redux.

Defination: Redux is basically a state management tool.

*History of Redux: 
Before development of context API and redux a tool named FLUX was designed by facebook architecture, again becasuse of state management issue.

FLux - while working in a way to maintain a centralised container or global state was flux's initial approach.
flux also introduced the concept of good Data Flow .

Then Redux was introduced in 2015 stating concepts like:
a) There should a proper approach
b) Functionality should be passed through reducers only to prevent data overwrite.

Then to eleminate error faced by redux too are solved by introduction of : 
* Redux-Toolkit Concepts:
- create a STORE for exmaple-  kind of global variable from where we take all of data by a single source of truth 'STORES ENTIRE DATA' 
- REDUCERS : these handle the change that we want to make in store 'HANDLES FUNCTIONALITY'
- 2 Methods are basically used : 
a) useSelector 
b) useDispatch 