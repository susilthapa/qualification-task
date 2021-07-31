import React from "react";

const MessageBox = ({ user, ...rest }) => {
  return (
    <div className="message_box" {...rest}>
      <p>{user.name}</p>
      <small className="user_id">id:{user.id}</small>
    </div>
  );
};

export default MessageBox;
