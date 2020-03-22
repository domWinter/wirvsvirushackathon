import React, {useState} from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export const Slider = ({max,min,onChange,formatLabel}) => {
  const [value,setValue] = useState(max);

  const handleChange = (value) => {
    setValue(value);
    onChange(value);
  }

  return (
    <InputRange
      formatLabel={(value) => (formatLabel && formatLabel(value)) || value}
      maxValue={max}
      minValue={min}
      value={value}
      onChange={handleChange}
      onChangeComplete={value => console.log(value)}
    />
  );
};

export default Slider;
