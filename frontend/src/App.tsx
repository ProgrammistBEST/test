import React, { useState } from 'react';

const App: React.FC = () => {
  // Состояние для счетчика кликов
  const [count, setCount] = useState<number>(0);

  // Функция для увеличения счетчика
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h1 style={{ fontSize: '2rem', color: '#333' }}>Добро пожаловать!</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '20px' }}>
        Это простая заглушка для вашего приложения.
      </p>

      {/* Интерактивный элемент */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <button
          onClick={incrementCount}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            color: '#fff',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          Нажми меня
        </button>

        <p style={{ fontSize: '1.2rem', color: '#333' }}>
          Количество кликов: <strong>{count}</strong>
        </p>
      </div>
    </div>
  );
};

export default App;