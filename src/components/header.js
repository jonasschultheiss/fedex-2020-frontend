import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { changed, value } = props;
  return (
    <header className="bg-gray-800 px-24 py-6 flex flex-row justify-between">
      <div>
        <Link to="/">
          <h1 className="text-white font-extrabold text-4xl">LightMaster 2000</h1>
          <h2 className="text-white font-medium text-xl">Shed {process.env.REACT_APP_SHED_NAME}</h2>
        </Link>
      </div>
      <div className="flex flex-row">
        <p className="text-white font-medium text-xl mr-4">Deine i nummer:</p>
        <div>
          <input type="text" onChange={(e) => changed(e)} value={value} />
        </div>
      </div>
    </header>
  );
}
