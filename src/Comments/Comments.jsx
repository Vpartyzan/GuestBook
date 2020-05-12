import React from 'react';
import style from './Comments.module.css'

const Comments = () => {
    return (
        <div>
            <div className={style.area}>
                Comments 1
            </div>
            <div className={style.area}>
                Comments 2
            </div>
            <div className={style.area}>
                Comments 3
            </div>
        </div>
    )
}

export default Comments;