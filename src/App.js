import React, { useState } from "react"

function App() {
  return <div>

    <Folder name = "Desktop" isOpen = {false}>
      <Folder name = "Music">
        <File name = "Some_Song.mp3" />
        <File name = "More_Song.mp3" />
      </Folder>
      <File name = "dog.png" />
      <File name = "cat.png" />
      <File name = "bird.jpeg" />
    </Folder>

    <Folder name = "Application" />

  </div>
}

const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(true)
  const { name, children } = props
  const direction = isOpen ? "down" : "right"

  const handleClick = () => setIsOpen(!isOpen)

  return <div>
      <span onClick={handleClick}>
        <i className=" blue folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{ margin : '17px'}}>
        {isOpen ? children : null}
      </div>
    </div>
}

const File = (props) => {
  const { name } = props
  const fileExtension = name.split('.')[1]
  const fileIcons = {
    mp3: 'headphones',
    jpeg: 'file image',
    png: 'file image outline'
  }

  return <div>
    <i className={`caret ${fileIcons[fileExtension]} icon`}></i>
    {name}
  </div> 
}

export default App;
