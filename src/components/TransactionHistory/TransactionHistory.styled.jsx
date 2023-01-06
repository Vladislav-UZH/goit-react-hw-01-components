import styled from 'styled-components';
const mainColonStyle = `padding: 10px 50px;


`;
const Table = styled.table`
  margin: 0 auto;
  padding: 10px 70px;
  border-radius: 10px;

  text-align: center;
  background-color: #0f1327;
  color: #acacac;
`;
const Head = styled.thead``;
const Title = styled.td`
  ${mainColonStyle}

  :first-child {
    border-top-left-radius: 10px;
  }
  :last-child {
    border-top-right-radius: 10px;
  }
  font-size: 22px;
  font-weight: 700;
  background-color: #ec5109;
  color: #ffffff;
`;
const Body = styled.tbody``;
const Container = styled.tr``;
const Colon = styled.td`
  ${mainColonStyle}
  font-weight: 500;
  background-color: #2f314b;
`;

export { Body, Head, Container, Table, Colon, Title };
