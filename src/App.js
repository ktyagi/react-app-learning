// import React, { Component } from 'react';
// export default class App extends Component {
//     render(){
//         return (
//             <div>
//                 Hello From React v15.4.2 p change
//             </div>
//         );
//     }
// }

import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <div>
      <p>React here !</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("root"));