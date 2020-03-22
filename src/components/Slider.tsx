import React, {useState} from 'react';
// import React, {useState,useRef} from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
// import _ from "lodash";

// const THROTTLE = 800;

export const Slider = ({max,min,onChange,formatLabel}) => {
  const [value,setValue] = useState(max);
  // const throttledOnChange = useRef(_.throttle(value => onChange(value), THROTTLE)).current;

  // const handleChange = (value) => {
    // setValue(value);
    // throttledOnChange(value);
  // };

  return (
    <InputRange
      formatLabel={(value) => (formatLabel && formatLabel(value)) || value}
      maxValue={max}
      minValue={min}
      value={value}
      onChange={setValue}
      onChangeComplete={onChange}
    />
  );
};

export default Slider;
