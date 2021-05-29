import React , {useState} from 'react';
import { Button, Paper} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles' ;
import { purple } from '@material-ui/core/colors';
import data  from '../utils/store';

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


    let oldList = data.lists ;
    const [count,setCount] = useState(0);
    const [list,setList] = useState(oldList) ;
    const handleClick = () => {
      if(count===1)
      {
        if(card.button==="in-progress")
        {
           var newCard = data.lists['list-2'].cards.push('card-8',`${card.title}`,"doing");
           setList(list.cards => [...list.cards,newCard]);
        }
        if(card.button==="doing")
        {
           var nwCard = data.lists['list-3'].cards.push('card-14',`${card.title}`," ");
           setList(list.cards => [...list.cards,nwCard]);
        }
     }
    }
     setCount(0) ;
    return (
        <div >
            <Paper className={classes.card}>{card.title}</Paper>
            <ColorButton className={classes.buttonP} onClick={handleClick}variant="outlined" size="small" color="#FFFF00">{card.button}</ColorButton>
        </div>
    )
}
