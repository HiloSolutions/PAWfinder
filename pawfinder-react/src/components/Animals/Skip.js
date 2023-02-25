//when the user clicks skip, they change the formatting of the animal to hide its card and show the undo button
import UndoButton from "../buttons/UndoButton";
export default function Hide(props) {
  return (
    < UndoButton onClick={props.onClick} />
  );
}