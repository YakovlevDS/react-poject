import React from "react";
import ReactDom from 'react-dom';
import App from './App/App';

// function Hello() {
//   return (
//   <div>
//   <h1 id="test"
//     name="title">Hello world, React.js!!!-Component!!!</h1>
//       <p> Hello world, React.js!!!-Component!!! Hello world, React.js!!!-Component!!!</p>
//       <p> Hello world, React.js!!!-Component!!!Hello world, React.js!!!-Component!!! </p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div >
//     <h1 id = "test"
//   name = "title" > Hello world, React.js!!!-Component!!</h1> <p> Hello world, React.js!!!-Component!!!Hello world, React.js!!!-Component!!! </p> <p> Hello world, React.js!!!-Component!!!Hello world, React.js!!!-Component!!! </p> </div>
//    )
// }
// PascalCase

// const el = React.createElement(
//   "h1",
//   {
//     id: "test",
//     name:"title"
//  },
//   "Hello world, React.js"
// )

// JSX

// const el = <h1 id = "test" name="title">Hello world,React.js!!!</h1>

// ReactDom.render(<App />, document.getElementById("root"));




// const H1 = () => {
//   return ( 
//     <h1 id = "test"
//     name = "title"> Hello world, React.js!!!-Component!! </h1>
//   )
// }
      
//       const Text = () => {
//         return ( <>
//           <p> Hello world, React.js!!!-Component!!!Hello world, React.js!!!-Component!!! </p> <p> Hello world, React.js!!!-Component!!!Hello world, React.js!!!-Component!!! </p>
//           <p> Hello world, React.js!!!-Component!!!Hello world, React.js!!!-Component!!! </p> <p> Hello world, React.js!!!-Component!!!Hello world, React.js!!!-Component!!! </p>
        
//         </>
//         )
//       }
// const App = () => {
//   return (<>
//    <H1/>
//     <Text/>
//    </>
//  )
// }
ReactDom.render(<App />, document.getElementById("root"));

