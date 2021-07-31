import React, { useEffect, useState, createRef } from "react";
import { connect } from "react-redux";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

import { fetchUsers } from "../redux/userActions";
import { sortWithId } from "../utils";
import UserList from "./UserList";

const UserContainer = ({ userData, fetchUsers }) => {
  const { error, loading, users } = userData;
  const [scrollTopValue, setScrollTopValue] = useState(0);
  const userListRef = createRef(null);

  const handleScroll = (e) => {
    const { scrollTop } = e.currentTarget;
    setScrollTopValue(scrollTop);

    // do not fetch for the first scroll (auto-scroll)
    if (scrollTopValue !== 0 && scrollTop === 0) {
      fetchUsers(userData?.users?.meta?.pagination?.links?.next);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (error) return <div>Error...{userData.error}</div>;
  // console.log({ userData });

  const scrollUserListDiv = () => {
    userListRef.current.scrollTo({
      top: 150 * userData?.currentPage,
      behavior: "smooth",
    });
  };
  return (
    <main>
      <div className="main_bg"></div>
      <div className="userList" onScroll={handleScroll} ref={userListRef}>
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
            <UserList
              users={sortWithId(users?.data)?.reverse()}
              scrollUserListDiv={scrollUserListDiv}
            />
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
    fetchUsers: (url) => dispatch(fetchUsers(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
