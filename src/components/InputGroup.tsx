import React, { useState } from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inputgroup: {
    marginTop: 30,
  },
});

function InputGroup(props: any) {
  const classes = useStyles();
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
    <React.Fragment>
      <Typography variant="h4" className={classes.inputgroup}>
        Group {group_id}
      </Typography>
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
    </React.Fragment>
  );
}

export default InputGroup;
