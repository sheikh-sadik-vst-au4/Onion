import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {FormControl,InputLabel,NativeSelect,FormHelperText} from '@material-ui/core';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Plot details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <FormControl style={{width:"100%"}}>
        <InputLabel shrink htmlFor="basal-dose">
          Basal Dose
        </InputLabel>
        <NativeSelect
          inputProps={{
            name: 'basaldose',
            id: 'basal-dose',
          }}
        >
          <option value="">None</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Please select type</FormHelperText>
      </FormControl>
        </Grid>     <Grid item xs={12} sm={6}>
          <TextField
            required
            id="basalquantity"
            name="basalquantity"
            label="Quantity"
            fullWidth
            autoComplete="basal quantity"
          />
        </Grid>
   
      </Grid>
    </React.Fragment>
  );
}