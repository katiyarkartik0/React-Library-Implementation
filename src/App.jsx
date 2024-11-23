import MyReact from "./React";

/* @jsx MyReact.createElement */
function App(props) {
  const fruits = ["Mango", "Banana", "Grapes"];
  const [count, setCount] = MyReact.useState(0);
  const [flag,setFlag] = MyReact.useState(false)
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleFlag =()=>{
    setFlag(!flag)
  }
  return (
    <div id="foo">
      <button onClick={handleClick}>Increment</button>
      <span>{count}</span>
      <p>dd</p>
      <button onClick={handleFlag}>Switch flag</button>
      <span>{flag}</span>
    </div>
  );
}

export default App;
