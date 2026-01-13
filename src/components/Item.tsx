import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useRenderCounter } from '../hooks';
import type { User } from '../types';

type ItemProps = Omit<User, 'id'>

export const Item = ({ name, email, avatar }: ItemProps) => {
  const renders = useRenderCounter('Item');

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={name} src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={email}
          secondary={
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              {`Item renders: ${renders.current}`}
            </Typography>
          }
        />
        <Button variant="contained">View</Button>
      </ListItem>
      <Divider />
    </>
  );
};
