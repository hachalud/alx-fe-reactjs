// App.jsx
import React from "react";
import UserContext from "./UserContext";
import ProfilePage from "./ProfilePage";

function App() {
  const userData = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
