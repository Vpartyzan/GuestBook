import React from 'react';
import style from './../Comments.module.css'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Message = (props) => {
    return (        
        <div className={style.area}>
            <div>
                <div className={style.name}>
                    {props.name}
                </div>                
                <div>{props.time} / {props.date}</div>
            </div>            
            <div>{props.comment}</div>
            <IconButton aria-label="delete" >
                <DeleteIcon className={style.delbut} />
            </IconButton>
        </div>
    )
}

export default Message;