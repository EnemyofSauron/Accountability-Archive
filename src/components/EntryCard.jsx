// EntryCard.jsx
import React from 'react';
import './EntryCard.css';

export default function EntryCard({ entry }) {
  return (
    <div className="entry-card">
      <h3>{entry.date}</h3>
      <h2>{entry.title}</h2>
      <p>{entry.summary}</p>
      <div className="tags">
        {entry.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="sources">
        {entry.sources.map((url, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">[Source]</a>
        ))}
      </div>
    </div>
  );
}
