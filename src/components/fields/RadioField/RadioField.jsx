import PropTypes from 'prop-types';

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
