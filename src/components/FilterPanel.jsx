// FilterPanel.jsx
import React from 'react';
import './FilterPanel.css';

export default function FilterPanel({ tags, selectedTags, onChange }) {
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      onChange(selectedTags.filter(t => t !== tag));
    } else {
      onChange([...selectedTags, tag]);
    }
  };

  return (
    <div className="filter-panel">
      <h4>Filter by Tag:</h4>
      <div className="tags">
        {tags.map((tag, index) => (
          <button
            key={index}
            className={selectedTags.includes(tag) ? 'active' : ''}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
