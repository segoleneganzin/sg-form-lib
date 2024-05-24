/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { fieldConfig } from '../../../config/fieldConfig';
import OtherField from '../fields/OtherField';
import SelectField from '../fields/SelectField';
import RadioField from '../fields/RadioField';
import FormDataLayout from '../../layouts/FormDataLayout';
import CheckboxField from '../fields/CheckboxField';

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
 * @returns {JSX.Element} The JSX element for the form.
 */
const Form = ({
  title,
  subtitle,
  btnText,
  onSubmitFunction,
  validationMessage,
  errorMessage,
  fieldNames,
  fieldValue,
}) => {
  // Destructuring properties from the useForm hook
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  /**
   * Effect to set initial values for fields if provided.
   * e.g. for update form
   */
  useEffect(() => {
    const fetchPost = async () => {
      try {
        fieldNames.forEach((fieldName) => {
          setValue(fieldName, fieldValue[fieldName]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    // if props is set
    if (fieldValue) {
      fetchPost();
    }
  }, [fieldNames, fieldValue, setValue]);

  /**
   * Translates field names to their French equivalents when necessary.
   * @param {string} value - The field name to translate.
   * @returns {string} The translated field name.
   */
  const translation = (value) => {
    const translations = {
      name: 'nom',
      password: 'mot de passe',
      passwordConfirmation: 'mot de passe identique',
      country: 'pays',
      gender: 'genre',
      animals: 'animaux adoptés',
    };
    return translations[value] || value;
  };

  /**
   * Function to get the error class for a given field.
   * @param {string} field - Name of the field.
   * @returns {string} - Error class for the field.
   */
  const inputErrorClass = (field) => {
    return errors[field] ? ' input-error' : '';
  };

  return (
    <form
      onSubmit={handleSubmit(() =>
        onSubmitFunction(...fieldNames.map((fieldName) => getValues(fieldName)))
      )}
      className='form'
      noValidate // validate by useForm hook
    >
      {/* Titles section */}
      <div className='form__section-title'>
        {title && <h2 className='title form__title'>{title}</h2>}
        {subtitle && <p className='subtitle form__subtitle'>{subtitle}</p>}
      </div>

      {/* form content (fields + validation message + submit button) */}
      <div className='form__content'>
        {fieldNames.map((fieldName, index) => {
          const field = fieldConfig[fieldName];
          const commonProps = {
            fieldName,
            field,
            register,
            inputErrorClass,
          };

          return (
            <FormDataLayout
              fieldName={fieldName}
              field={field}
              errors={errors}
              translation={translation}
              key={index}
            >
              {field.tag === 'select' ? (
                <SelectField {...commonProps} />
              ) : field.tag === 'radio' ? (
                <RadioField {...commonProps} />
              ) : field.tag === 'checkbox' ? (
                <CheckboxField {...commonProps} />
              ) : (
                <OtherField {...commonProps} />
              )}
            </FormDataLayout>
          );
        })}

        <p className='form__message--validation'>{validationMessage}</p>
        <p className='form__message--error'>{errorMessage}</p>
        <button type='submit' className='btn'>
          {btnText}
        </button>
      </div>
    </form>
  );
};
Form.propTypes = {
  onSubmitFunction: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  validationMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  fieldNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  fieldValue: PropTypes.object,
};
export default Form;
