import MyReact from "..";
import App from "../../App.jsx";

const root = document.getElementById("root");

let globalState = [];
let stateCurrentAddress = 0;

const useState = (initialValue) => {
  let index = stateCurrentAddress;
  let state = globalState[index] || initialValue;
  function setState(newValue){
    globalState[index] = newValue;
    stateCurrentAddress = 0;
    /* @jsx MyReact.createElement */
    MyReact.render(<App />, root);
  }
  stateCurrentAddress++;
  return [state, setState];
};




//[1]
//index = 0
//globalIndex = 0

//[false]
//index = 1
//globalIndex = 2






export default useState;