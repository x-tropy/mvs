const fs = require('fs');
const path = require('path');

/**
 * Converts a file name to PascalCase.
 * @param {string} fileName - The file name (e.g., 'cat.svg').
 * @returns {string} PascalCase name (e.g., 'IconCat').
 */
function toPascalCase(fileName) {
  return (
    'Icon' +
    fileName
      .replace('.svg', '')
      .split(/[-_]/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('')
  );
}

/**
 * Recursively read files and organize them by category.
 * @param {string} dir - The directory path.
 * @param {string} baseDir - The base directory to include relative paths.
 * @returns {Array} Organized output structure.
 */
function getFileListByCategory(dir, baseDir = dir) {
  const categories = {};

  // Read the contents of the directory
  fs.readdirSync(dir, {withFileTypes: true}).forEach((entry) => {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Process subdirectory
      const subCategoryFiles = getFileListByCategory(entryPath, baseDir);

      // Merge subcategory files into the categories object
      Object.entries(subCategoryFiles).forEach(([subCategory, files]) => {
        if (!categories[subCategory]) categories[subCategory] = [];
        categories[subCategory] = categories[subCategory].concat(files);
      });
    } else if (entry.isFile() && entry.name.endsWith('.svg')) {
      // Determine category from the relative path
      const relativePath = path.relative(baseDir, entryPath);
      const parts = relativePath.split(path.sep);
      const category = parts[0]; // Top-level folder name as category

      if (!categories[category]) {
        categories[category] = [];
      }

      // Add the PascalCase file name to the category
      categories[category].push(toPascalCase(entry.name));
    }
  });

  return categories;
}


// Use the function
const baseDir = path.join(__dirname, '../../../node_modules/@tabler/icons/categories/outline');
const categorizedFiles = getFileListByCategory(baseDir);

// Convert the categories object into the desired array format
const result = Object.entries(categorizedFiles).map(([key, value]) => ({[key]: value}));

function writeToJsonFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`File written successfully to ${filePath}`);
}

writeToJsonFile('./icon-list.json', result)

// Example output:
// [
//   { Animals: ['IconCat', 'IconDog'] },
//   { Arrows: ['IconArrowRight'] }
// ]
