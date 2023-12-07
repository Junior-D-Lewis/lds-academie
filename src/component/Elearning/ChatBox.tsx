import { type } from "os";
import React, { useState } from "react";

type msgProps = {
  username: string;
  text: string;
};

export default function ChatBox() {
  const [messages, setMessages] = useState<msgProps[]>([]);

  const setNewMessage = (msg: msgProps) => {
    setMessages([...messages, msg]);
  };

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = {
      username: formData.username,
      text: formData.text,
    };
    setNewMessage(msg);
  };

  const [formData, setFormData] = React.useState<msgProps>({
    username: "",
    text: "",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const msg = {
      username: formData.username,
      text: formData.text,
    };
    sendMessage(event);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Chat box</div>
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

            <form onSubmit={handleSubmit}>
              <div className="card-footer">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <br />
                <input
                  type="text"
                  name="text"
                  placeholder="Username"
                  className="form-control"
                  value={formData.text}
                  onChange={handleInputChange}
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
