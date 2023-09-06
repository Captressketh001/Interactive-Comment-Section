import React from "react";


const Comment = (props) => {
    const [score, setScore] = React.useState(props.counter)

    const IncreaseScore = () => {
        if (score > props.counter) {
            return ''
        }
        setScore((prevData) => prevData + 1)
    }

    const DecreaseScore = () => {
        if (score < props.counter) {
            return ''
        }
        setScore((prevData) => prevData - 1)
    }
    return (
        <div className='comment-box'>
            <div className='comment-area'>
                <div className='vote-section'>
                    <img src={plus} alt='plus' onClick={IncreaseScore}></img>
                    <p>{score}</p>
                    <img src={remove} alt='plus' onClick={DecreaseScore}></img>
                </div>
                <div className='comment-text'>
                    <div className='user-section'>
                        <img src={props.user_image} alt='user'></img>
                        <div>{props.name} {props.currentUser && <span>you</span>}</div>

                        <div className='week'>{props.createdAt}</div>
                        {props.currentUser && <div className='reply'>
                            <img src={del} className='reply' alt='reply'></img>
                            <div className='text'>Delete</div>
                        </div>}
                        {props.currentUser && <div className='reply'>
                            <img src={edit} className='reply' alt='reply'></img>
                            <div className='text'>Edit</div>
                        </div>}
                        {!props.currentUser && <div className='reply'>
                            <img src={reply} className='reply' alt='reply'></img>
                            <div className='text'>Reply</div>
                        </div>}

                    </div>
                    <p className='text'>{props.content}</p>
                </div>
            </div>

        </div>
    )
}
export default Comment