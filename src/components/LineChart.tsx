import React from 'react';
import { ResponsiveLine } from 'nivo';

type LineChartProps = {
  data: object,
  width: string,
  height: string
};

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const LineChart = ({ data, height, width } : LineChartProps) => (
    <div style={{height, width}}>
      <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 50, bottom: 50, left: 100 }}
      />
    </div>
)

export default LineChart;
