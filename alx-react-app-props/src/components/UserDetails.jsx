import React, { useContext } from "react";
import UserContext from "../UserContext";

function UserDetails() {
  const userData = useContext(UserContext);

  if (!userData) return <p>No user data available.</p>;

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;
