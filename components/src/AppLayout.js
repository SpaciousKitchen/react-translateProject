import propTypes from "prop-types";

const AppLayout = ({ children }) => {
  return { children };
};

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};
export default AppLayout;
