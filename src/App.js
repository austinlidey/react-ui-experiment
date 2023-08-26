import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ActionItem from './components/ActionItem';
import Grid from '@mui/material/Grid';
import InputArea from './components/InputArea';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'


function App() {
  return (
    <Box sx={{
      backgroundColor: '#F7F0F0', height: '100vh',
      '*::-webkit-scrollbar': {
          width: '8px',
          height: '8px'
      },
      '*::-webkit-scrollbar-track': {
          backgroundColor: 'rgba(0,0,0,0.4)',
      },
      '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#18A999',
          outline: '10px'
      }

    }}>
      <Grid className='grid-column' container justifyContent="center" alignItems="center" sx={{ 
        overflow: 'auto', 
        padding: '5vh', 
        height: '100vh' 
        }}>

        <Stack spacing={2}>
          <InputArea></InputArea>
          <DndProvider backend={Backend}>
          <ActionItem></ActionItem>
          <ActionItem></ActionItem>
          <ActionItem></ActionItem>
          <ActionItem></ActionItem>
          <ActionItem></ActionItem>
          <ActionItem></ActionItem>
          <ActionItem></ActionItem>
          <ActionItem></ActionItem>
          <ActionItem></ActionItem>
          <ActionItem></ActionItem>
          <ActionItem></ActionItem>
          <ActionItem></ActionItem>
          </DndProvider>
        </Stack>
      </Grid>
    </Box>
  );
}

export default App;
