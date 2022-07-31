import { ClassNames } from '@emotion/react'
import {  ToggleButton, ToggleButtonGroup } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles({
  root: {
    width: '100%',
    justifyContent: 'space-between',
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: '.8rem',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '10px',
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
      borderRadius: '10px',
    },
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
      borderRadius: '10px',
   
      border: '1px solid rgba(0, 0, 0, 0.12)',
    },
    '&.Mui-selected': {
      borderRadius: '10px',
      background: '#36DFDF',
      color: '#fff',
    },
    '&.MuiToggleButton-root': {
      '&:hover': {
        background: '#36DFDF ',
        color: '#fff',
      },
    },
  },
});

const FilerListToggle = ({options, value, selectToggle}) => {
  const classes=useStyles();
  return (
    <ToggleButtonGroup
    value = {value}
    onChange={selectToggle}
    className={classes.root}
    exclusive
    >
        {options.map(({label, id, value})=>
        <ToggleButton className={classes.toggle}  key={id} value={value}>
            {label}
        </ToggleButton>)}
    </ToggleButtonGroup>
  )
}

export default FilerListToggle