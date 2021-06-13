import React, { useState } from 'react';
import { Grid, Typography, TextField, Box } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

function InputGroup(props: any) {
  const { group_id } = props;

  const top100Films = ['', 'textvalue1', 'textvalue2', 'textvalue3', 'textvalue4', 'textvalue5'];
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option: any) => option,
  };

  return (
    <Box m={1}>
      <Typography variant="h4">Group {group_id}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Autocomplete
            {...defaultProps}
            value={value1}
            onChange={(event, newValue: any) => {
              setValue1(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Input 1" margin="normal" />}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Autocomplete
            {...defaultProps}
            value={value2}
            onChange={(event, newValue: any) => {
              setValue2(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Input 2" margin="normal" />}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Autocomplete
            {...defaultProps}
            value={value3}
            onChange={(event, newValue: any) => {
              setValue3(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Input 3" margin="normal" />}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default InputGroup;
