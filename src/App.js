import React, { useReducer, useState } from 'react';
import './styles.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    /* simulate waiting for an API response with setTimeout */
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  };

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }
  
  return (
    <div className="wrapper">
      <h1>Record not.</h1>
      {submitting && 
        <div>Submitting form.... 
          <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>: {value.toString()}</li>
           ))}
         </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Artist</p>
            <input name="artist" onChange={handleChange} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Album Title</p>
            <input name="title" onChange={handleChange} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Label</p>
            <input name="label" onChange={handleChange} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Year</p>
            <input name="year" onChange={handleChange} />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
