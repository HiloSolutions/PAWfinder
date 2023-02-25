function UndoButton() {
  const onClickHandler = ()=> alert("UndoButton")

  return (
    <button 
      className="UndoButton" 
      onClick={onClickHandler}>
      <span>Undo</span>
    </button>
  );

};

export default UndoButton;