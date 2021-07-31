import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

import { fetchUsers } from "../redux/userActions";
import { sortWithId } from "../utils";
import UserList from "./UserList";

const UserContainer = ({ userData, fetchUsers }) => {
  const { error, loading, users } = userData;
  const messageRef = useRef(null);

  const executeScroll = () => messageRef.current?.scrollIntoView();
  useEffect(() => {
    fetchUsers();
  }, []);

  if (error) return <div>Error...{userData.error}</div>;

  return (
    <main>
      <div className="main_bg"></div>
      <div className="userList">
        <div className="messages">
          {loading ? (
            <div className="spinner">
              <FadeLoader
                color={"#fff"}
                loading={loading}
                css={css`
                  top: 0;
                  left: 0;
                `}
              />
            </div>
          ) : error ? (
            <div className="spinner error-message">
              <span>Error Occured!</span>
            </div>
          ) : (
            <UserList users={sortWithId(users?.data)?.reverse()} />
          )}
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
