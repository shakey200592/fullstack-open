function Button({ buttonEventHandler, text }) {
  return <button onClick={buttonEventHandler}>{text}</button>;
}

export default Button;
