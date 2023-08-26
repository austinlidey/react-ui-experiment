import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ backgroundColor: '#109648', maxWidth: '75vw' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color='white' sx={{fontWeight: '700', fontSmooth: 'always'}}>
            Card Title
          </Typography>
          <Typography variant="body2" color="white" sx={{fontSmooth: 'always'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}