import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [user, setUser] = useState();

  const history = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) history("/");
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
