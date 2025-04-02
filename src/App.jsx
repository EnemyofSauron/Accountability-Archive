// App.jsx
import React, { useEffect, useState } from 'react';
import EntryCard from './components/EntryCard';
import FilterPanel from './components/FilterPanel';
import { loadEntries } from './data/loadEntries';
import './styles/main.css';

export default function App() {
  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    async function fetchEntries() {
      const data = await loadEntries();
      setEntries(data);
      setFilteredEntries(data);
    }
    fetchEntries();
  }, []);

  const handleFilterChange = (tags) => {
    setSelectedTags(tags);
    if (tags.length === 0) {
      setFilteredEntries(entries);
    } else {
      const filtered = entries.filter(entry =>
        tags.every(tag => entry.tags.includes(tag))
      );
      setFilteredEntries(filtered);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Accountability Archive</h1>
        <p>A civic timeline of corruption, influence, and public memory.</p>
      </header>
      <FilterPanel tags={extractTags(entries)} selectedTags={selectedTags} onChange={handleFilterChange} />
      <div className="grid">
        {filteredEntries.slice(0, 9).map((entry, idx) => (
          <EntryCard key={idx} entry={entry} />
        ))}
      </div>
      <div className="view-all-button">
        <a href="#">View Full Timeline →</a>
      </div>
    </div>
  );
}

function extractTags(entries) {
  const tagSet = new Set();
  entries.forEach(entry => {
    entry.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}
