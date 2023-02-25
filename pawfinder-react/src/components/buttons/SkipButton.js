function SkipButton() {
  
  const onClickHandler = ()=> alert("SkipButton")

  return (
    <button className="SkipButton" onClick={onClickHandler}>
      <span>Skip</span>
    </button>
  );

};

export default SkipButton;