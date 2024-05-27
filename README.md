# project in progress

🚀 Documentation coming soon

Penser à mettre le CSS dans l'index.jsx (ou main.jsx) ->
`import 'sg-form-lib/style.css';`
Au dessus de celui de notre projet

`npm i sg-form-lib`

Possibilité de rajouter des champs dans config/fieldConfig.jsx <br>
Champs déjà prédéfinis : name(input), password (input type password), gender (radio), country(select), ... <br>
Classes CSS : ... <br>
Exemple : ... <br>
Pour l'update, attentio le champs des données doit avoir le même nom que le fieldName <br>
Form a une largeur de 100%, penser à le mettre dans un container <br>
Seuls champs obligatoires => onSubmitFunction, btnText, fieldNames

Copiez le fichier de configuration par défaut dans votre projet :

```bash
cp node_modules/sg-form-lib/default-config.jsx src/formFieldConfig.jsx
```
