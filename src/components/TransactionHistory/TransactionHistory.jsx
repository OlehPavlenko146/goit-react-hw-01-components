import PropTypes from 'prop-types';
import { TransactionRaw } from './TransactionRaw';
import {
  TableWrap,
  TadbleHead,
  TableHeadRaw,
  TitleColumns,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableWrap>
      <TadbleHead>
        <TableHeadRaw>
          <TitleColumns>Type</TitleColumns>
          <TitleColumns>Amount</TitleColumns>
          <TitleColumns>Currency</TitleColumns>
        </TableHeadRaw>
      </TadbleHead>

      <tbody>
        {items.map(transactions => (
          <TransactionRaw key={transactions.id} item={transactions} />
        ))}
      </tbody>
    </TableWrap>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
