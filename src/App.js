
function App() {
  return <div>
    <h1>Hello World!</h1>
    <Folder name="Desktop"/>
    <Folder name="Application"/>

  </div>
}

const Folder = (props) => {
  return <h4>{props.name}</h4>
}

export default App;
