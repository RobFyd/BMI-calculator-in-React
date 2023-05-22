

function App() {
  return (
    <div className="container">
        <div className="element">
            <p className="element__header">
                Calculate your BMI!
            </p>
            <form className="js-form">
                <fieldset>
                    <legend>Your data</legend>
                    <p>
                        <label>
                            Add height: <input className="form__field js-height" required type="number" min="1" step="any"
                                placeholder="Height" /> cm
                        </label>
                    </p>
                    <p>
                        <label>
                            Add weight: <input className="form__field js-weight" required type="number" min="1" step="any"
                                placeholder="Weight" /> kg
                        </label>
                    </p>

                </fieldset>
            </form>
            <div className="result__container">
                <p className="form__result">Your BMI is: <strong className="js-bmi">N/A</strong></p>
            </div>
        </div>
    </div>
  );
}

export default App;
