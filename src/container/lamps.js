import React, { useEffect, useState } from 'react';
import Lamp from '../components/lamp';
import api from '../utils/api';

export default function Lamps(props) {
  const { iNumber } = props;

  const [lamps, setLamps] = useState([]);

  useEffect(() => {
    const fetchLamps = async () => {
      let res;
      if (iNumber) {
        res = await api.get(`/lamps?iNumber=${iNumber}`);
      } else {
        res = await api.get(`/lamps`);
      }

      setLamps(res.data);
    };

    fetchLamps();
  }, [iNumber]);

  return (
    <div className="flex flex-row flex-wrap justify-evenly ">
      {lamps.map((lamp, key) => (
        <Lamp iNumber={lamp.iNumber} status={lamp.status} key={key} />
      ))}
    </div>
  );
}
