import { useSelector } from 'react-redux/es/hooks/useSelector';
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsError = state => state.auth.error;

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const error = useSelector(selectIsError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    error,
  };
};
