import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendsListWrap } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsListWrap>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem key={id} item={{ avatar, name, isOnline }} />
      ))}
    </FriendsListWrap>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
