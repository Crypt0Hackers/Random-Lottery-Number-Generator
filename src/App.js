import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const newNumbers = new Set(); // Use set to avoid duplicate numbers

    while (newNumbers.size < 6) {
      newNumbers.add(Math.floor(Math.random() * 49) + 1);
    }

    const sortedNumbers = Array.from(newNumbers).sort((a, b) => a - b); // Sort numbers in ascending order
    setNumbers(sortedNumbers);
  };

  const getBackgroundColor = (number) => {
    if (number >= 1 && number <= 9) {
      return 'grey';
    } else if (number >= 10 && number <= 19) {
      return 'blue';
    } else if (number >= 20 && number <= 29) {
      return 'pink';
    } else if (number >= 30 && number <= 39) {
      return 'green';
    } else if (number >= 40 && number <= 49) {
      return 'yellow';
    }
  };

  return (
    <div className="App">
      <h1>Lottery Number Generator</h1>
      <button onClick={generateNumbers}>Generate Numbers</button>
      <div className="numbers">
        {numbers.map((number, index) => (
          <span
            key={index}
            className="number-container"
            style={{ backgroundColor: getBackgroundColor(number) }}
          >
            {number}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
