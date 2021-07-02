import PropTypes from 'prop-types';
import s from './friendsList.module.css';

const FriendsList = ({ friends }) => (
  <ul className={s.list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={s.item} key={id}>
        <span className={isOnline ? s.onLine : s.offLine}></span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendsList;
