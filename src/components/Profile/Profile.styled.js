import styled from 'styled-components';

export const ProfileWrap = styled.div`
  padding: 20px;
  width: 240px;
`;

export const Avatar = styled.img`
  margin-top: 50px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  background-color: #ffffff;
`;

export const Name = styled.p`
  margin-top: 16px;
  font-size: 20px;
  color: #000000;
`;

export const Tag = styled.p`
  margin-top: 10px;
  font-size: 15px;
  color: #535151;
`;

export const Location = styled.p`
  margin-top: 10px;
  font-size: 15px;
  color: #535151;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
`;

export const StatsItem = styled.li`
  display: flex;
  width: 80px;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-image: linear-gradient(
    rgba(47, 48, 58, 0.4),
    rgba(47, 48, 58, 0.2)
  );
  border: 1px solid #ffffff;
`;

export const Label = styled.span`
  font-size: 12px;
  color: #535151;
`;

export const Quantity = styled.span`
  font-size: 15px;
  color: #000000;
  font-weight: bold;
`;
