import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Chemins des fichiers de traduction
const localesPath = join(__dirname, 'public', 'locales');
const referenceLang = 'en';
const targetLangs = ['fr', 'es', 'ja'];

// Fonction pour lire un fichier JSON
function readJsonFile(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

// Fonction pour écrire un fichier JSON avec une indentation propre
function writeJsonFile(filePath, data) {
  try {
    const content = JSON.stringify(data, null, 2);
    writeFileSync(filePath, content + '\n', 'utf8');
    console.log(`Updated: ${filePath}`);
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error);
  }
}

// Fonction récursive pour ajouter les clés manquantes
function syncKeys(reference, target) {
  if (typeof reference !== 'object' || reference === null) {
    return target || reference;
  }

  const result = Array.isArray(reference) ? [] : {};
  
  // Copier toutes les clés existantes du target
  if (target) {
    Object.keys(target).forEach(key => {
      result[key] = target[key];
    });
  }

  // Ajouter les clés manquantes
  Object.keys(reference).forEach(key => {
    if (!(key in result)) {
      // Pour les nouvelles clés, on met une chaîne vide
      if (typeof reference[key] === 'object' && reference[key] !== null) {
        // Si c'est un objet, on crée une structure vide similaire
        result[key] = Array.isArray(reference[key]) ? [] : {};
      } else {
        // Sinon, on met une chaîne vide
        result[key] = '';
      }
    } else if (typeof reference[key] === 'object' && reference[key] !== null) {
      // Si c'est un objet, on descend récursivement
      result[key] = syncKeys(reference[key], result[key]);
    }
  });

  return result;
}

// Fonction principale
function syncTranslations() {
  try {
    // Lire le fichier de référence (anglais)
    const referencePath = join(localesPath, referenceLang, 'common.json');
    const referenceData = readJsonFile(referencePath);
    
    if (!referenceData) {
      console.error('Failed to load reference translation file');
      return;
    }

    // Pour chaque langue cible
    targetLangs.forEach(lang => {
      const targetPath = join(localesPath, lang, 'common.json');
      
      // Vérifier si le fichier existe
      if (!existsSync(targetPath)) {
        console.warn(`File not found: ${targetPath}`);
        return;
      }

      // Lire le fichier cible
      const targetData = readJsonFile(targetPath);
      if (!targetData) {
        console.error(`Failed to load target translation file: ${targetPath}`);
        return;
      }

      // Synchroniser les clés
      const syncedData = syncKeys(referenceData, targetData);
      
      // Écrire le fichier mis à jour
      writeJsonFile(targetPath, syncedData);
    });

    console.log('Translation sync completed!');
  } catch (error) {
    console.error('Error during translation sync:', error);
  }
}

// Exécuter la synchronisation
syncTranslations();
