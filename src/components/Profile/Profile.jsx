import PropTypes from 'prop-types';
import {
  Card,
  StatsList,
  StatsItem,
  UserContainer,
  UserImage,
  Username,
  UserTag,
  UserLocation,
  FollowersLabel,
  FollowersValue,
  ViewsLabel,
  ViewsValue,
  LikesLabel,
  LikesValue,
} from './Profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { views, followers, likes },
}) => {
  return (
    <Card>
      <UserContainer>
        <UserImage src={avatar} alt="User avatar" width="200px" />
        <Username>{username}</Username>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserContainer>

      <StatsList>
        <StatsItem>
          <FollowersLabel>Followers</FollowersLabel>
          <FollowersValue>{followers}</FollowersValue>
        </StatsItem>
        <StatsItem>
          <ViewsLabel>Views</ViewsLabel>
          <ViewsValue>{views}</ViewsValue>
        </StatsItem>
        <StatsItem>
          <LikesLabel>Likes</LikesLabel>
          <LikesValue>{likes}</LikesValue>
        </StatsItem>
      </StatsList>
    </Card>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
