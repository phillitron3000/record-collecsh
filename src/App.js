import React, { useState } from 'react';
import './styles.css';

function App() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    /* simulate waiting for an API response with setTimeout */
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  };
  
  return (
    <div className="wrapper">
      <h1>Record not.</h1>
      {submitting && 
        <div>Submitting form.... </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Artist</p>
            <input name="artist" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
