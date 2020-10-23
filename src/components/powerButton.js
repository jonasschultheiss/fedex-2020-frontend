import React from 'react';

export default function PowerButton(props) {
  const { value, changed } = props;
  console.log('PowerButton -> value', value);
  return (
    <button
      className={`${value === 'off' ? 'bg-red-500' : 'bg-green-500'} py-2 px-4 rounded w-24 focus:outline-none`}
      onClick={() => changed(value === 'off' ? 'on' : 'off')}
    >
      <span>{value?.toUpperCase()}</span>
    </button>
  );
}
