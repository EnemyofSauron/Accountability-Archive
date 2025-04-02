// loadEntries.js

export async function loadEntries() {
    const context = require.context('../../entries', false, /\.json$/);
    const entries = context.keys().map((key) => {
      const entry = context(key);
      return entry.default || entry;
    });
  
    return entries.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  