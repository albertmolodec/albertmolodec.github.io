import { render } from 'preact'
import { useState}  from 'preact/hooks'
import avatar from './avatar.png'

function App() {
  const [state, setState] = useState('')
  console.log(state);
  return (
    <>
      <img src={avatar} style={{ float: 'left' }} />
      <h1>Hello, I'm Albert Abdulmanov.</h1>
      <p>This is my little corner on the World Wide Web.</p>
    </>
  )
}

render(<App />, document.body)
