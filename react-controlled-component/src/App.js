import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './Components/TextInput'
import Select from './Components/Select'
import NumberInput from './Components/NumberInput'
import Checkbox from './Components/Checkbox'

const App = () => {
  const [textInputValue, setTextInputValue] = useState("Hello");
  const [selectValue, setSelectValue] = useState("Java");
  const [numberInputValue, setNumberInputValue] = useState(0);
  const [checkboxValue, setCheckboxValue] = useState(true)

  const handleTextInputChange = value => {
    setTextInputValue(value)
  }

  const handleSelectValue = value => {
    setSelectValue(value)
  }

  const handleNumberInputChange = value => {
    setNumberInputValue(value)
  }

  const handleCheckboxChange = value => {
    setCheckboxValue(value)
  }
  return (
    <div>

      <div>
        <TextInput value={textInputValue} onTextInputChange={handleTextInputChange}>type a text</TextInput>
        <p>
          <strong>Result: </strong>{textInputValue}
        </p>
      </div>

      <div>
        <Select value={selectValue} onSelectChange={handleSelectValue}>Choice</Select>
        <p>
          <strong>Result: </strong>{selectValue}
        </p>
      </div>

      <div>
        <NumberInput value={numberInputValue} onNumberInputChange={handleNumberInputChange} max={5} min={-1}>Choice</NumberInput>
        <p>
          <strong>Result: </strong>{numberInputValue}
        </p>
      </div>
      <hr/>
      <div>
        <Checkbox value={checkboxValue} onCheckboxChange={handleCheckboxChange}>check</Checkbox>
        <p>
          <strong>Result: </strong>{checkboxValue.toString()}
        </p>
      </div>
      
    </div>
    
  );
}

export default App;
