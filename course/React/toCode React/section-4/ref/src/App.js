import React, { useRef, useEffect } from "react";

function App() {
  useEffect(() => {
    firstFocus();
  }, []);
  const firstBox = useRef(null);
  const secondBox = useRef(null);
  const thirdBox = useRef(null);
  const fourthBox = useRef(null);
  const styleBox = {
    display: "inline-block",
    height: "5rem",
    width: "5rem",
    border: "1px solid black",
    marginRight: "5px"
  };

  const firstFocus = () => {
    firstBox.current.focus();
  };

  const firstHandleKeyPress = e => {
    secondBox.current.focus();
  };
  const secondHandleKeyPress = e => {
    thirdBox.current.focus();
  };
  const thirdHandleKeyPress = e => {
    fourthBox.current.focus();
  };
  const fourthHandleKeyPress = e => {
    firstBox.current.focus();
  };

  return (
    <div>
      <div
        ref={firstBox}
        tabIndex="0"
        onKeyPress={firstHandleKeyPress}
        style={styleBox}
      ></div>
      <div
        ref={secondBox}
        tabIndex="1"
        onKeyPress={secondHandleKeyPress}
        style={styleBox}
      ></div>
      <div
        ref={thirdBox}
        tabIndex="2"
        onKeyPress={thirdHandleKeyPress}
        style={styleBox}
      ></div>
      <div
        ref={fourthBox}
        tabIndex="3"
        onKeyPress={fourthHandleKeyPress}
        style={styleBox}
      ></div>
    </div>
  );
}

export default App;
