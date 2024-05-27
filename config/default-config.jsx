// Form field settings
// Here you can add all field you want to use into forms
// default tag = input
// default pattern = null
// label and type are always required
const isRequired = true; // default isRequired
export const fieldConfig = {
  email: {
    label: 'Email',
    type: 'email',
    pattern: /\S+@\S+\.\S+/,
    isRequired,
  },
  passwordConfirmation: {
    label: 'Confirmer le mot de passe :',
    type: 'password',
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    isRequired,
  },
  password: {
    label: 'Mot de passe',
    type: 'password',
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    isRequired,
  },
  message: {
    tag: 'textarea',
    label: 'Message',
    type: 'text',
    isRequired,
  },
  name: { label: 'Nom', type: 'text', isRequired },
  age: { label: 'Âge', type: 'number', isRequired },
  tel: { label: 'Téléphone', type: 'text', isRequired },
  otherInfos: {
    tag: 'textarea',
    label: 'Autre(s) information(s)',
    type: 'text',
    isRequired: false,
  },
  // radio buttons
  gender: {
    tag: 'radio',
    type: 'radio',
    label: 'Genre',
    isRequired,
    radios: [
      {
        label: 'Homme',
        value: 'Homme',
        name: 'male',
      },
      {
        label: 'Femme',
        value: 'Femme',
        name: 'female',
      },
    ],
  },
  // select
  country: {
    tag: 'select',
    label: 'Pays',
    defaultValue: 'Choisir une option',
    isRequired,
    options: [
      {
        label: 'Angleterre',
        value: 'Angleterre',
      },
      {
        label: 'Espagne',
        value: 'Espagne',
      },
      {
        label: 'France',
        value: 'France',
      },
    ],
  },
  // checkboxes
  animals: {
    tag: 'checkbox',
    type: 'checkbox',
    label: 'Animaux déjà adoptés',
    isRequired: false,
    checkboxes: [
      {
        label: 'Chien',
        value: 'chien',
        name: 'dog',
      },
      {
        label: 'Chat',
        value: 'chat',
        name: 'cat',
      },
      {
        label: 'NAC',
        value: 'NAC',
        name: 'nac',
      },
    ],
  },
};
