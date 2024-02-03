import { Button, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";

export default function InputComponent({ onStateInput, messageArea }) {
  const [inputState, setInputState] = useState("");
  const [showDiv, setShowDiv] = useState(true);

  const handleButtonClick = () => {
    onStateInput(inputState);
    setInputState("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  useEffect(() => {
    setShowDiv(true);

    const timer = setTimeout(() => {
      setShowDiv(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [messageArea]);

  return (
    <div className=" flex flex-col justify-center items-center gap-4">
      <div className="flex flex-row gap-4 mt-10 justify-center items-center">
        <label>Enter a State: </label>
        <TextInput
          value={inputState}
          onChange={(e) => {
            setInputState(e.target.value);
          }}
          onKeyDown={handleKeyPress}
        ></TextInput>
      </div>
      <Button onClick={handleButtonClick}>Check</Button>
      {messageArea.isInput && showDiv && (
        <div className="">
          {messageArea.type === "correct" && (
            <div className="text-green-500">
              {" "}
              <label>Yayy!</label>
            </div>
          )}
          {messageArea.type === "incorrect" && (
            <div className="text-red-500">
              <label className="text-red">Oops!! No state with that name</label>
            </div>
          )}
          {messageArea.type === "repeat" && (
            <div className="text-red-500">
              <label className="text-red">Oops!! State Already Entered</label>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
