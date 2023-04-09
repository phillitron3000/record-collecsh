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
        <fieldset>
          <label>
            <p>Artist</p>
            <input name="artist" onChange={handleChange} value={formData.artist || ''}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Album Title</p>
            <input name="album" onChange={handleChange} value={formData.album || ''} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Label</p>
            <input name="label" onChange={handleChange} value={formData.label || ''}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Year</p>
            <input 
              type= "number"
              name="year" 
              onChange={handleChange} 
              value={val}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Media Condition</p>
            <select name="media_condition" onChange={handleChange} value={formData.media_condition || ''}>
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
        <fieldset>
          <label>
            <p>Sleeve Condition</p>
            <select name="sleeve_condition" onChange={handleChange} value={formData.sleeve_condition || ''}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
