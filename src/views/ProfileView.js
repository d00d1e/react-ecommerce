import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProfileView() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsUser(userInfo._id));
  }, [dispatch, userInfo._id]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Change Name" value={user.name} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email"  placeholder="Change Email" value={user.email} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password"  placeholder="Change Password" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword"  placeholder="Confirm Password" />
            </div>
            <div>
              <label />
              <button className="primary" type="submit">Update</button>
            </div>
          </>
        )}
      </form>
    </div>
  )
}
