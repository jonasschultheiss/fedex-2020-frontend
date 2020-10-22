import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import KelvinButton from '../components/KelvinButton';
import PowerButton from '../components/powerButton';
import Slider from '../components/slider';
import api from '../utils/api';

export default function LampControl(props) {
  const location = useLocation();
  const iNumber = location.pathname.substring(location.pathname.lastIndexOf('/') + 1, location.pathname.length);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [status, setStatus] = useState(null);
  const [brightness, setBrightness] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [autoTemp, setAutoTemp] = useState(null);

  const statusChangedHandler = (newStatus) => {
    setStatus(newStatus);
  };

  const brightnessChangedHandler = (e) => {
    e.preventDefault();
    setBrightness(e.target.value);
  };

  const temperatureChangedHandler = (e) => {
    e.preventDefault();
    setTemperature(e.target.value);
  };

  const kelvinButtonClicked = (kelvin) => {
    setTemperature(kelvin);
  };

  useEffect(() => {
    const fetchLamp = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/lamps?iNumber=${iNumber}`);

        setStatus(res.data[0].status);
        setBrightness(res.data[0].brightness);
        setTemperature(res.data[0].temperature);
        setAutoTemp(res.data[0].autoTemp);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchLamp();
  }, [iNumber]);

  useEffect(() => {
    const putStatus = async () => {
      await api.put(`/lamps/${iNumber}`, {
        iNumber,
        brightness,
        temperature,
        status,
        autoTemp,
      });
    };
    if (status) {
      putStatus();
    }
  }, [status, brightness, temperature, autoTemp, iNumber]);

  return (
    <div className="">
      {error ? (
        <p className="text-red-500 text-xl">An error occured</p>
      ) : loading ? (
        <p className="text-gray-500 text-xl">Loading...</p>
      ) : (
        <>
          <p className="text-4xl font-bold text-black">Light "{iNumber}"</p>
          <PowerButton value={status} changed={statusChangedHandler} />
          <Slider
            name="Brightness"
            min={0}
            max={100}
            steps={5}
            changed={brightnessChangedHandler}
            value={brightness}
            disabled={status === 'off'}
            text={`Brightness: ${brightness}%`}
          />
          <Slider
            name="Temperature"
            min={2700}
            max={6500}
            steps={100}
            changed={temperatureChangedHandler}
            value={temperature}
            disabled={status === 'off'}
            text={`Temperature: ${temperature} Kelvin`}
          />
          <div className="flex flex-row bg-gray-700 justify-evenly">
            <KelvinButton hex="#ffa957" kelvin={2700} clicked={kelvinButtonClicked} />
            <KelvinButton hex="#ffb46b" kelvin={3000} clicked={kelvinButtonClicked} />
            <KelvinButton hex="#ffc489" kelvin={3500} clicked={kelvinButtonClicked} />
            <KelvinButton hex="#ffd1a3" kelvin={4000} clicked={kelvinButtonClicked} />
            <KelvinButton hex="#ffe4ce" kelvin={5000} clicked={kelvinButtonClicked} />
            <KelvinButton hex="#fff9fd" kelvin={6500} clicked={kelvinButtonClicked} />
          </div>
        </>
      )}
    </div>
  );
}
