import React from 'react'

function UserGreeting({isLoggedIn = false, username = "Guest"}) {
    const welcomeMessage = <h2 className="welcome-msg">Welcome {username}</h2>
    const promptMessage = <h2 className="login-prompt">Please Log In to Continue</h2>
    return(isLoggedIn ? welcomeMessage : promptMessage);
}

export default UserGreeting