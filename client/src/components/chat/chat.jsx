import "./chat.scss";

const Chat = () => {
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>lorem lorem lorem ipsum...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>lorem lorem lorem ipsum...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>lorem lorem lorem ipsum...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>lorem lorem lorem ipsum...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>lorem lorem lorem ipsum...</p>
        </div>
      </div>
      <div className="chatBox">
        <div className="top">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            John Doe
          </div>
          <span className="close">X</span>
        </div>
        <div className="center">
          <div className="chatMessage">
            <p>lorem llre lkremem lremw</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>lorem llre lkremem lremw</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage">
            <p>lorem llre lkremem lremw</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>lorem llre lkremem lremw</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage">
            <p>lorem llre lkremem lremw</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>lorem llre lkremem lremw</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage">
            <p>lorem llre lkremem lremw</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>lorem llre lkremem lremw</p>
            <span>1 hour ago</span>
          </div>
        </div>
        <div className="bottom">
          <textarea name="" id=""></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
