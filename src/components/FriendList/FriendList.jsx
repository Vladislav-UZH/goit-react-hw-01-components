import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { List } from './FriendsList.styled';
export const FriendList = ({ props }) => {
  //   console.log(props);
  return (
    <List>
      {props.map(friend => {
        // console.log(friend);
        return <FriendListItem key={friend.id} props={friend} />;
      })}
    </List>
  );
};

FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
