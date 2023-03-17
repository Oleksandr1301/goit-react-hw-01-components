import PropTypes from 'prop-types';
import friends from './friends.json';
import FriendListItem from './frienfListItem/friendListItem';
import css from './friendList.module.css';

const FriendsList = () => {
  const elments = friends.map(item => {
    return (
      <FriendListItem
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
      />
    );
  });
  return <ul className={css.friend__list}>{elments}</ul>;
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendsList;
