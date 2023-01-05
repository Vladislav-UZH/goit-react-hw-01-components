import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendsListItem.styled';
export const FriendListItem = ({ props: { isOnline, avatar, name } }) => {
  return (
    <Item>
      <Status status={isOnline} />
      <Avatar src={avatar} alt="User Avatar" />
      <Name>{name}</Name>
    </Item>
  );
};
FriendListItem.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
