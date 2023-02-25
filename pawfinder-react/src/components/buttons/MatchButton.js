function MatchButton() {

  const onClickHandler = ()=> alert("MatchButton")

  return (
    <button className="MatchButton" onClick={onClickHandler}>
      <span>Match</span>
    </button>
  );
  
};

export default MatchButton;