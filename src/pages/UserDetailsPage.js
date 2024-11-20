import React from "react";
import { useParams } from "react-router-dom";
import UserDetails from "../components/User/UserDetails";

const UserDetailsPage = () => {
  const { id } = useParams();
  return <UserDetails userId={id} />;
};

export default UserDetailsPage;
