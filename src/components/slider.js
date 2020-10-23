import React from 'react';

export default function Slider(props) {
  const { name, min, max, steps, changed, value, disabled, text } = props;

  return (
    <div className="bg-gray-700 p-4 w-2/5 rounded-md mb-4 flex flex-col">
      <label for={name} className="mr-4 text-white font-bold text-lg mb-2">
        {text}
      </label>
      <input
        className=""
        disabled={disabled}
        type="range"
        id={name}
        name={name}
        min={min}
        max={max}
        value={value || min}
        step={steps}
        onChange={(e) => changed(e)}
      ></input>
    </div>
  );
}
