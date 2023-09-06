// import logo from './logo.svg';
// // import plus from '/images/icon-plus.svg'
// // import remove from './assets/images/icon-minus.svg'
// // import user from './assets/images/avatars/image-amyrobson.webp'
// import reply from './assets/images/icon-reply.svg'
// import del from './assets/images/icon-delete.svg'
// import edit from './assets/images/icon-edit.svg'
import AddComment from './components/AddComment'
import AddReply from './components/AddReply'
import JSON from "./data.json"
import './index.css';
import React from 'react'
// const date = () => {
//     return 'No'
// }
const App = () => {
  const [data, UserData] = React.useState(JSON)
  const currentUser = data.currentUser.image.png
  return (
    <div className="App">
      <main >

        <div className="comment-section">
          <div className='comment-box'>
            <div className='comment-area'>
              <div className='vote-section'>
                <img src="/images/icon-plus.svg" alt='plus'></img>
                <p>20</p>
                <img src="/images/icon-minus.svg" alt='plus'></img>
              </div>
              <div className='comment-text'>
                <div className='user-section'>
                  <img src="/images/avatars/image-amyrobson.webp" alt='user'></img>
                  <div>juliusomo</div>
                  <div className='week'>2 weeks ago</div>
                  <div className='reply'>
                    <img src="/images/icon-reply.svg" className='reply' alt='reply'></img>
                    <div className='text'>Reply</div>
                  </div>
                </div>
                <p className='text'>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.
                  You've nailed the design and the responsiveness at various breakpoints works really well.</p>
              </div>
            </div>

          </div>
          <div className='reply-box'>
            <div className='reply-area'>
              <img src="/images/avatars/image-amyrobson.webp" alt='user' className='reply-user'></img>
              <input type='text' className='reply-text' placeholder='Add a reply'></input>
              <button className='reply-button'>Reply</button>
            </div>
          </div>

          <div className='wrapper'>
            <div className='reply-input'>
              <div>
                <div className='reply-input-area'>
                  <div className='vote-section'>
                    <img src="/images/icon-plus.svg" alt='plus'></img>
                    <p>20</p>
                    <img src="/images/icon-minus.svg" alt='plus'></img>
                  </div>
                  <div className='comment-text'>
                    <div className='user-section'>
                      <img src="/images/avatars/image-amyrobson.webp" alt='user'></img>
                      <div>juliusomo <span>you</span></div>
                      <div className='week'>2 weeks ago</div>
                      <div className='reply'>
                        <img src="/images/icon-delete.svg" className='reply' alt='reply'></img>
                        <div className='text'>Delete</div>
                      </div>
                      <div className='reply'>
                        <img src="/images/icon-edit.svg" className='reply' alt='reply'></img>
                        <div className='text'>Edit</div>
                      </div>
                      <div className='reply' style={{ display: 'none' }}>
                        <img src="/images/icon-reply.svg" className='reply' alt='reply'></img>
                        <div className='text'>Reply</div>
                      </div>
                    </div>
                    <p className='text'>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.
                      You've nailed the design and the responsiveness at various breakpoints works really well.</p>
                  </div>


                </div>
              </div>

              {/* <div className='reply-box'>
                  <div className='reply-area'>
                    <img src={user} alt='user' className='reply-user'></img>
                    <input type='text' className='reply-text' placeholder='Add a reply'></input>
                    <button className='reply-button'>Reply</button>
                  </div>
                </div> */}
            </div>

            <div className='reply-input'>
              <div>
                <div className='reply-input-area'>
                  <div className='vote-section'>
                    <img src="/images/icon-plus.svg" alt='plus'></img>
                    <p>20</p>
                    <img src="/images/icon-minus.svg" alt='plus'></img>
                  </div>
                  <div className='comment-text'>
                    <div className='user-section'>
                      <img src="/images/avatars/image-amyrobson.webp" alt='user'></img>
                      <div>juliusomo</div>
                      <div className='week'>2 weeks ago</div>

                      <div className='reply'>
                        <img src="/images/icon-reply.svg" className='reply' alt='reply'></img>
                        <div className='text'>Reply</div>
                      </div>
                    </div>
                    <p className='text'>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.
                      You've nailed the design and the responsiveness at various breakpoints works really well.</p>
                  </div>


                </div>
              </div>

              {/* <div className='reply-box'>
                  <div className='reply-area'>
                    <img src={user} alt='user' className='reply-user'></img>
                    <input type='text' className='reply-text' placeholder='Add a reply'></input>
                    <button className='reply-button'>Reply</button>
                  </div>
                </div> */}
            </div>

          </div>
          {/* <div className='reply-input'>
            <div className='reply-area'>
              <img src="/images/avatars/image-amyrobson.webp" alt='user' className='reply-user'></img>
              <input type='text' className='reply-text' placeholder='Add a reply'></input>
              <button className='reply-button'>Reply</button>
            </div>
          </div> */}
          <AddReply replyArea_placeholder={'Add Reply...'} currentUser={currentUser} replyButton={'Reply'}/>


        </div>

        
        {/* <div className='comment-section'>
          <div className='comment-input'>
            <div className='comment-input-area'>
              <img src={user} alt='user' className='reply-user'></img>
              <input type='text' className='reply-text' placeholder='Add a comment'></input>
              <button className='reply-button'>send</button>
            </div>
          </div>
        </div> */}
        <AddComment 
          inputArea_placeholder={"Add Comment..."}
          sendButton={"Send"}
          currentUser={currentUser}
        />
      </main>
    </div>
  );
}

export default App;
