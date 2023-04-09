import React, { useReducer, useState } from 'react';
import './styles.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {
    artist: '...artist',
    album: '...album title',
    label: '...label',

  });
  const [submitting, setSubmitting] = useState(false);
  const [val, setVal] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    /* simulate waiting for an API response with setTimeout */
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  };

  const handleChange = event => {
    const regex = /^\d{0,4}$/;
    if (event.target.value === "" || regex.test(event.target.value)) {
      setVal(event.target.value);
    }
    
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
        <fieldset disabled={submitting}>
          <label>
            <p>Artist</p>
            <input name="artist" onChange={handleChange} value={formData.artist || ''}/>
          </label>
        
          <label>
            <p>Album Title</p>
            <input name="album" 
              disabled={formData.artist === '...artist'} 
              onChange={handleChange} 
              value={formData.album || ''}
            />
          </label>
        
          <label>
            <p>Label</p>
            <input 
              name="label" 
              disabled={formData.album === '...album title'}
              onChange={handleChange} 
              value={formData.label || ''}
            />
          </label>
        
          <label>
            <p>Year</p>
            <input 
              type= "number"
              name="year" 
              disabled={formData.label === '...label'}
              onChange={handleChange} 
              value={val}
            />
          </label>
        
          <label>
            <p>Media Condition</p>
            <select 
              name="media_condition" 
              disabled={!formData.year}
              onChange={handleChange} 
              value={formData.media_condition || ''}
            >
               <option value="">--Please choose an option--</option>
               <option value="poor">Poor</option>
               <option value="good">Good</option>
               <option value="very-good">Very Good</option>
               <option value="very-good-plus">Very Good+</option>
               <option value="near-mint">Near Mint</option>
               <option value="mint">Mint</option>
            </select>
          </label>
          <label>
            <p>Sleeve Condition</p>
            <select 
              name="sleeve_condition" 
              disabled={formData.media_condition === ''}
              onChange={handleChange} 
              value={formData.sleeve_condition || ''}
            >
               <option value="">--Please choose an option--</option>
               <option value="poor">Poor</option>
               <option value="good">Good</option>
               <option value="very-good">Very Good</option>
               <option value="very-good-plus">Very Good+</option>
               <option value="near-mint">Near Mint</option>
               <option value="mint">Mint</option>
            </select>
          </label>
        </fieldset>
        <button type="submit" disabled={submitting}>Submit</button>
      </form>
    </div>
  )
}

export default App;
