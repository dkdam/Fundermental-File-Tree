import React, { useState } from "react"

function App() {
  return <div>

    <Folder name = "Desktop" isOpen = {false}>
      <Folder name = "Music">
        <File name = "Some_Song.mp3" />
        <File name = "More_Song.mp4" />
      </Folder>
      <File name = "dog.png" />
      <File name = "cat.png" />
      <File name = "bird.png" />
    </Folder>

    <Folder name = "Application" />

  </div>
}

const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(true)
  const { name, children } = props

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return <div>
      <span onClick={handleClick}>{name}</span>
      <div style={{ margin : '17px'}}>
        {isOpen ? children : null}
      </div>
    </div>
}

const File = (props) => {

  return <h5>{props.name}</h5>
}

export default App;
