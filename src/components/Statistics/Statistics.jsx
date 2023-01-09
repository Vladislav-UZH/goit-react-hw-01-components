import PropTypes from 'prop-types';
import {
  StatSection,
  Title,
  StatsList,
  StatsItem,
  Label,
  Value,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  // console.log(title);
  return (
    <StatSection>
      <Title>{title ?? 'Upload stats'}</Title>
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <Label>{label}</Label>
            <Value>{percentage}%</Value>
          </StatsItem>
        ))}
      </StatsList>
    </StatSection>
  );
};
// StatSection
// Title
// StatsList
// StatsItem
// Label
// Value

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
