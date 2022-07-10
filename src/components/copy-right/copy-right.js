import {useSelector} from "react-redux";
import {selectUser} from "../../store/selectors/user";
import {memo} from "react";

export const CopyRightComponent = () => {
  const user = useSelector(selectUser);

  return (
    <footer className="info">
      <p data-testid="instruction">Welcome {user.fullName}!</p>
      <p data-testid="instruction">Double-click to edit a todo</p>
      <p>
        Created by <a href="http://github.com/blacksonic/">blacksonic</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  );
}


export const CopyRight = memo(CopyRightComponent)
// export const CopyRight = CopyRightComponent
