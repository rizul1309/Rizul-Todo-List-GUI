import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () =>  (
  <Box  >
    <Stack direction='row' justifyContent='center' alignItems='center' height='30vh' >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;
