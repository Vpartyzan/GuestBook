import React from 'react';
import Message from './Message/Message';


const Comments = (props) => {
    
    
    let commentElement = props.comments.comment.map ( c => <Message name={c.name} time={c.time} date={c.date} comment={c.comment} />);
    
    return (
        <div>
            {commentElement}            
        </div>
    )
}

export default Comments;