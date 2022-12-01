import PropTypes from 'prop-types';
import {
  Status,
  FriendItem,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export const FriendListItem = ({ item: { avatar, name, isOnline } }) => (
  <FriendItem>
    <Status isOnline={isOnline}></Status>
    <FriendAvatar src={avatar} alt={name} width="48" />
    <FriendName>{name}</FriendName>
  </FriendItem>
);

FriendListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
