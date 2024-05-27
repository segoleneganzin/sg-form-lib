import PropTypes from 'prop-types';

/**
 * CheckboxField component renders a group of checkboxes based on the provided configuration.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.fieldName - The name of the field.
 * @param {Object} props.field - The configuration object for the checkboxes.
 * @param {function} props.register - The register function from useForm hook.
 * @returns {JSX.Element} - The JSX element for the CheckboxField.
 */
const CheckboxField = ({ fieldName, field, register }) => (
  <div className='sg-form-lib__checkboxes'>
    {field.checkboxes.map((checkbox, index) => {
      return (
        <div key={index} className='sg-form-lib__checkbox'>
          <input
            id={checkbox.name}
            name={fieldName}
            type={field.type}
            {...register(fieldName, {
              required: field.isRequired,
              validate: field.validate && field.validate, // verify if field validate a personnalized function (ex : isLevelValid for a number between 25 and 100, and multiple of 5)
            })}
            value={checkbox.value}
          />
          <label htmlFor={checkbox.name}>{checkbox.value}</label>
        </div>
      );
    })}
  </div>
);
CheckboxField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};
export default CheckboxField;
