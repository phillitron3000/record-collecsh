import './styles.css';

function App() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }
  
  return (
    <div className="wrapper">
      <h1>Record not.</h1>
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
