import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function StackDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Stack details
      </Typography>
      <Grid container spacing={3}>
        <Grid></Grid>
      </Grid>
    </React.Fragment>
  );
}