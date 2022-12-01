import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './Statistics.styled';

export const StatisticsItems = ({ stat: { label, percentage } }) => (
  <Item>
    <Label>{label}</Label>
    <Percentage>{percentage}%</Percentage>
  </Item>
);

StatisticsItems.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
