
function App() {
  return <div>
    <Folder name = "Desktop">
      <File name = "dog.png" />
      <File name = "cat.png" />
      <File name = "bird.png" />
    </Folder>

    <Folder name = "Application" />

  </div>
}

const Folder = (props) => {
  console.log(props)
  return <div>
    {props.name}
    {props.children}
    </div>
}

const File = (props) => {
  return <h5>{props.name}</h5>
}

export default App;
