import React from "react";

const AddComment = (props) =>{
    return(
        <div className='comment-section'>
          <div className='comment-input'>
            <div className='comment-input-area'>
              <img src={props.currentUser} alt='user' className='reply-user'></img>
              <input 
              type='text' 
              className='reply-text' 
              placeholder={props.inputArea_placeholder}
              value={props.inputArea_value}
              onInput={props.handleInputArea}></input>
              <button className='reply-button' onClick={props.sendComment}>{props.sendButton}</button>
            </div>
          </div>
        </div>
    )
}
export default AddComment;