// import logo from './logo.svg';
import plus from './assets/images/icon-plus.svg'
import remove from './assets/images/icon-minus.svg'
import user from './assets/images/avatars/image-amyrobson.webp'
import reply from './assets/images/icon-reply.svg'
import './index.css';
// const date = () => {
//     return 'No'
// }
const App = () => {
  return (
    <div className="App">
      <main >

        <div className="comment-section">
            <div className='comment-box'>
              <div className='comment-area'>
                <div className='vote-section'>
                  <img src={plus} alt='plus'></img>
                  <p>20</p>
                  <img src={remove} alt='plus'></img>
                </div>
                <div className='comment-text'>
                  <div className='user-section'>
                    <img src={user} alt='user'></img>
                    <div>juliusomo</div>
                    <div className='week'>2 weeks ago</div>
                    <div className='reply'>
                      <img src={reply} className='reply' alt='reply'></img>
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
                <img src={user} alt='user' className='reply-user'></img>
                <input type='text' className='reply-text' placeholder='Add a reply'></input>
                <button className='reply-button'>Reply</button>
              </div>
            </div>
            <div className='line'></div>
            <div className='reply-input'>
              <div className='reply-input-area'>
                <div className='vote-section'>
                  <img src={plus} alt='plus'></img>
                  <p>20</p>
                  <img src={remove} alt='plus'></img>
                </div>
                <div className='comment-text'>
                  <div className='user-section'>
                    <img src={user} alt='user'></img>
                    <div>juliusomo</div>
                    <div className='week'>2 weeks ago</div>
                    <div className='reply'>
                      <img src={reply} className='reply' alt='reply'></img>
                      <div className='text'>Reply</div>
                    </div>
                  </div>
                  <p className='text'>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.
                    You've nailed the design and the responsiveness at various breakpoints works really well.</p>
                </div>


              </div>
            </div>
            
        </div>
        <div className="comment-section">
            <div className='comment-box'>
              <div className='comment-area'>
                <div className='vote-section'>
                  <img src={plus} alt='plus'></img>
                  <p>20</p>
                  <img src={remove} alt='plus'></img>
                </div>
                <div className='comment-text'>
                  <div className='user-section'>
                    <img src={user} alt='user'></img>
                    <div>juliusomo</div>
                    <div className='week'>2 weeks ago</div>
                    <div className='reply'>
                      <img src={reply} className='reply' alt='reply'></img>
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
                <img src={user} alt='user' className='reply-user'></img>
                <input type='text' className='reply-text' placeholder='Add a reply'></input>
                <button className='reply-button'>Reply</button>
              </div>
            </div>
            <div className='line'></div>
            <div className='reply-input'>
              <div className='reply-input-area'>
                <div className='vote-section'>
                  <img src={plus} alt='plus'></img>
                  <p>20</p>
                  <img src={remove} alt='plus'></img>
                </div>
                <div className='comment-text'>
                  <div className='user-section'>
                    <img src={user} alt='user'></img>
                    <div>juliusomo</div>
                    <div className='week'>2 weeks ago</div>
                    <div className='reply'>
                      <img src={reply} className='reply' alt='reply'></img>
                      <div className='text'>Reply</div>
                    </div>
                  </div>
                  <p className='text'>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.
                    You've nailed the design and the responsiveness at various breakpoints works really well.</p>
                </div>


              </div>

            </div>
        </div>
        
        {/* <div className='update-input'>
            <div className='vote-section'>
                  <img src={plus} alt='plus'></img>
                  <p>20</p>
                  <img src={remove} alt='plus'></img>
            </div>
            <div className='comment-text'>
                  <div className='user-section'>
                      <img src={user} alt='user'></img>
                      <div>juliusomo</div>
                      <div className='week'>2 weeks ago</div>
                      <div className='reply'>
                          <img src={reply} className='reply' alt='reply'></img>
                          <div className='text'>Reply</div>
                      </div>
                  </div>
                  <p className='text'>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. 
                      You've nailed the design and the responsiveness at various breakpoints works really well.</p>
            </div>
          </div> */}

        <div className='comment-section'>
        <div className='comment-input'>
          <div className='comment-input-area'>
            <img src={user} alt='user' className='reply-user'></img>
            <input type='text' className='reply-text' placeholder='Add a comment'></input>
            <button className='reply-button'>send</button>
          </div>
        </div></div>
      </main>
    </div>
  );
}

export default App;
