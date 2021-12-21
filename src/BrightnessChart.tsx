import React from 'react';
import {
  Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { BrightnessRes } from './Charts';

type BrightnessChartProps = {
  briDataList: BrightnessRes
}

type brightnessData = {
  name: string,
  brightness: number,
  pv: 2400,
  amt: 2400
}

const parseBriData = (dataList: BrightnessRes): brightnessData[] => {
  console.log('parseBriData', dataList);
  if (!dataList) return [];

  return dataList.map((data) => ({
    name: new Date(
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
        syncId="anyId"
        margin={{
          left: 20,
          right: 20,
        }}
      >
        <CartesianGrid stroke="#aaa" strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <Area
          type="monotone"
          dataKey="brightness"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
    {`${parseBriData(briDataList)}`}
  </div>
);

export default BrightnessChart;
