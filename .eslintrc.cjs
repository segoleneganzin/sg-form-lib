module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './jsconfig.json',
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    // Syntax
    indent: ['warn', 'tab', { SwitchCase: 1 }],
    semi: ['warn', 'always'],
    quotes: ['warn', 'single'],
    'linebreak-style': ['warn', 'unix'],
    'array-bracket-spacing': ['warn', 'always'],
    'computed-property-spacing': ['warn', 'always'],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'arrow-spacing': 'warn',
    'key-spacing': [
      'warn',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'no-multi-spaces': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-empty-function': 'warn',
    'require-await': 'error',
    'template-curly-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs'],
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      { enforceForRenamedProperties: false },
    ],
    'one-var-declaration-per-line': ['error', 'always'],
    'one-var': ['error', 'never'],
    'rest-spread-spacing': ['warn', 'never'],
    'no-param-reassign': 'error',
    'no-constant-binary-expression': 'error',
    'no-new-native-nonconstructor': 'error',
    // Objects
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': 'warn',
    'object-curly-newline': [
      'warn',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2,
        },
        ObjectPattern: { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
    'prefer-object-has-own': 'warn',
    'prefer-object-spread': 'warn',
    'object-shorthand': 'warn',
    // Functions
    'func-names': ['warn', 'as-needed'],
    'no-func-assign': 'error',
    // Conditions
    'default-case': 'warn',
    'default-case-last': 'warn',
    'no-duplicate-case': 'warn',
    'no-constant-condition': 'warn',
    'no-self-compare': 'error',
    // Loops
    'for-direction': 'warn',
    'no-unmodified-loop-condition': 'error',
    // Variables and constants
    'no-var': 'error',
    'no-unused-vars': 'warn',
    'no-const-assign': 'error',
    'no-multi-assign': 'warn',
    'no-self-assign': ['warn', { props: true }],
    'no-magic-numbers': [
      'warn',
      {
        detectObjects: false,
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreClassFieldInitialValues: true,
      },
    ],
    'no-use-before-define': 'warn',
    // Classes and constructors
    'no-class-assign': 'error',
    'new-cap': [
      'warn',
      {
        capIsNew: false,
        newIsCap: true,
      },
    ],
    'no-constructor-return': 'error',
    'no-unused-private-class-members': 'warn',
    // Async and promises
    'no-promise-executor-return': 'error',
    // Text
    'valid-typeof': 'error',
    'no-template-curly-in-string': 'error',
    // React
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    'react/jsx-uses-vars': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-curly-newline': [
      'warn',
      {
        multiline: 'consistent',
        singleline: 'forbid',
      },
    ],
    'react/jsx-curly-spacing': [
      'warn',
      {
        when: 'always',
        children: true,
      },
    ],
    'react/button-has-type': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/hook-use-state': 'warn',
    'react/jsx-fragments': 'warn',
    'react/jsx-handler-names': [
      'warn',
      {
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    'react/jsx-pascal-case': 'warn',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-indent': [
      'warn',
      'tab',
      {
        indentLogicalExpressions: true,
        checkAttributes: true,
      },
    ],
    'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }],
    'react/jsx-wrap-multilines': 'warn',
    'react/no-array-index-key': 'error',
    'react/no-danger': 'error',
    'react/no-deprecated': 'error',
    'react/no-multi-comp': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-state': 'warn',
    // React props
    'react/no-children-prop': 'error',
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-sort-props': [
      'warn',
      {
        shorthandLast: true,
        callbacksLast: true,
        reservedFirst: ['key'],
      },
    ],
    'react/jsx-indent-props': [
      'warn',
      {
        indentMode: 'tab',
        ignoreTernaryOperator: true,
      },
    ],
    'react/jsx-no-duplicate-props': 'error',
    'react/prop-types': 'error',
    'react/no-unused-prop-types': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/boolean-prop-naming': ['error', { validateNested: true }],
    'react/jsx-max-props-per-line': ['warn', { maximum: 1 }],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-props-no-spreading': [
      'warn',
      {
        html: 'enforce',
        custom: 'ignore',
        explicitSpread: 'enforce',
      },
    ],
    'react/require-default-props': 'warn',
    // React classes
    'react/prefer-es6-class': 'error',
    'react/state-in-constructor': ['warn', 'always'],
    'react/no-access-state-in-setstate': 'warn',
    'react/no-arrow-function-lifecycle': 'warn',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-unused-class-component-methods': 'warn',
    // JSX
    'jsx-quotes': ['warn', 'prefer-double'],
    'jsx-a11y/no-static-element-interactions': 'error',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    // Imports
    'no-duplicate-imports': 'error',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'unknown',
        ],

        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx'],
        map: [
          ['@assets', './src/assets'],
          ['@hooks', './src/hooks'],
          ['@components', './src/components'],
          ['@contexts', './src/contexts'],
          ['@utils', './src/utils'],
          ['public', './public'],
        ],
      },
    },
  },
};
