import './App.css';
import {useState} from "react";


export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, " $1");
}
function App() {
    const [btnColor, setBtnColor] = useState('MediumVioletRed');
    const [checkboxState, setCheckboxState] = useState(false);
    const newBtnColor = btnColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

    return (
        <div>
            <button disabled={checkboxState} onClick={() => setBtnColor(newBtnColor)} style={{backgroundColor: checkboxState ? 'gray' : btnColor}}>  Change to {replaceCamelWithSpaces(newBtnColor)}</button>
            <input id="checkbox-btn" defaultChecked={checkboxState} type="checkbox" onChange={(e) => setCheckboxState(e.target.checked)} />
            <label htmlFor="checkbox-btn">Disable button</label>
        </div>
    );
}

export default App;
