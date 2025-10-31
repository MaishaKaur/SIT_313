import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./QuestionFilter.css";

function FindQuestion() {
  const [filterDate, set_NEW_FilterDate] = useState("");
  const [questions, setQuestions] = useState([]);
  const [TitleFilter, setTitle] = useState("");
  const [Filter_Tags, setFilter_Tags] = useState("");
  const [Expand_Index, setExpandedIndex] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  // Use the same collection name used when posting
  const userQuestionsRef = collection(db, "questions");

  useEffect(() => {
    // real-time listener so new posts appear immediately
    const q = query(userQuestionsRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const questionData = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setQuestions(questionData);
      setFilteredQuestions(questionData);
    });

    return () => unsubscribe();
  }, []);

  const handleFilter = () => {
    const titleTerm = TitleFilter.trim().toLowerCase();
    const tagTerm = Filter_Tags.trim().toLowerCase();
    const dateTerm = filterDate; // format: yyyy-mm-dd or empty

    const filtered = questions.filter((q) => {
      const titleMatch = !titleTerm || (q.title || "").toLowerCase().includes(titleTerm);
      const tagMatch = !tagTerm || (q.tag || "").toLowerCase().includes(tagTerm);

      let dateMatch = true;
      if (dateTerm) {
        // createdAt may be a Firestore Timestamp or a Date stored as JS date
        const created = q.createdAt ? (q.createdAt.toDate ? q.createdAt.toDate() : new Date(q.createdAt)) : null;
        if (!created) return false;
        dateMatch = created.toISOString().slice(0, 10) === dateTerm;
      }

      return titleMatch && tagMatch && dateMatch;
    });

    setFilteredQuestions(filtered);
  };

  const Handle_Deleted_Question = async (id) => {
    try {
      await deleteDoc(doc(db, "questions", id));
      // onSnapshot will update lists automatically; update filtered immediately for snappy UI
      setFilteredQuestions((prev) => prev.filter((question) => question.id !== id));
      setQuestions((prev) => prev.filter((question) => question.id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete question.");
    }
  };

  const handleExpand = (index) => {
    setExpandedIndex(index === Expand_Index ? null : index);
  };

  const formatCreatedAt = (q) => {
    const created = q.createdAt ? (q.createdAt.toDate ? q.createdAt.toDate() : new Date(q.createdAt)) : null;
    return created ? created.toLocaleString() : (q.date || "—");
  };

  return (
    <div className="find-question-container">
      <h1 className="page-title">Filter Questions</h1>

      <div className="filter-section">
        <div className="filter-group">
          <label>Title:</label>
          <input
            type="text"
            placeholder="Filter by title"
            value={TitleFilter}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label>Tag:</label>
          <input
            type="text"
            placeholder="Filter by tags"
            value={Filter_Tags}
            onChange={(e) => setFilter_Tags(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label>Date:</label>
          <input
            type="date"
            value={filterDate}
            onChange={(e) => set_NEW_FilterDate(e.target.value)}
          />
        </div>

        <button onClick={handleFilter} className="filter-btn">
          Filter
        </button>
      </div>

      <h1 className="section-title">Questions</h1>

      {filteredQuestions.map((question, index) => (
        <div className="question-card" key={question.id}>
          <h2 className="question-title">Question {index + 1}</h2>
          <h3>Title: {question.title}</h3>

          <div className="button-row">
            <button
              onClick={() => Handle_Deleted_Question(question.id)}
              className="delete-btn"
            >
              Delete
            </button>
            <button onClick={() => handleExpand(index)} className="expand-btn">
              {Expand_Index === index ? "Collapse" : "Expand"}
            </button>
          </div>

          {Expand_Index === index && (
            <div className="question-details">
              <h4>More Details:</h4>
              <p>
                <strong>Description:</strong> {question.desc}
              </p>
              <p>
                <strong>Tag:</strong> {question.tag}
              </p>
              <p>
                <strong>Date:</strong> {formatCreatedAt(question)}
              </p>
              {question.url && (
                <p>
                  <strong>URL:</strong>{" "}
                  <a href={question.url} target="_blank" rel="noreferrer">
                    {question.url}
                  </a>
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FindQuestion;