import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendsListItem.styled';
export const FriendListItem = ({ props }) => {
  return props.map(({ id, isOnline, avatar, name }) => {
    return (
      <Item key={id}>
        <Status>{isOnline ? 'Online' : 'Offline'}</Status>
        <Avatar src={avatar} alt="User Avatar"></Avatar>
        <Name>{name}</Name>
      </Item>
    );
  });
};
FriendListItem.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
