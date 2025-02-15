'use client'
import { useState, useRef } from 'react';

export default function TextArea (props) {
  const {onSubmit} = props;
  const inputRef = useRef();
  const [_value, _setValue] = useState('');

  const handleOnChange = (e) => {
    _setValue(e.target.value);
  };

  return (
    <div>
      <label>Enter some text to search the selected pdf file</label>
      <div>
        <textarea
          ref={inputRef}
          onChange={handleOnChange}
          className="easy-text-area-input"
          placeholder="enter some text"
          value={_value}
        />
      </div>

      <div>
        <button onClick={() => onSubmit(_value)}>Submit</button>
      </div>

    </div>
  );
};
