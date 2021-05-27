import React from 'react';
import {Button, Paper} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles' ;
import { purple } from '@material-ui/core/colors'

const useStyle = makeStyles(( theme) => ({
    card:{
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
    buttonP:{
        margin:theme.spacing(1),
        padding: theme.spacing(0),
        textTransform: 'lowercase',
    },
})) ;

export default function Card({ card }) {
    const classes = useStyle();
    const ColorButton = withStyles((theme) => ({
        root: {
          color: theme.palette.getContrastText(purple[500]),
          fontFamily: 'Helvetica',
          backgroundColor: purple[500],
          '&:hover': {
            backgroundColor: purple[700],
          },
        },
      }))(Button);
    return (
        <div >
            <Paper className={classes.card}>{card.title}</Paper>
            <ColorButton className={classes.buttonP} variant="outlined" size="small" color="#FFFF00">In-progress</ColorButton>
        </div>
    )
}
