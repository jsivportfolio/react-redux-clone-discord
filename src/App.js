import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Counter } from './features/counter/Counter';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './App.css';
import { selectUser, userLogin, userLogout }from './features/userSlice';
// import AccessDenied from './AccessDenied';
import Login from './Login';
import { auth } from "./firebase";
 
function App() {

  // Hook - used for actions assoicated with the Redux Store Data Layer
  const dispatch = useDispatch();

  // pull the user in from the Redux Reducer Data Layer
  const user = useSelector(selectUser);

  // Hook - userEffect() 
    // runs once when the component loads with this syntax, needed or else infinite loop will occur
  useEffect(() => {
    // listener for user login event on state change
    auth.onAuthStateChanged((authUser) => {
      console.log('user = ' + authUser);
      if (authUser) {
        // user is logged in
        dispatch(userLogin({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        // use us logged out
        dispatch(userLogout());
      }
    })
  }, [dispatch])

  return (
    // BEM naming convention
    <div className="app">
      {user ? (
        <>
        <Sidebar></Sidebar>
        <Chat></Chat>
        </>
      ) : (
        <Login></Login>
      )}
    </div>
  );
}

export default App;
