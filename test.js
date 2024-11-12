const fs = require('fs');
const Papa = require('papaparse');

function loadCSV(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(`Error reading file: ${filePath} - ${err}`);
        return;
      }
      const parsedData = Papa.parse(data, { header: true });
      resolve(parsedData.data);
    });
  });
}

function transformDataToJSON(data) {
  return data.map(row => ({
    name: row.name || '',
    description: row.description || '',
    category: row.category || '',
    license: row.license || '',
    usability: parseInt(row.usability) || 0,
    features: row.features ? row.features.split(',').map(feature => feature.trim()) : [],
    tags: row.tags ? row.tags.split(',').map(tag => tag.trim()) : [],
    language: row.language ? row.language.split(',').map(tag => tag.trim()) : [],
    link: row.link || '',
    icon: row.icon || ''
  }));
}

async function loadAndTransformCSV(filePath, outputJsonPath) {
  try {
    const csvData = await loadCSV(filePath);
    const jsonData = transformDataToJSON(csvData);
    fs.writeFileSync(outputJsonPath, JSON.stringify(jsonData, null, 2), 'utf8');
    console.log(`JSON data has been saved to ${outputJsonPath}`);
  } catch (error) {
    console.error(`Error processing file: ${filePath} - ${error}`);
  }
}

loadAndTransformCSV('./data/tools_data.csv', './data/tools_data.json');
