import React from 'react';

export default function KelvinButton(props) {
  const { kelvin, hex, clicked } = props;

  return (
    <div className=" rounded py-2 px-1" style={{ backgroundColor: hex }} onClick={() => clicked(kelvin)}>
      <span>{kelvin}K</span>
    </div>
  );
}
