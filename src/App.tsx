import { NoOptimization } from './containers';
import { Container } from './components';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useRenderCounter } from './hooks';

function App() {
  const renders = useRenderCounter('App');

  return (
    <Container>
      <Stack direction="column" spacing={2}>
        <Typography>App renders: {renders.current}</Typography>
        <NoOptimization />
      </Stack>
    </Container>
  );
}

export default App;
