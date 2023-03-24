import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [btnColor, setBtnColor] = useState('red');
    const [checkboxState, setCheckboxState] = useState(false);
    const newBtnColor = btnColor === 'red' ? 'blue' : 'red';

    return (
        <div>
            <button disabled={checkboxState} onClick={() => setBtnColor(newBtnColor)} style={{backgroundColor: btnColor}}> Change
                to {newBtnColor}</button>
            <input defaultChecked={checkboxState} type="checkbox" onChange={(e) => setCheckboxState(e.target.checked)} />
        </div>
    );
}

export default App;
