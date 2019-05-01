import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const submit = username => console.log(`username: ${username}`)

  const [username, setUsername] = React.useState('');

  const handleSubmit = event => {
    submit(username);
    event.preventDefault();
  }
  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <InputField value={username} onChange={setUsername}>
          Your Name:
        </InputField>
        <Button color="violet" type="submit">
          Send
        </Button>
      </Form>

      <SplitPane 
        left = {
          <div>
            <ul>
              <li>
                <a href="https://www.robinwieruch.de/react-component-composition/">Link 1</a>
              </li>
              <li>
                <a href="https://www.robinwieruch.de/react-component-composition/">Link 2</a>
              </li>
            </ul>
          </div>
        }
        right = {
          <CopyRight label="NGUYEN DUC DONG"></CopyRight>
        }>

      </SplitPane>
    </div>
  );
}



const Form = ({onSubmit, children}) => (
  <form onSubmit={onSubmit}>{children}</form>
)

const Button = ({
  color = 'white',
  onClick,
  type = 'button',
  children
}) => (
  <button 
    style={{backgroundColor: color}}
    type={type}
    onClick={onclick}
  >
    {children}
  </button>
)

const InputField = ({value, onChange, children}) => (
  <label>
    {children}
    <input type="text" value={value} onChange={event => onChange(event.target.value)}/>
  </label>
)

const CopyRight = ({label}) => (
  <div>
    CopyRight by {label}
  </div>
)

const SplitPane = ({left, right}) => (
  <div>
    <div className="left-pane">{left}</div>
    <div className="right-pane">{right}</div>
  </div>
)

export default App;
