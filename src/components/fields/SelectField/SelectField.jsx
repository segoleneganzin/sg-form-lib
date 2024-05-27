import PropTypes from 'prop-types';

/**
 * SelectField component renders a select dropdown based on the provided configuration.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.fieldName - The name of the field.
 * @param {Object} props.field - The configuration object for the field.
 * @param {function} props.register - The register function from useForm hook.
 * @param {function} props.inputErrorClass - The function to determine the error class for the input.
 * @returns {JSX.Element} - The JSX element for the select dropdown.
 */
const SelectField = ({ fieldName, field, register, inputErrorClass }) => (
  <select
    id={fieldName}
    name={fieldName}
    type={field.type}
    className={
      `sg-form-lib__select` + inputErrorClass(fieldName) // into css : sg-form-lib__input / sg-form-lib__textarea, ...
    }
    {...register(fieldName, {
      required: field.isRequired,
      validate: field.validate && field.validate, // verify if field validate a personnalized function (ex : isLevelValid for a number between 25 and 100, and multiple of 5)
    })}
  >
    <option value=''>{field.defaultValue}</option>
    {field.options.map((option, index) => {
      return (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      );
    })}
  </select>
);

SelectField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  inputErrorClass: PropTypes.func.isRequired,
};
export default SelectField;
