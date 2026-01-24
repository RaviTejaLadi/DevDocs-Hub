# **Simple Calculator**

## Table of Contents

1. [JavaScript Version](#javascript-version)
2. [TypeScript Version](#typescript-version)

## JavaScript Version

```jsx
import React, { useState } from 'react';

const CalculatorJS = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (num) => {
    setInput(input + num);
  };

  const handleOperationClick = (op) => {
    if (input === '' && result === 0) return;

    if (input !== '') {
      calculate();
    }
    setOperation(op);
  };

  const calculate = () => {
    let currentValue = parseFloat(input);
    let newResult = result;

    if (operation === '+') {
      newResult += currentValue;
    } else if (operation === '-') {
      newResult -= currentValue;
    } else if (operation === '*') {
      newResult *= currentValue;
    } else if (operation === '/') {
      newResult /= currentValue;
    } else {
      newResult = currentValue;
    }

    setResult(newResult);
    setInput('');
    return newResult;
  };

  const handleEquals = () => {
    if (operation && input !== '') {
      calculate();
      setOperation(null);
    }
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
    setOperation(null);
  };

  return (
    <div
      style={{
        maxWidth: '300px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div
        style={{
          marginBottom: '20px',
          padding: '10px',
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '5px',
          minHeight: '60px',
          textAlign: 'right',
        }}
      >
        <div style={{ color: '#666', fontSize: '14px' }}>
          {operation && `${result} ${operation}`} {input}
        </div>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
          {input || result}
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
        }}
      >
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperationClick('/')}>/</button>

        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperationClick('*')}>*</button>

        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperationClick('-')}>-</button>

        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button onClick={handleEquals}>=</button>
        <button onClick={() => handleOperationClick('+')}>+</button>

        <button
          onClick={handleClear}
          style={{
            gridColumn: 'span 4',
            backgroundColor: '#ff4444',
            color: 'white',
          }}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default CalculatorJS;
```

## TypeScript Version

```tsx
import React, { useState } from 'react';

type OperationType = '+' | '-' | '*' | '/' | null;

const CalculatorTS: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number>(0);
  const [operation, setOperation] = useState<OperationType>(null);

  const handleNumberClick = (num: string): void => {
    setInput(input + num);
  };

  const handleOperationClick = (op: OperationType): void => {
    if (input === '' && result === 0) return;

    if (input !== '') {
      calculate();
    }
    setOperation(op);
  };

  const calculate = (): number => {
    const currentValue = parseFloat(input);
    let newResult = result;

    switch (operation) {
      case '+':
        newResult += currentValue;
        break;
      case '-':
        newResult -= currentValue;
        break;
      case '*':
        newResult *= currentValue;
        break;
      case '/':
        newResult /= currentValue;
        break;
      default:
        newResult = currentValue;
    }

    setResult(newResult);
    setInput('');
    return newResult;
  };

  const handleEquals = (): void => {
    if (operation && input !== '') {
      calculate();
      setOperation(null);
    }
  };

  const handleClear = (): void => {
    setInput('');
    setResult(0);
    setOperation(null);
  };

  return (
    <div
      style={{
        maxWidth: '300px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div
        style={{
          marginBottom: '20px',
          padding: '10px',
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '5px',
          minHeight: '60px',
          textAlign: 'right',
        }}
      >
        <div style={{ color: '#666', fontSize: '14px' }}>
          {operation && `${result} ${operation}`} {input}
        </div>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
          {input || result}
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
        }}
      >
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperationClick('/')}>/</button>

        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperationClick('*')}>*</button>

        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperationClick('-')}>-</button>

        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button onClick={handleEquals}>=</button>
        <button onClick={() => handleOperationClick('+')}>+</button>

        <button
          onClick={handleClear}
          style={{
            gridColumn: 'span 4',
            backgroundColor: '#ff4444',
            color: 'white',
          }}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default CalculatorTS;
```
