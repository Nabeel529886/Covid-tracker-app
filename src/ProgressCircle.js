import React from 'react'
import BackDrop from '@material-ui/lab/BackDrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#f5f5f5',
    },
  }));


const ProgressCircle = () =>{
    const classes = useStyles()
    return (
    <BackDrop open={true} className={classes.backdrop}>
        <CircularProgress color="inherit"/>
    </BackDrop>
)}

export default ProgressCircle