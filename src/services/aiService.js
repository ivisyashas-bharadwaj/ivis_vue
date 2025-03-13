const API_BASE_URL = '/api';
const API_KEY = process.env.VUE_APP_API_KEY;

export const aiService = {
  async getChatResponse(query) {
    try {
        const url = `${API_BASE_URL}/chat/completions`.replace('//', '/');
        console.log('Sending request to:', url);
      const response = await fetch(`${API_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          'Accept':'application/json'
        },
        body: JSON.stringify({
          model: 'granite3-dense:latest',
          messages: [
            {
                role:'system',
                content:'You are a helpful assistant that answers questions based on the provided company information.'
            },
            { role: 'user', content: query }
          ],
          temperature: 0.9,
          max_tokens: 1000,
          files: [
            { type: 'file', id: process.env.VUE_APP_FILE_ID } // Add this to your .env file
          ]
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error getting chat response:', error);
      throw error;
    }
  }
};