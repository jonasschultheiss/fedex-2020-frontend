import React from 'react';
import { Link } from 'react-router-dom';
import LampPicture from '../assets/lamp.jpeg';

export default function Lamp(props) {
  const { iNumber, status } = props;

  let statusClass = 'text-lg ';

  status === 'on' ? (statusClass += 'text-green-500') : (statusClass += 'text-red-500');

  return (
    <div className="bg-gray-800 w-1/4 rounded-md cursor-pointer shadow-lg">
      <Link to={`/lamps/${iNumber}`}>
        <img src={LampPicture} className=" rounded rounded-b-none object-cover w-full h-32" alt="a lamp" />
        <div className="p-2">
          <p className="text-white text-lg">{iNumber}</p>
          <p className={statusClass}>{status?.toUpperCase()}</p>
        </div>
      </Link>
    </div>
  );
}
