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

const Profile = (props) => {

    const classes = useStyles();

    let newName = React.createRef();
    let newMessage = React.createRef();

    let addComment = () => {
        props.addComment();
    }

    let onBlankNameChange = () => {
        let name = newName.current.value;        
        props.updateNewNameText(name);
    } 
    
    let onBlankMessageChange = () => {
        let message = newMessage.current.value;
        props.updatenewMessageText(message);
    }   

    return (
        <div className={style.header}>
            
                <div className={classes.root} noValidate autoComplete="off">                    
                    <textarea onChange={onBlankNameChange} ref={newName} value={props.state.newName} />
                </div>
                <div className={classes.root} noValidate autoComplete="off">
                    <textarea onChange={onBlankMessageChange} ref={newMessage} value={props.state.newMessage} />
                   {/* <TextField onChange={onBlankMessageChange} id="message" label="Message" variant="outlined" ref={newMessage} value={props.state.newMessage} /> */}                   
                </div>
                <div className={style.btn}>
                    <Button onClick={addComment} variant="contained" color="primary">
                        Send message
                    </Button>
                </div>
            
        </div>
    )
}

export default Profile;