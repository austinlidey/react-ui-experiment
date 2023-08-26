import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const inputLabelContent = 'What would you like to add?';

const inputStyles = {
    color: 'black',
    backgroundColor: 'white',
  };

const labelStyles = {
    color: 'black',
  };

const buttonStyles = {
    backgroundColor: '#109648',
    fontWeight: 'bold',
    padding: '15px',
    marginLeft: '10px',
    fontSmooth: 'always'
}

export default function ActionAreaCard() {
  return (
    <Card sx={{ backgroundColor: '#484349', maxWidth: '75vw' }}>
      <CardActionArea sx={{}}>
        <CardContent sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <TextField id="filled-basic" label={inputLabelContent} variant="filled" InputProps={{ style: inputStyles}} 
                InputLabelProps={{ style: labelStyles }} sx={{width: '100%', backgroundColor: 'white'}} />
            <Button variant="contained" endIcon={<SendIcon />} sx={buttonStyles}>
                Post
            </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}