import axios from 'axios';
const API_URL = 'http://localhost:8081/api/create-gas-price';
// Function to make the POST request
export async function callApi() {
  try {
    const response = await axios.post(API_URL, { });
    console.log('API call successful:', response.data);
  } catch (error) {
    console.error('Error calling API:', error);
  }
}
