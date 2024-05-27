import PropTypes from 'prop-types';

/**
 * FormDataLayout component handles the layout of form data.
 *
 * @param {Object} props - The properties object.
 * @param {JSX.Element} props.children - The child elements of the layout.
 * @param {string} props.fieldName - The name of the field.
 * @param {Object} props.field - The field configuration object.
 * @param {Object} props.errors - The errors object.
 * @returns {JSX.Element} The JSX element for the form data layout.
 */
const FormDataLayout = ({ children, fieldName, field, errors }) => {
  return (
    <div className='sg-form-lib__data'>
      {/* label */}
      <label htmlFor={fieldName} className='sg-form-lib__label'>
        {field.label}
      </label>
      {/* content - manage into Form.jsx */}
      {children}
      {/* error message */}
      <p className='sg-form-lib__data--error'>
        {errors[fieldName]?.type === 'required' && (
          <>{field.fieldErrorMessage}</>
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
};
export default FormDataLayout;
