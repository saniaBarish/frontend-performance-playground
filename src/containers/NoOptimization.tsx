/* eslint-disable @typescript-eslint/no-unused-vars */
import Box from '@mui/material/Box';
import { Item } from '../components';
import { createMockUsers } from '../utils';
import { useState } from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import { useRenderCounter } from '../hooks';

export const NoOptimization = () => {
  const [value, setValue] = useState('');
  const users = createMockUsers(1000);
  const renders = useRenderCounter('NoOptimization');

  return (
    <Stack direction="column" spacing={2}>
      <Typography>{`NoOptimization renders: ${renders.current}`}</Typography>
      <TextField
        label="Write Something’s"
        variant="outlined"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <Box>
        {users.map(({ id, ...rest}) => <Item {...rest} />)}
      </Box>
    </Stack>
  );
};
