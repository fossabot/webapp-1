import TimePicker from 'shared/components/TimePicker';


// export default () => (
// <FormControl fullWidth margin="normal">
//           <TimePicker />
//         </FormControl>

//   <MuiPickersUtilsProvider utils={LuxonUtils}>
//     <TimePicker
//       clearable
//       ampm={false}
//       label="24 hours"
//       variant="outlined"
//       // value={selectedDate}
//       // onChange={this.handleDateChange}
//     />
//   </MuiPickersUtilsProvider>
// );


import React from 'react';
import PropTypes from 'prop-types';

const TimePickerField = ({
  compact,
  disabled,
  required,
  label,
  input,
  meta: { touched, error },
  placeholder,
}) => (
  // <FormControl
  //   fullWidth
  //   margin="normal"
  // >
  <TimePicker
    disabled={disabled}
    label={label}
    value={input.value}
    onChange={input.onChange}
    margin="normal"
    fullWidth={!compact}
    error={touched && error}
    helperText={(touched && error) ? error : (!required ? 'Optional' : '')}
  />
  // <MuiTextField
  //   // required={required}
  //   fullWidth={!compact}
  //   error={touched && error}
  //   disabled={disabled}
  //   label={label}
  //   value={input.value}
  //   onChange={input.onChange}
  //   name={input.name}
  //   margin="normal"
  //   helperText={(touched && error) ? error : (!required ? 'Optional' : '')}
  //   variant="outlined"
  //   type={type}
  //   placeholder={placeholder}
  // />
);

TimePickerField.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.shape(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  required: PropTypes.bool,
  compact: PropTypes.bool,
  type: PropTypes.string,
};

TimePickerField.defaultProps = {
  disabled: false,
  required: false,
  type: 'text',
  compact: false,
};

export default TimePickerField;
