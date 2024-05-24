import fs from 'fs';
import path from 'path';

// Recherche du chemin du projet externe
const projectDir = path.resolve(__dirname, '/');
const sourcePath = path.resolve(__dirname, '../config/fieldConfig.js');
const destinationPath = path.resolve(projectDir, 'fieldConfig.js');

fs.copyFile(sourcePath, destinationPath, (err) => {
  if (err) {
    console.error(
      "Une erreur s'est produite lors de la copie du fichier fieldConfig :",
      err
    );
  } else {
    console.log(
      'Le fichier fieldConfig a été copié avec succès dans le projet externe.'
    );
  }
});
