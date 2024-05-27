import PropTypes from 'prop-types';

/**
 * RadioField component renders a set of radio buttons based on the provided configuration.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.fieldName - The name of the field.
 * @param {Object} props.field - The configuration object for the field.
 * @param {function} props.register - The register function from useForm hook.
 * @returns {JSX.Element} - The JSX element for the set of radio buttons.
 */
const RadioField = ({ fieldName, field, register }) => (
  <div className='sg-form-lib__radios'>
    {field.radios.map((radio, index) => {
      return (
        <div key={index} className='sg-form-lib__radio'>
          <input
            id={radio.name}
            name={fieldName}
            type={field.type}
            {...register(fieldName, {
              required: field.isRequired,
              validate: field.validate && field.validate, // verify if field validate a personnalized function (ex : isLevelValid for a number between 25 and 100, and multiple of 5)
            })}
            value={radio.value}
          />
          <label htmlFor={radio.name}>{radio.value}</label>
        </div>
      );
    })}
  </div>
);
RadioField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};
export default RadioField;
