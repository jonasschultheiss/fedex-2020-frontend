import React, { useEffect, useState } from 'react';
import Lamp from '../components/lamp';

export default function Lamps(props) {
  const { iNumber } = props;

  const [lamps, setLamps] = useState([]);

  const idk = [
    {
      iNumber: 'i02401312',
      brightness: 60,
      temperature: 2700,
      status: 'off',
      autoTemp: false,
    },
    {
      iNumber: 'i02401311',
      brightness: 40,
      temperature: 6500,
      status: 'on',
      autoTemp: true,
    },
    {
      iNumber: 'i02401313',
      brightness: 80,
      temperature: 5000,
      status: 'on',
      autoTemp: false,
    },
  ];

  useEffect(() => {
    const fetchLamps = async () => {
      let res;
      if (iNumber) {
        // res = await api.get(`/lamps?inumber=${iNumber}`);
        res = idk.filter((lamp) => lamp.iNumber.includes(iNumber)) || [];
      } else {
        // res = await api.get(`/lamps`);
        res = idk;
      }

      setLamps(res);
      console.log(lamps);
    };

    fetchLamps();
  }, [iNumber]);

  return (
    <div className="flex flex-row flex-wrap justify-evenly py-8 px-2">
      {lamps.map((lamp, key) => (
        <Lamp iNumber={lamp.iNumber} status={lamp.status} key={key} />
      ))}
    </div>
  );
}
