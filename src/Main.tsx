import React, { useEffect, useState } from 'react';
import { parseJsonText } from 'typescript';

type TemperatureList = {
  temperature: number,
  time: number,
}[];

const Main: React.VFC = () => {
  const [tempratureList, setTemp] = useState<TemperatureList>([]);
  useEffect(() => {
    setInterval(() => {
      fetch('https://lunabbit.ddns.net/tempertures')
        .then((res) => res.json().then((data) => setTemp(data)))
        .catch((err) => console.log(err));
    }, 10000);
  }, []);
  return (
    <ul>
      {tempratureList.map((temp) => <li>{temp}</li>)}
    </ul>
  );
};

export default Main;
