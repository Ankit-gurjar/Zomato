import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  const history = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) history.push("/");
  }, [history]);

  return (
    <ImageContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const ImageState = () => {
  return useContext(ImageContext);
};

export default ImageProvider;
