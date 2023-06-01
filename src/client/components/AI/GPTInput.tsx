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
    <div className="flex flex-col items-center justify-center w-full m-5 ">
      <h2>Set the tone of your origin story</h2>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="I am a storyteller that loves to tell origin stories"
        className="w-1/3 p-3 m-3 rounded-lg"
      />
      <div id="submit" onClick={getMessages}>
        <FaArrowRight className="m-5 text-xl" />
      </div>
    </div>
  );
};

export default GPTInput;
