import styled from 'styled-components';

const StatSection = styled.section`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  margin: 30px auto;
  width: 100%;
  max-width: 400px;
  background-color: #0f1327;
  padding: 40px 0;
  border-radius: 10px;
`;
const Title = styled.h2`
  margin-left: 10%;
  margin-bottom: 10px;
  color: #e0e0e0;
`;
const StatsList = styled.ul`
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #2f314b;
`;
const StatsItem = styled.li`
  padding: 10px;
  display: flex;
  width: 100%;
  border: 1px solid #acacac;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Label = styled.span`
  font-weight: 700;
  color: #cf4707;
`;
const Value = styled.span`
  color: #acacac;
`;

export { StatSection, Title, StatsList, StatsItem, Label, Value };
