function ViewProfileButton() {
  
  const onClickHandler = ()=> alert("ViewProfileButton")

  return (
    <button className="ViewProfileButton" onClick={onClickHandler}>
      <span>View Profile</span>
    </button>
  );

};

export default ViewProfileButton;