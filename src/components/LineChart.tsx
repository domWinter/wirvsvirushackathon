import React from 'react';
import { ResponsiveLine } from 'nivo';
import { useIntl, defineMessages } from "react-intl";

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
const LineChart = ({ data, height, width } : LineChartProps) => {
  const intl = useIntl();

  const messages = defineMessages({
    date: { id: 'date', defaultMessage: 'Datum' },
  });

  return (
    <div style={{height, width}}>
      <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 50, bottom: 50, left: 100 }}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            legend: intl.formatMessage(messages.date),
            legendOffset: 36,
            legendPosition: 'center'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'center'
        }}
        dotSize={12}
      />
    </div>
  );
}

export default LineChart;
