const RemoveButton = ({ onClick }) => {
  return  <button className="destroy" onClick={onClick} data-testid="todo-remove" />
}

export default RemoveButton;
