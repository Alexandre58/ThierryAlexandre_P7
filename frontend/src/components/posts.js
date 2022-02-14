import React from 'react'
import Like from './like';

//design d'un post


export const Post =({messages}) => {
  

    return (
        <div className="post_container">
                <h2 className="h2_post">{messages.title}</h2>
                    <img src="https...." className="img_post" alt="img_post" />

                <p className="post_content">{messages.content}</p>

                <div className="author">
                     <h3>{messages.firstname, messages.lastname}</h3>
                     <likes messages ={messages} />
                </div>
        </div>
    )
}