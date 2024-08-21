/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { defaultFieldConfig } from '../../../config/default-config';
import OtherField from '../fields/OtherField';
import SelectField from '../fields/SelectField';
import CheckField from '../fields/CheckField';
import FormDataLayout from '../../layouts/FormDataLayout';

/**
 * Form component dynamically generates a form based on provided configurations.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the form.
 * @param {string} props.subtitle - The subtitle of the form.
 * @param {string} props.btnText - The text for the submit button. [required]
 * @param {function} props.onSubmitFunction - The function to call on form submission. [required]
 * @param {string} props.validationMessage - The validation message to display.
 * @param {string} props.errorMessage - The error message to display.
 * @param {Array<string>} props.fieldNames - The names of the fields to include in the form. [required]
 * @param {Object} props.fieldValue - The initial values for the fields.
 * @param {function} props.onFieldChange - The function to call on field value change.
 * @returns {JSX.Element} The JSX element for the form.
 */
const Form = ({
  formId,
  fieldsConfig = defaultFieldConfig,
  title,
  subtitle,
  btnText,
  onSubmitFunction,
  validationMessage,
  errorMessage,
  fieldNames,
  fieldValue,
  onFieldChange,
}) => {
  // Destructuring properties from the useForm hook
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const form = useRef();

  /**
   * Effect to set initial values for fields if provided.
   * e.g. for update form
   */
  useEffect(() => {
    if (fieldValue) {
      fieldNames.forEach((fieldName) => {
        setValue(fieldName, fieldValue[fieldName]);
      });
    }
  }, [fieldNames, fieldValue, setValue]);

  /**
   * Manage onChange fields
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFieldChange && onFieldChange(name, value);
  };

  const handleSubmitFunction = (data) => {
    const formData = fieldNames.reduce((acc, fieldName) => {
      acc[fieldName] = data[fieldName];
      return acc;
    }, {});
    onSubmitFunction(formData);
  };

  /**
   * Function to get the error class for a given field and manage if display is necessary (error or not).
   * @param {string} field - Name of the field.
   * @returns {string} - Error class for the field.
   */
  const fieldErrorClass = (fieldName) => {
    return errors[fieldName] ? ' sg-form-lib__field--error' : '';
  };

  const renderField = (field, commonProps) => {
    switch (field.type) {
      case 'select':
        return <SelectField {...commonProps} />;
      case 'radio':
      case 'checkbox':
        return <CheckField {...commonProps} />;
      default:
        return <OtherField {...commonProps} />;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitFunction)}
      className='sg-form-lib'
      id={formId}
      ref={form}
      noValidate // validate by useForm hook
    >
      {/* Titles section */}
      {(title || subtitle) && (
        <div className='sg-form-lib__section-title'>
          {title && <h2 className='sg-form-lib__title'>{title}</h2>}
          {subtitle && <p className='sg-form-lib__subtitle'>{subtitle}</p>}
        </div>
      )}
      {/* form content (fields + validation message + submit button) */}
      <div className='sg-form-lib__content'>
        {fieldNames.map((fieldName, index) => {
          const field = fieldsConfig[fieldName];
          const commonProps = {
            fieldName,
            field,
            register,
            fieldErrorClass,
            handleChange,
          };

          return (
            <FormDataLayout
              fieldName={fieldName}
              field={field}
              errors={errors}
              key={index}
            >
              {renderField(field, commonProps)}
            </FormDataLayout>
          );
        })}

        <p className='sg-form-lib__message--validation'>{validationMessage}</p>
        <p className='sg-form-lib__message--error'>{errorMessage}</p>
        <button type='submit' className='sg-form-lib__btn'>
          {btnText}
        </button>
      </div>
    </form>
  );
};
Form.propTypes = {
  formId: PropTypes.string,
  fieldsConfig: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  onSubmitFunction: PropTypes.func.isRequired,
  validationMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  fieldNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  fieldValue: PropTypes.object,
  onFieldChange: PropTypes.func,
};

export default Form;
