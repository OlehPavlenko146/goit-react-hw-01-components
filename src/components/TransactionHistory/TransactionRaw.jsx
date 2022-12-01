import PropTypes from 'prop-types';
import { TableRaws, TableData } from './TransactionHistory.styled';

export const TransactionRaw = ({ item: { type, amount, currency } }) => {
  return (
    <TableRaws>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRaws>
  );
};

TransactionRaw.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
