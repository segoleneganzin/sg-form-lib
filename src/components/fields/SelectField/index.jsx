import PropTypes from 'prop-types';

const SelectField = ({ fieldName, field, register, inputErrorClass }) => (
  <select
    id={fieldName}
    name={fieldName}
    type={field.type}
    className={
      `form__select` + inputErrorClass(fieldName) // into css : form__input / form__textarea, ...
    }
    {...register(fieldName, {
      required: field.isRequired,
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
