import PropTypes from 'prop-types';
import s from './friendsList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={s.item}>
    <span className={isOnline ? s.online : s.offline}></span>
    <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
