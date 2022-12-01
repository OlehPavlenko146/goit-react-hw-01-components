import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  gap: 5px;
  background-image: linear-gradient(
    rgba(47, 48, 58, 0.4),
    rgba(47, 48, 58, 0.2)
  );
  border: 1px solid #ffffff;
`;

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border: 1px solid black;
  border-radius: 50%;

  background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};
`;

export const FriendAvatar = styled.img`
  width: 30px;
`;

export const FriendName = styled.p`
  font-size: 20px;
`;
export const FriendsListWrap = styled.ul`
  padding: 20px;
  background-color: #fff;
`;
