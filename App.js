

import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';// react hook
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';


import memories from './images/memories.png';

import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
   
  //react hook
    useEffect(() => {
      dispatch(getPosts());
    }, [ dispatch]);



    return (
      <Container maxWidth="lg">
      <AppBar className={classes.appBar}  position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
       <img  className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
          <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Posts />
                  {/* <h1>'hello'</h1> */}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form  />
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>

//<h1>'hello'</h1>
// <Posts />

      );
    };


export default App;

// 1:02:57