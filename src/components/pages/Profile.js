import React from 'react';
import { useSelector } from 'react-redux';



const Profile = () => {
  const user = useSelector((state) => state.authReducer.user);
  if (!user) {
    return (
      <div >
        <h1>profile loading</h1>
        
      </div>
    );
  }

  return (
    <div>
      <h1>welcome to your profile</h1>
      <h1 >
        {user.name} {user.lastName}
      </h1>
      <h5 >{user.email} </h5>
    </div>
  );
};

export default Profile;
