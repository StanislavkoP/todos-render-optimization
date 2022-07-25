import { useSelector } from 'react-redux';
import { selectUser } from '../../store/selectors/user';

export function useCopyRight() {
  const user = useSelector(selectUser);

  return {
    models: {
      user
    }
  };
}
