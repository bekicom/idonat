import { useState } from 'react';
import './style.css';

function Goal() {
  const [name, setName] = useState('');
  const [total, setTotal] = useState('');
  const [current, setCurrent] = useState('');
  const [showAmount, setShowAmount] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name,
      total: parseInt(total, 10),
      current: parseInt(current, 10),
      show_amount: showAmount,
    };

    try {
      const token = localStorage.getItem("token");
      const response = await fetch('https://api2.idonate.uz/api/v1/widget/goal/cretate', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error creating goal:', error);
      setErrorMessage('Failed to create goal. Please try again.');
    }
  };

  return (
    <div>
      <p className="title">Yangi</p>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">nomi</label>
        <input
          type="text"
          placeholder="Nomi"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="label">Ko'zlangan summa</label>
        <input
          type="number"
          min={1}
          placeholder="Ko'zlangan summa"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
        <label className="label">yig'ilgan summa</label>
        <input
          type="number"
          min={1}
          placeholder="Yig'ilgan summa"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
        <label className="custom_checkbox">
          <input
            className="checkbox"
            type="checkbox"
            checked={showAmount}
            onChange={(e) => setShowAmount(e.target.checked)}
          />
          <span className="checkmark">Summani ko'rsatish</span>
        </label>
        <button className="btn btn_success" type="submit">
          Saqlash
        </button>
        {errorMessage && <span className="error">{errorMessage}</span>}
      </form>
    </div>
  );
}

export default Goal;
