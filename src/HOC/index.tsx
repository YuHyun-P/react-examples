import { useState } from "react";
import ProfileImage from "./ProfileImage";
import UserProfile from "./UserProfile";

type TUser = {
  name: string;
  email: string;
  imageSrc: string;
};

const initialState = {
  name: "",
  email: "",
  imageSrc: "",
};

const HOC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<TUser>(initialState);

  const handleLogin = () => {
    setUser({
      name: "유현",
      email: "유현@지메일",
      imageSrc: "https://avatars.githubusercontent.com/u/96400112?v=4",
    });
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    setUser(initialState);
    setIsAuthenticated(false);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={handleLogin}>로그인</button>
      ) : (
        <button onClick={handleLogout}>로그아웃</button>
      )}

      <div className="mt-4">
        <ProfileImage isAuthenticated={isAuthenticated} user={user} />
        <UserProfile isAuthenticated={isAuthenticated} user={user} />
      </div>
    </div>
  );
};

export default HOC;
