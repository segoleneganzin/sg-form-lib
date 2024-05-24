import PropTypes from 'prop-types';
const FormDataLayout = ({
  children,
  fieldName,
  field,
  errors,
  translation,
}) => {
  return (
    <div className='form__data'>
      {/* label */}
      <label htmlFor={fieldName} className='form__label'>
        {field.label}
      </label>
      {/* content - manage into Form.jsx */}
      {children}
      {/* error message */}
      <p className='form__data--error'>
        {errors[fieldName]?.type === 'required' && (
          <>Veuillez entrer votre {translation(fieldName)}</>
        )}
        {errors[fieldName]?.type === 'pattern' && <>Champ invalide</>}
      </p>
    </div>
  );
};
FormDataLayout.propTypes = {
  children: PropTypes.element.isRequired,
  fieldName: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  translation: PropTypes.func.isRequired,
};
export default FormDataLayout;
