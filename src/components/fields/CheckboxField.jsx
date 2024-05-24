import PropTypes from 'prop-types';

const CheckboxField = ({ fieldName, field, register }) => (
  <div className='form__checkboxes'>
    {field.checkboxes.map((checkbox, index) => {
      return (
        <div key={index} className='form__checkbox'>
          <input
            id={checkbox.name}
            name={fieldName}
            type={field.type}
            {...register(fieldName, {
              required: field.isRequired,
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
