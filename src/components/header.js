import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { changed, value } = props;
  return (
    <header className="bg-gray-800 px-24 py-6">
      <div>
        <Link to="/">
          <h1 className="text-white font-extrabold text-4xl">Lightmaster 2000</h1>
          <h2 className="text-white font-medium text-xl">Shed {process.env.REACT_APP_SHED_NAME}</h2>
        </Link>
      </div>
      <div>
        <p className="text-white font-medium text-xl">Deine i nummer:</p>
        <input type="text" onChange={(e) => changed(e)} value={value} />
      </div>
    </header>
  );
}
