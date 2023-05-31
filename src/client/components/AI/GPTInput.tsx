import React, { useState } from 'react';

import { FaArrowRight } from 'react-icons/fa';

type Props = {};

const GPTInput = (props: Props) => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const getMessages = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: value,
      }),
    };
    try {
      const res = await fetch('/api/gpt', options);
      const data = await res.json();
      console.log(data);
      setMessage(data.choices[0].message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="input-container">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div id="submit" onClick={getMessages}>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default GPTInput;
