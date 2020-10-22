import React from 'react';
import { Link } from 'react-router-dom';

export default function Lamp(props) {
  const { iNumber, status } = props;

  let statusClass = 'text-lg ';

  status === 'on' ? (statusClass += 'text-green-500') : (statusClass += 'text-red-500');

  return (
    <div className="bg-gray-800 w-1/4 rounded-md p-2 cursor-pointer">
      <Link to={`/lamps/${iNumber}`}>
        <p className="text-white text-lg">{iNumber}</p>
        <p className={statusClass}>{status}</p>
      </Link>
    </div>
  );
}
