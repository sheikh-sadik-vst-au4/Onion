import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Farmer details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="MiddleName"
            name="MiddleName"
            label="Middle name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="mobilenumber"
            name="mobilenumber"
            label="Mobile Number"
            type="number"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="age"
            name="age"
            label="Age"
            fullWidth
            type="number"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="education"
            name="education"
            label="Education"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="farmingexperience"
            name="farmingexperience"
            label="Farming Experience"
            fullWidth
            type="number"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="totalarea"
            name="totalarea"
            label="Total Area"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="onioncultivationarea"
            name="onioncultivationarea"
            label="Onion Cultivation Area"
            fullWidth
            type="number"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="gatno"
            name="gatno"
            label="Gat No."
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
         
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="village"
            name="village"
            label="Village"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="taluka"
            name="taluka"
            label="Taluka"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="district"
            name="district"
            label="District"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            type="number"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="photo"
            name="photo"
            label="Photo"
            type="file"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}