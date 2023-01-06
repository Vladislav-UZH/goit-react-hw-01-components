import PropTypes from 'prop-types';
import {
  Body,
  Head,
  Container,
  Table,
  Colon,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <Container>
          <Colon></Colon>
          <Colon></Colon>
          <Colon></Colon>
        </Container>
      </Head>
      <Body>
        {items.map(({ id, type, amout, currency }) => {
          return (
            <Container key={id}>
              <Colon>{type}</Colon>
              <Colon>{amout}</Colon>
              <Colon>{currency}</Colon>
            </Container>
          );
        })}
      </Body>
    </Table>
  );
};
