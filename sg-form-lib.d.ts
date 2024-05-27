// Déclaration des types pour les configurations de champ
interface FieldConfig {
  tag: string;
  label: string;
  type: string;
  pattern?: RegExp;
  fieldErrorMessage: string;
  isRequired: boolean;
  radios?: { label: string; value: string; name: string }[];
  options?: { label: string; value: string }[];
  checkboxes?: { label: string; value: string; name: string }[];
  defaultValue?: string;
}

// Déclaration des types pour les props du composant Form
interface FormProps {
  fieldsConfig?: Record<string, FieldConfig>;
  title?: string;
  subtitle?: string;
  btnText: string;
  onSubmitFunction: (...args: any[]) => void;
  validationMessage?: string;
  errorMessage?: string;
  fieldNames: string[];
  fieldValue?: Record<string, any>;
}

// Déclaration du composant Form
declare function Form(props: FormProps): JSX.Element;

// Export du module
export default Form;
