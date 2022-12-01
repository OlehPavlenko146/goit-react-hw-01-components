import styled from 'styled-components';

export const Item = styled.li`
  width: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(
    rgba(47, 48, 58, 0.4),
    rgba(47, 48, 58, 0.2)
  );
  border: 1px solid #ffffff;
`;

export const Label = styled.span`
  display: block;
  font-size: 10px;
  padding: 5px;
`;

export const Percentage = styled.span`
  display: block;
  font-size: 15px;
  font-weight: bold;
  padding: 5px;
`;

export const StatisticsSection = styled.section`
  padding: 20px;
  width: 240px;
`;

export const Title = styled.h2`
  font-size: 20px;
  padding: 30px;
  background-color: #ffffff;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
`;
