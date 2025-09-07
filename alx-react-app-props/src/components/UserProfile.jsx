import React from "react";
import UserContext  from "../UserContext";
import UserInfo from "./UserInfo";

function UserProfile() {
  const userData = useContext(UserContext);


  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <userInfo />
    </div>
  );
}

export default ProfilePage;
