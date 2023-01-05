import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: #e0e0e0;
  margin: 0 auto;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  background-color: #0f1327;
`;
// User
const UserContainer = styled.div`
  padding: 10px;
  display: flex;
  width: 100%;
  max-width: 270px;
  background-color: #2f314b;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
`;

const UserImage = styled.img`
  border-radius: 50%;
  background-color: #7c7c7c;
`;
const Username = styled.p`
  font-size: 24px;
  font-weight: 400;
`;
const UserTag = styled.p`
  font-weight: 700;
  color: #cf4707;
`;
const UserLocation = styled.p`
  color: #acacac;
`;
// Stats
const StatsList = styled.ul`
  display: flex;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  /* border-top-left-radius: 60%;
  border-top-right-radius: 60%;
  background-color: #2c385e; */
`;
const StatsItem = styled.li`
  display: flex;
  /* padding: 0 10px; */

  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #cf4707;
  font-weight: 700;
  /* :not(:last-child) {
    border-right: 1px solid #c5c5c5;
  } */
`;
// Stats values
const FollowersLabel = styled.span`
  font-weight: 500;
`;
const FollowersValue = styled.span`
  color: #acacac;
`;
const ViewsLabel = styled.span`
  font-weight: 500;
`;
const ViewsValue = styled.span`
  color: #acacac;
`;
const LikesLabel = styled.span`
  font-weight: 500;
`;
const LikesValue = styled.span`
  color: #acacac;
`;
export {
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
};
