import React from 'react';
import {
  Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';

type temperatureData = {
  time: string,
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

const TemperatureChart: React.VFC<{
  dataList: temperatureData[]
}> = (
  { dataList },
) => (
  <ResponsiveContainer height={240} className="graph">
    <AreaChart
      data={dataList}
      syncId="temperatureGraph"
      margin={{
        left: 20,
        right: 20,
      }}
    >
      <defs>
        <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#FFB4B4" stopOpacity={0.7} />
          <stop offset="95%" stopColor="#FFB4B4" stopOpacity={0.3} />
        </linearGradient>
      </defs>
      <CartesianGrid stroke="#666666" strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis
        dataKey="temperature"
        domain={[
          Math.floor(Math.min(...dataList.map((n) => n.temperature))),
          Math.ceil(Math.max(...dataList.map((n) => n.temperature))),
        ]}

      />
      <Tooltip contentStyle={{ backgroundColor: '#77777799' }} wrapperStyle={{ backgroundColor: '#777777799' }} />
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
      <Area
        type="monotone"
        dataKey="temperature"
        strokeWidth="3px"
        stroke="#FFB4B4"
        fillOpacity={1}
        fill="url(#colorTemp)"
        animateNewValues
      />
    </AreaChart>
  </ResponsiveContainer>
);

const HumidityChart: React.VFC<{
  dataList: humidityData[]
}> = (
  { dataList },
) => (
  <ResponsiveContainer height={240} className="graph">
    <AreaChart
      data={dataList}
      syncId="humidityGraph"
      margin={{
        left: 20,
        right: 20,
      }}
    >
      <defs>
        <linearGradient id="colorHume" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#B5B4FF" stopOpacity={0.7} />
          <stop offset="95%" stopColor="#B5B4FF" stopOpacity={0.3} />
        </linearGradient>
      </defs>
      <CartesianGrid stroke="#666666" strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis
        dataKey="humidity"
        domain={[
          Math.floor(Math.min(...dataList.map((n) => n.humidity))),
          Math.ceil(Math.max(...dataList.map((n) => n.humidity))),
        ]}

      />
      <Tooltip contentStyle={{ backgroundColor: '#77777799' }} wrapperStyle={{ backgroundColor: '#777777799' }} />
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
      <Area
        type="monotone"
        dataKey="humidity"
        strokeWidth="3px"
        stroke="#918FFF"
        fillOpacity={1}
        fill="url(#colorHume)"
        animateNewValues
      />
    </AreaChart>
  </ResponsiveContainer>
);

const PressureChart: React.VFC<{
  dataList: pressureData[]
}> = (
  { dataList },
) => (
  <ResponsiveContainer height={240} className="graph">
    <AreaChart
      data={dataList}
      syncId="pressureGraph"
      margin={{
        left: 20,
        right: 20,
      }}
    >
      <defs>
        <linearGradient id="colorPress" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#DEFFB4" stopOpacity={0.7} />
          <stop offset="95%" stopColor="#DEFFB4" stopOpacity={0.3} />
        </linearGradient>
      </defs>
      <CartesianGrid stroke="#666666" strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis
        dataKey="pressure"
        domain={[
          Math.floor(Math.min(...dataList.map((n) => n.pressure))),
          Math.ceil(Math.max(...dataList.map((n) => n.pressure))),
        ]}

      />
      <Tooltip contentStyle={{ backgroundColor: '#77777799' }} wrapperStyle={{ backgroundColor: '#777777799' }} />
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
      <Area
        type="monotone"
        dataKey="pressure"
        strokeWidth="3px"
        stroke="#DEFFB4"
        fillOpacity={1}
        fill="url(#colorPress)"
        animateNewValues
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default {
  TemperatureChart,
  HumidityChart,
  PressureChart,
};
