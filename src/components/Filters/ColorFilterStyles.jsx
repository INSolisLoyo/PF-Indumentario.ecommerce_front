import React from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderRadius: '4px',
    borderStyle: 'solid',
    borderWidth: '1px',
    cursor: 'default',
    minHeight: '36px',
    outline: '0',
    padding: '4px',
    ':hover': {
      borderColor: '#b3b3b3',
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
};

const ColourFilter = ({
  value,
  onChange
}) => (
  <Select
    closeMenuOnSelect={false}
    defaultValue={value}
    isMulti
    options={colourOptions}
    styles={colourStyles}
    onChange={onChange}
  />
);

export default ColourFilter;

