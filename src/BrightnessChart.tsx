import React from 'react';
import {
  Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { BrightnessRes } from './Charts';

type BrightnessChartProps = {
  briDataList: BrightnessRes
}

type brightnessData = {
  time: string,
  brightness: number,
  pv: 2400,
  amt: 2400
}

const parseBriData = (dataList: BrightnessRes): brightnessData[] => {
  if (!dataList) return [];

  let thinOutedDataList: BrightnessRes = [];

  if (dataList.length > 200) {
    for (let i = 0; i < dataList.length; i += Math.floor(dataList.length / 200)) {
      thinOutedDataList.push(dataList[i]);
    }
  } else {
    thinOutedDataList = dataList;
  }

  console.log('bri data length', thinOutedDataList.length);

  return thinOutedDataList
    .sort((a, b) => a.time - b.time)
    .map((data) => ({
      time: new Date(
        data.time * 1000 + new Date('1900/01/01 00:00:00 GMT+09:00').getMilliseconds(),
      ).toLocaleTimeString(),
      brightness: data.brightness,
      pv: 2400,
      amt: 2400,
    }));
};

const BrightnessChart: React.VFC<BrightnessChartProps> = ({ briDataList }) => (
  <div>
    <ResponsiveContainer height={240}>
      <AreaChart
        data={parseBriData(briDataList)}
        syncId="brightnessGraph"
        margin={{
          left: 20,
          right: 20,
        }}
      >
        <defs>
          <linearGradient id="colorBri" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFF7B4" stopOpacity={0.7} />
            <stop offset="95%" stopColor="#FFF7B4" stopOpacity={0.3} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#666666" strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <Area
          type="monotone"
          dataKey="brightness"
          strokeWidth="3px"
          stroke="#FFF072"
          fillOpacity={1}
          fill="url(#colorBri)"
          animateNewValues
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default BrightnessChart;
