import React from 'react';

export default function KelvinButton(props) {
  const { kelvin, hex, clicked, disabled } = props;

  return (
    <button
      className={`py-2 px-4 rounded w-56 ${disabled ? 'cursor-not-allowed' : ''}`}
      style={{ backgroundColor: hex }}
      onClick={() => clicked(kelvin)}
      disabled={disabled}
    >
      <span>{kelvin}K</span>
    </button>
  );
}
