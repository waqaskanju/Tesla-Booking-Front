/* eslint-disable */
// This functino is used to allow switing to component in class based scenair.

//  instead of render use the useNavigator hook.
import { useNavigate } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();

    // return navate prop
    return (
      <Component
        navigate={navigate}
        {...props}
      />
    );
  };

  return Wrapper;
};
