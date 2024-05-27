import PropTypes from 'prop-types';

const OtherField = ({ fieldName, field, register, inputErrorClass }) => {
  const Tag = field.tag || 'input';
  return (
    <Tag
      id={fieldName}
      name={fieldName}
      type={field.type}
      className={
        `sg-form-lib__${field.tag || 'input'}` + inputErrorClass(fieldName) // into css : sg-form-lib__input / sg-form-lib__textarea, ...
      }
      {...register(fieldName, {
        required: field.isRequired,
        pattern: field.pattern || null, // null by default, if the information isn't set into fieldConfig
      })}
    />
  );
};

OtherField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  inputErrorClass: PropTypes.func.isRequired,
};

export default OtherField;
