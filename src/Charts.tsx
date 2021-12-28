import React, { useState, useEffect } from 'react';
import Chart from './Chart';
import './charts.css';

type DataLists = {
  tempDataList: temperatureData[],
  humidityDataList: humidityData[],
  pressureDataList: pressureData[]
}

type temperatureData = {
  time: string,
  temperature: number,
}

type DataType = {
  timestamp: number,
  humidity: number,
  pressure: number,
  temperature: number,
}

type humidityData = {
  time: string,
  humidity: number,
}

type pressureData = {
  time: string,
  pressure: number,
}

const parseData = (dataList: DataType[]): DataLists => {
  const tempDataList: temperatureData[] = [];
  const humidityDataList: humidityData[] = [];
  const pressureDataList: pressureData[] = [];
  dataList
    .sort((a, b) => a.timestamp - b.timestamp)
    .forEach((data) => {
      const time = (new Date(data.timestamp * 1000)).toLocaleTimeString();
      tempDataList.push({ time, temperature: data.temperature });
      humidityDataList.push({ time, humidity: data.humidity });
      pressureDataList.push({ time, pressure: data.pressure });
    });
  return { tempDataList, humidityDataList, pressureDataList };
};

const fetchData = async (): Promise<DataLists> => {
  let json: DataType[] = [];
  try {
    const res = await fetch('https://script.google.com/macros/s/AKfycbx6RPKHP5zFBQRs29BhQlCtjb8mR6tnW365fBuNzijJGeOPdfF5upLHU36swc8VBX6c/exec?req=data');
    json = await res.json();
    console.log(json);
  } catch (error) {
    console.log('fetch data', error);
  }
  return parseData(json);
};

const Charts: React.VFC = () => {
  const [dataLists, setDataLists] = useState<DataLists>({
    tempDataList: [],
    humidityDataList: [],
    pressureDataList: [],
  });

  useEffect(() => {
    const set = async (): Promise<void> => {
      setDataLists(await fetchData());
    };
    set();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      setDataLists(await fetchData());
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, [dataLists]);

  return (
    <div>
      <Chart.TemperatureChart dataList={dataLists.tempDataList} />
      <Chart.HumidityChart dataList={dataLists.humidityDataList} />
      <Chart.PressureChart dataList={dataLists.pressureDataList} />
    </div>
  );
};

export default Charts;
