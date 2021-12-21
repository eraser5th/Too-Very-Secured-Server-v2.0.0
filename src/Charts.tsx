import React, { useState, useEffect } from 'react';
import BrightnessChart from './BrightnessChart';
import TemperatureChart from './TemperatureChart';
import './charts.css';

export type TemperatureRes = {
  temperature: number,
  time: number,
}[]

export type BrightnessRes = {
  brightness: number,
  time: number,
}[]

const fetchTemp = async (): Promise<TemperatureRes> => {
  let json: TemperatureRes = [];
  try {
    const res = await fetch('https://lunabbit.ddns.net/temperatures');
    json = await res.json();
    return json;
  } catch (error) {
    console.log('fetch temp', error);
  }
  return json;
};

const fetchBri = async (): Promise<BrightnessRes> => {
  let json: BrightnessRes = [];
  try {
    const res = await fetch('https://lunabbit.ddns.net/brightnesses');
    json = await res.json();
    return json;
  } catch (error) {
    console.log('fetch bri', error);
  }
  return json;
};

type ChartsProps = {
  initialTempsData: TemperatureRes,
  initialBrisData: BrightnessRes,
}

const Charts: React.VFC<ChartsProps> = ({ initialBrisData, initialTempsData }) => {
  const [TemperaturesData, setTempsData] = useState<TemperatureRes>(initialTempsData);
  const [BrightnessesData, setBrisData] = useState<BrightnessRes>(initialBrisData);

  useEffect(() => {
    const set = async (): Promise<void> => {
      setTempsData(await fetchTemp());
      setBrisData(await fetchBri());
    };
    set();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      const tempResData = await fetchTemp();
      const briResData = await fetchBri();
      if (tempResData[tempResData.length - 1] !== TemperaturesData[TemperaturesData.length - 1]) {
        setTempsData(tempResData);
      }
      setBrisData(briResData);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [TemperaturesData, BrightnessesData]);

  return (
    <div>
      <TemperatureChart tempDataList={TemperaturesData} />
      <BrightnessChart briDataList={BrightnessesData} />
    </div>
  );
};

export default Charts;
