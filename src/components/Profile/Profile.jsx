import PropTypes from 'prop-types';
import {
  Avatar,
  ProfileWrap,
  Description,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <ProfileWrap>
    <Description>
      <Avatar src={avatar} alt={username} />

      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </StatsItem>
    </Stats>
  </ProfileWrap>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
