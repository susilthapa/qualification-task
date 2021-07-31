import React, { useEffect, useRef } from "react";

const UserList = ({ users }) => {
  const messageRef = useRef(null);

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {users?.map((user) => {
        if (user.id % 2 === 0) {
          return (
            <div key={user.id} className="message_box_wrapper">
              <div key={user.id} className="message_box message_box_left">
                <p>{user.name}</p>
              </div>
            </div>
          );
        }
        return (
          <div
            key={user.id}
            className="message_box_wrapper message_box_wrapper_right"
          >
            <div key={user.id} className="message_box message_box_right">
              <p>{user.name}</p>
            </div>
          </div>
        );
      })}
      <div ref={messageRef} />
    </>
  );
};

export default UserList;
