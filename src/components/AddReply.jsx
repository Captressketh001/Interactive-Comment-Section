import React from "react";

const AddReply = (props) => {
    return(
        <div className='reply-input'>
            <div className='reply-area'>
              <img src={props.currentUser} alt='user' className='reply-user'></img>
              <input type='text' className='reply-text' placeholder={props.replyArea_placeholder} value={props.inputValue} onInput={props.handleReply}></input>
              <button className='reply-button' onClick={props.sendReply}>{props.replyButton}</button>
            </div>
          </div>
    )
}
export default AddReply