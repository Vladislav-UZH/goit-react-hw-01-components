import PropTypes from 'prop-types';
import {
  Body,
  Head,
  Container,
  Table,
  Colon,
  Title,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <Container>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </Container>
      </Head>
      <Body>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Container key={id}>
              <Colon>{type}</Colon>
              <Colon>{amount}</Colon>
              <Colon>{currency}</Colon>
            </Container>
          );
        })}
      </Body>
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
