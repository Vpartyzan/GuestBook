import React from 'react';
import style from './Profile.module.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '380px',
      },
    },
  }));

const Profile = () => {    

    const classes = useStyles();

    return (
        <div className={style.header}>
            
                <div className={classes.root} noValidate autoComplete="off">                    
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                </div>
                <div className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Message" variant="outlined" />                    
                </div>
                <div className={style.btn}>
                    <Button variant="contained" color="primary">
                        Send message
                    </Button>
                </div>
            
        </div>
    )
}

export default Profile;