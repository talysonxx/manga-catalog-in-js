import React, { useState, useEffect } from "react";
import {
  db,
  auth,
  doc,
  setDoc,
  getDoc,
  collection,
  deleteDoc,
} from "../firebase";

const MangaItem = ({ manga }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!auth.currentUser) {
      alert("Você precisa estar logado para favoritar.");
      return;
    }

    const userUid = auth.currentUser.uid;
    const docId = manga.title;
    const docRef = doc(db, `users/${userUid}/favorites`, docId);

    try {
      if (!isFavorited) {
        await setDoc(docRef, {
          timestamp: Date.now(),
          mangaName: manga.title,
          user: auth.currentUser.displayName,
          favorite: true,
        });
        console.log(`${manga.title} foi adicionado aos favoritos.`);
      } else {
        await deleteDoc(docRef);
        console.log(`${manga.title} foi removido dos favoritos.`);
      }

      setIsFavorited(!isFavorited);
    } catch (error) {
      console.error("Erro ao adicionar/remover favoritos: ", error);
    }
  };

  useEffect(() => {
    const checkIfFavorited = async () => {
      if (!auth.currentUser) return;

      const userUid = auth.currentUser.uid;
      const docId = manga.title;
      const docRef = doc(db, `users/${userUid}/favorites`, docId);

      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setIsFavorited(true);
      } else {
        setIsFavorited(false);
      }
    };

    checkIfFavorited();
  }, [manga.title]);

  return (
    <div className="manga-box">
      <a href={manga.url} target="about_blank">
        <div className="features">
          <img
            src={manga.images.jpg.large_image_url}
            alt={manga.title}
            className="cover"
          />
          <div className="tips">
            <span className="tooltip tip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#b9ccb4"
              >
                <path d="M733.22-235.56v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v86.34q0 10.88 3.84 20.4 3.85 9.52 11.55 17.21l57.61 57.05q6 6 14 6t14-6q6-6 6-14t-6-14l-61-61Zm-20 208q-83 0-141.5-58.5t-58.5-141.5q0-83 58.5-141.5t141.5-58.5q83 0 141.5 58.5t58.5 141.5q0 83-58.5 141.5t-141.5 58.5ZM326.78-591.52h306.44q17 0 28.5-11.5t11.5-28.5q0-17-11.5-28.5t-28.5-11.5H326.78q-17 0-28.5 11.5t-11.5 28.5q0 17 11.5 28.5t28.5 11.5Zm-120 492.43q-43.72 0-74.86-31.13-31.14-31.14-31.14-74.87v-546.43q0-43.73 31.14-74.86 31.14-31.14 74.86-31.14h546.44q43.72 0 74.86 31.14 31.14 31.13 31.14 74.86v216.3q0 24.22-20.37 36.76-20.37 12.55-43.59 3.72-19.11-6.13-39.9-9.19-20.79-3.07-42.14-3.07-11 0-20.5.41-9.5.4-19.5 2.03-7.31-6.53-18.31-10.14-11-3.6-21.69-3.6H326.78q-17 0-28.5 11.5t-11.5 28.5q0 17 11.5 28.5t28.5 11.5h203.87q-18 15.3-33.06 33.6-15.07 18.31-27.2 39.61H326.78q-17 0-28.5 11.5t-11.5 28.5q0 17 11.5 28.5t28.5 11.5h112.83q-3.7 13.96-5.05 28.26-1.34 14.31-1.34 29.83 0 17.17 1.62 33.25 1.62 16.09 5.68 31.27 5.57 23.78-7.54 43.59-13.11 19.8-36.33 19.8H206.78Z" />
              </svg>
              <span className="tooltiptext">{manga.status}</span>
            </span>
            <span className="tooltip tip" onClick={handleFavoriteClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill={isFavorited ? "#ffc107" : "#b9ccb4"}
              >
                <path d="M480-259.33 305.67-154q-12.34 7.67-25 7-12.67-.67-22-8.33-9.34-7-14.34-18.17-5-11.17-1.66-25.5l46-199.33L134.33-533q-10.66-8.33-13.33-20.5t1-23.5q3.67-11.33 13.33-19.33 9.67-8 23.34-9.34L362.33-623 441-811.33q5.67-13 16.5-19.17 10.83-6.17 22.5-6.17t22.5 6.17q10.83 6.17 16.5 19.17L598.33-623l203 17.33q13.67 1.34 23.34 9.34 9.66 8 13.33 19.33 3.67 11.33 1 23.5T825.67-533L671.33-398.33l46 199.33q3.34 14.33-1.66 25.5t-14.34 18.17q-9.33 7.66-22 8.33-12.66.67-24.33-7L480-259.33Z" />
              </svg>
              <span className="tooltiptext">favorito</span>
            </span>
          </div>
        </div>
        <p
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {manga.title}
        </p>
      </a>
    </div>
  );
};

export default MangaItem;
