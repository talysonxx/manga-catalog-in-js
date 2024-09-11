import React, { useEffect, useState, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import {
  auth,
  provider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "../firebase";
import CircularProgress from "@mui/material/CircularProgress"; 



import { theme2 } from "../theme";
const theme = createTheme(theme2);

export default function IconButtons() {
  const [avatar, setAvatar] = useState(<CircularProgress size={40} color="primary" />);
  

  const [loading, setLoading] = useState(false);

  const useThrottle = (callback, delay) => {
    const lastExecuted = useRef(0);

    return () => {
      const now = Date.now();
      if (now - lastExecuted.current >= delay) {
        lastExecuted.current = now;
        callback();
      }
    };
  };
  
  const handleLogin = async () => {
    if (!auth.currentUser) {
      setLoading(true);
      try {
        const result = await signInWithPopup(auth, provider);

        console.log("Usuário logado:", result.user);
        
        setAvatar(
          <img
            src={result.user.photoURL}
            alt="avatar"
            style={{ width: 40, borderRadius: "50%" }}
          />
        );
      } catch (error) {
        setLoading(false);
        setAvatar(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
          >
            <path d="M523.59-111.87q-19.16 0-32.33-13.17-13.17-13.18-13.17-32.33t13.17-32.33q13.17-13.17 32.33-13.17h233.54v-554.26H523.59q-19.16 0-32.33-13.17-13.17-13.18-13.17-32.33t13.17-32.33q13.17-13.17 32.33-13.17h233.54q37.78 0 64.39 26.61t26.61 64.39v554.26q0 37.78-26.61 64.39t-64.39 26.61H523.59ZM428.35-434.5H157.37q-19.15 0-32.33-13.17-13.17-13.18-13.17-32.33t13.17-32.33q13.18-13.17 32.33-13.17h270.98l-69.5-69.5q-12.68-12.67-12.68-31.07 0-18.39 12.68-31.82 12.67-13.68 31.7-14.06 19.04-.38 32.71 13.3l146.83 146.82q13.43 13.68 13.43 31.83t-13.43 31.83L423.26-301.35q-13.43 13.68-32.21 13.3-18.77-.38-32.2-14.06-12.68-13.43-12.3-32.21.38-18.77 13.06-31.44l68.74-68.74Z" />
          </svg>
        );

        console.error("Erro ao fazer login:", error);
      } finally {
        setLoading(false);
      }
    } else {
      signOut(auth);
      window.location.reload();
    }
  };

  useEffect(() => {onAuthStateChanged(auth, (user) => {
    if (user) {
      setAvatar(
        <img
          src={user.photoURL}
          alt="avatar"
          style={{ width: 40, borderRadius: "50%" }}
        />
      );
    } else {
      setAvatar(<svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
      >
        <path d="M523.59-111.87q-19.16 0-32.33-13.17-13.17-13.18-13.17-32.33t13.17-32.33q13.17-13.17 32.33-13.17h233.54v-554.26H523.59q-19.16 0-32.33-13.17-13.17-13.18-13.17-32.33t13.17-32.33q13.17-13.17 32.33-13.17h233.54q37.78 0 64.39 26.61t26.61 64.39v554.26q0 37.78-26.61 64.39t-64.39 26.61H523.59ZM428.35-434.5H157.37q-19.15 0-32.33-13.17-13.17-13.18-13.17-32.33t13.17-32.33q13.18-13.17 32.33-13.17h270.98l-69.5-69.5q-12.68-12.67-12.68-31.07 0-18.39 12.68-31.82 12.67-13.68 31.7-14.06 19.04-.38 32.71 13.3l146.83 146.82q13.43 13.68 13.43 31.83t-13.43 31.83L423.26-301.35q-13.43 13.68-32.21 13.3-18.77-.38-32.2-14.06-12.68-13.43-12.3-32.21.38-18.77 13.06-31.44l68.74-68.74Z" />
      </svg>
    );
    }
  });
}, []);

  return (
    <ThemeProvider theme={theme}>
      <IconButton
        aria-label="home"
        size="large"
        color="primary"
        id="home"
        onClick={useThrottle(() => {

            const hombtn = document.getElementById("home");
            hombtn.style.pointerEvents = "none";
            setTimeout(() => {
              hombtn.style.pointerEvents = "all";
            }, 2000);
          }, 2000)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
        >
          <path d="M226.67-186.67h140V-400q0-14.17 9.58-23.75t23.75-9.58h160q14.17 0 23.75 9.58t9.58 23.75v213.33h140v-380L480-756.67l-253.33 190v380Zm-66.67 0v-380q0-15.83 7.08-30 7.09-14.16 19.59-23.33L440-810q17.45-13.33 39.89-13.33T520-810l253.33 190q12.5 9.17 19.59 23.33 7.08 14.17 7.08 30v380q0 27.5-19.58 47.09Q760.83-120 733.33-120H560q-14.17 0-23.75-9.58-9.58-9.59-9.58-23.75v-213.34h-93.34v213.34q0 14.16-9.58 23.75Q414.17-120 400-120H226.67q-27.5 0-47.09-19.58Q160-159.17 160-186.67ZM480-472Z" />
        </svg>
      </IconButton>

      <IconButton
        aria-label="login"
        size="large"
        color="primary"
        id="login"
        onClick={!loading ? handleLogin : null}
      >
        {loading ? (
          <CircularProgress size={40} color="primary" />
        ) : (
          <div className="avatar" style={{ display: "inherit" }}>
            {avatar}
          </div>
        )}
      </IconButton>
    </ThemeProvider>
  );
}
