// PrivateRoute.jsx
import  { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import PropTypes from 'prop-types';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={(props) =>
        isLoggedIn ? <Element {...props} /> : <Navigate to="/login" replace />
      }
    />
  );
};
PrivateRoute.propTypes = {
    element: PropTypes.elementType.isRequired,
  };

export default PrivateRoute;
