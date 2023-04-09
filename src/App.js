import './styles.css';

function App() {
  return (
    <div className="wrapper">
      <h1>Record not.</h1>
      <form>
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
