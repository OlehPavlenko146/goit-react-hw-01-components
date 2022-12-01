import PropTypes from 'prop-types';
import { StatisticsItems } from './StatisticsItems';
import { StatisticsSection, Title, StatList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => (
  <StatisticsSection>
    {title && <Title>{title}</Title>}

    <StatList>
      {stats.map(data => (
        <StatisticsItems key={data.id} stat={data} />
      ))}
    </StatList>
  </StatisticsSection>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};
