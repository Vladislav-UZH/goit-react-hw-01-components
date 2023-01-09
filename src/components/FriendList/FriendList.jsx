import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { List } from './FriendsList.styled';
export const FriendList = ({ props }) => {
  return (
    <List>
      {props.map(friend => {
        return <FriendListItem key={friend.id} props={friend} />;
      })}
    </List>
  );
};

FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
