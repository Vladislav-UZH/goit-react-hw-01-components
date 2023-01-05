import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #2f314b;
  padding: 15px;
  border-radius: 10%;
`;
const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 20%;
  background-color: ${({ status }) => {
    return status ? 'green' : 'red';
  }};
`;
const Avatar = styled.img`
  width: 100%;
  max-width: 90px;
  height: 100%;
  max-height: 90px;
  background-color: #7c7c7c;
  border-radius: 50%;
  object-fit: cover;
`;
const Name = styled.p``;

export { Item, Status, Avatar, Name };
