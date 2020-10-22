import React from 'react';

export default function Slider(props) {
  const { name, min, max, steps, changed, value, disabled, text } = props;

  return (
    <div>
      <label for={name} className="mr-4">
        {text}
      </label>
      <input disabled={disabled} type="range" id={name} name={name} min={min} max={max} value={value || min} step={steps} onChange={(e) => changed(e)}></input>
    </div>
  );
}
