import PropTypes from 'prop-types';

export const Notification = ({ mesage }) => {
  return <p>{mesage}</p>;
};

Notification.propTypes = {
  mesage: PropTypes.string.isRequired,
};
