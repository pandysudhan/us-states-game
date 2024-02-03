import { useState } from "react";
import InputComponent from "../components/InputComponent";
import MapComponent from "../components/MapComponent";
import StateToCode from "../data/StateToCode";
import Header from '../components/Header'
const messageAreaDefault = { isInput: false, type: "correct" };

export default function GamePage() {
  const [checkedStates, setCheckedStates] = useState([]);
  const [messageArea, setMessageArea] = useState(messageAreaDefault);

  function onStateInput(state) {
    const tempCheckedStates = [...checkedStates];
    const cleanStateInput = state.toLowerCase().trim().replace(/\s+/g, " ");
    const stateCode = StateToCode[cleanStateInput];
    console.log(stateCode);

    if (!stateCode) {
      setMessageArea({ isInput: true, type: "incorrect" });
    }
    // Check if the state is in the list
    else if (checkedStates.includes(stateCode)) {
      console.log(`${cleanStateInput} is already in the list.`);
      setMessageArea({ isInput: true, type: "repeat" });
    } else {
      // If not, add it to the list
      tempCheckedStates.push(stateCode);
      setCheckedStates(tempCheckedStates);
      setMessageArea({ isInput: true, type: "correct" });
    }
  }

  return (
    <div className="flex flex-col">
      <Header></Header>
      <InputComponent
        onStateInput={onStateInput}
        messageArea={messageArea}
      ></InputComponent>
      <MapComponent checkedStates={checkedStates}></MapComponent>
    </div>
  );
}
