import { type } from "os";
import React, { useState } from "react";

type msgProps = {
  username: string;
  text: string;
};

export default function ChatBox() {
  const [messages, setMessages] = useState<msgProps[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [textMessage, setTextMessage] = useState<string>("");

  const setNewMessage = (msg: msgProps) => {
    setMessages([...messages, msg]);
  };

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = {
      username: userName,
      text: textMessage,
    };
    setNewMessage(msg);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title">My first chat</div>
              <hr />
              <div className="messages">
                {messages.map((msg) => {
                  return (
                    <div>
                      {msg.username}: {msg.text}
                    </div>
                  );
                })}
              </div>
            </div>
            <form onSubmit={(e) => sendMessage(e)}>
              <div className="card-footer">
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="form-control"
                  value={userName}
                  onChange={() => setUserName}
                />
                <br />
                <input
                  id="text"
                  type="text"
                  placeholder="Your message"
                  className="form-control"
                  value={textMessage}
                  onChange={() => setTextMessage}
                />
                <br />
                <button type="submit" className="btn btn-primary form-control">
                  send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
