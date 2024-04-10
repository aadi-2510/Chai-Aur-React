### React All Notes
## Basic data present in app.js mainly in 2 files :
-Public : Index.html => SPA HTMl  (Single Page Application) => Connects all app data to "root" named variable.
-src 

* first letter of File name should be in capital letters and so is function name 

``` example for evaluated expression is:
const codeme = abc.. 
function etc(){
return(
    a series of code {codeme}
)}
therefore js evaluated outcome/variable is written in jsx inside {}. ```  

* In React.js, "render" refers to the process of converting React elements into a DOM representation 
 and displaying them on the screen. It's the mechanism by which React components output what the user sees in the browser.

## The useState hook is called inside a functional component. It returns an array with two 
elements: the current state value and a function to update that state.
syntax: 
const [state , setstate] = useState(initial state)


*HYDRATION : when dom tree loads in web page, it loads the structure first like- buttons etc. then it loads javascripts,
this process is called hydration.

* FIBRE : react now used fibre behind the scenes to update virtual tree. It is just an updated react's algorithm which uses
fibre for updating virtual dom. 

* Reconciliation : Its a react's algorithm that redconsiders which elemets or props should be updated or checked.
- "The algorithm React uses to differnciate one tree with another to determine which parts need to be changed."
- Infact, reconciliation is the algorithm behind what is known as 'Virtual DOM'


## Must Read documentation for react fibre architecture basics : 

``` https://github.com/acdlite/react-fiber-architecture ```

## For readymade components user websites like:
- devui.io 
- bootstrap.com