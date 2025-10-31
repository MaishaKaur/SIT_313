import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import "./ARTICLES.css";

function ARTICLES() {
  const [imageUrl, setImageUrl] = useState("");
  const [newTitle, setnewTitle] = useState("");
  const [newAbstract, setNewAbs] = useState("");
  const [Art_text, setArt_Text] = useState("");
  const [setTags, setNewTags] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Article");

  const createUser = async () => {
    try {
      await addDoc(usersCollectionRef, {
        Title: newTitle,
        Abstract: newAbstract,
        ArticleText: Art_text,
        Tags: setTags,
        ImageUrl: imageUrl,
        createdAt: new Date(),
      });
      alert("Article created successfully");
      setnewTitle("");
      setNewAbs("");
      setArt_Text("");
      setNewTags("");
      setImageUrl("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error creating article");
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <>
      <h2 className="art-header">WHAT DO YOU WANT TO ASK AND SHARE</h2>
      <div className="art-container">
        <label className="art-label">Title:</label>
        <input
          className="art-input"
          placeholder="Enter a descriptive title"
          value={newTitle}
          onChange={(e) => setnewTitle(e.target.value)}
        />

        <label className="art-label">Image URL:</label>
        <div className="art-row">
          <input
            className="art-input"
            placeholder="Enter the URL of your image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        {imageUrl && (
          <img
            src={imageUrl}
            alt="preview"
            className="art-img-preview"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        )}

        <label className="art-label">Abstract:</label>
        <textarea
          className="art-textarea"
          placeholder="Enter a 1-paragraph abstract"
          value={newAbstract}
          onChange={(e) => setNewAbs(e.target.value)}
        />

        <label className="art-label">Article Text:</label>
        <textarea
          className="art-textarea art-large-textarea"
          placeholder="Enter article text"
          value={Art_text}
          onChange={(e) => setArt_Text(e.target.value)}
        />

        <label className="art-label">Tags:</label>
        <input
          className="art-input"
          placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
          value={setTags}
          onChange={(e) => setNewTags(e.target.value)}
        />

        <div className="art-footer">
          <button onClick={createUser} className="art-post-btn">
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default ARTICLES;
