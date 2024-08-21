import PropTypes from 'prop-types';

/**
 * SelectField component renders a select dropdown based on the provided configuration.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.fieldName - The name of the field.
 * @param {Object} props.field - The configuration object for the field.
 * @param {function} props.register - The register function from useForm hook.
 * @param {function} props.fieldErrorClass - The function to determine the error class for the input.
 * @param {function} props.handleChange
 * @returns {JSX.Element} - The JSX element for the select dropdown.
 */
const SelectField = ({
  fieldName,
  field,
  register,
  fieldErrorClass,
  handleChange,
}) => {
  const {
    options,
    type,
    fieldClass = ' ',
    isRequired = true,
    defaultValue = 'Choisir une option',
  } = field;
  return (
    <select
      id={fieldName}
      name={fieldName}
      type={type}
      className={`sg-form-lib__select ${fieldClass} ${fieldErrorClass(
        fieldName
      )}`}
      {...register(fieldName, {
        required: isRequired,
        onChange: (e) => {
          if (handleChange) {
            handleChange(e);
          }
        },
      })}
    >
      <option value=''>{defaultValue}</option>
      {options.map((option, index) => {
        const { value, label } = option;
        return (
          <option value={value} key={index}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

SelectField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  field: PropTypes.shape({
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    type: PropTypes.string.isRequired,
    fieldClass: PropTypes.string,
    isRequired: PropTypes.bool,
    defaultValue: PropTypes.string,
  }).isRequired,
  register: PropTypes.func.isRequired,
  fieldErrorClass: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
};

export default SelectField;
