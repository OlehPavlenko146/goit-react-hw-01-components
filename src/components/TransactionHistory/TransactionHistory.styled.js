import styled from 'styled-components';

export const TableWrap = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 240px;
  background-color: white;
  padding: 20px;
`;

export const TadbleHead = styled.thead`
  background-color: lightgreen;
`;
export const TableHeadRaw = styled.tr`
  display: flex;
  justify-content: space-evenly;
`;

export const TitleColumns = styled.th`
  padding: 5px;
  font-size: 10px;
  width: calc(100% / 3);
  border: 1px solid white;
`;

export const TableRaws = styled.tr`
  display: flex;
  background-color: lightblue;
`;

export const TableData = styled.td`
  display: flex;
  justify-content: center;
  width: calc(100% / 3);
  font-size: 12px;
  padding: 5px;
  border: 1px solid white;
`;
