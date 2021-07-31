import React, { useEffect, useRef } from "react";

import MessageBox from "./MessageBox";

const UserList = ({ users }) => {
  const messageRef = useRef(null);

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const messageBoxRightStyle = {
    background: "rgb(1 35 172 / 37%)",
    color: "#fff",
  };

  return (
    <>
      {users?.map((user) => {
        if (user.id % 2 === 0) {
          return (
            <div key={user.id} className="message_box_wrapper">
              <MessageBox user={user} />
            </div>
          );
        }
        return (
          <div
            key={user.id}
            className="message_box_wrapper message_box_wrapper_right"
          >
            <MessageBox user={user} style={messageBoxRightStyle} />
          </div>
        );
      })}
      <div ref={messageRef} />
    </>
  );
};

export default UserList;
