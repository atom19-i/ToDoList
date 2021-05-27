import React , {useState} from 'react';
import {v4 as uuid} from "uuid" ; //to generate unique random ID
import List from "./component/List/List" ;
import store from "./utils/store";
import StoreApi from './utils/storeApi';
import { makeStyles } from '@material-ui/core/styles' ;
const useStyle = makeStyles(( theme) => ({
  root: {
    display:'flex',
  },
})) ;

export default function App() {
  const [data, setData] = useState(store);
  const classes = useStyle();
  const addMoreCard = (title, listId) => {
    const newCardId = uuid() ;
    const newCard = {
      id: newCardId,
      title,
    } ;

    const list = data.lists[listId] ;
    list.cards = [...list.cards,newCard] //spread operator to get the prev data

    const newState = { 
      ...data,
     lists:{
       ...data.lists,
       [listId]: list,
     },
    };
    setData(newState);
  } ;

  return (
    <StoreApi.Provider value={{ addMoreCard }}>
    <div className={classes.root}>
    { data.listIds.map((listId) => {
      const list = data.lists[listId] ;
       return <List list={list} key={listId} />;
    })}
    </div>
    </StoreApi.Provider>
  );
}

