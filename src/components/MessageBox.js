import React from "react";

const MessageBox = ({ user, ...rest }) => {
  return (
    <div className="message_box" {...rest}>
      <p>{user.name}</p>
      <small className="user_id">
        <i>{user.email}</i>
      </small>
    </div>
  );
};

export default MessageBox;
