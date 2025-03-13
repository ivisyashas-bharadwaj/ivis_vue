const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');

const API_KEY = 'sk-aaeebc1386854ee4bedf8dd6965e05b2'; // Replace with your actual API key
const FILE_PATH = 'company_details.pdf'; // Replace with your PDF file path

async function uploadFile() {
  try {
    const form = new FormData();
    form.append('file', fs.createReadStream(FILE_PATH));

    const response = await fetch('https://chat.ivislabs.in/api/v1/files/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: form
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('File uploaded successfully!');
    console.log('File ID:', data.id); // Save this ID for use in your chat component
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

uploadFile();