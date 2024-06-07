import axios from "axios";

export const fetchSports = async () => {
  try {
    const fetchURL = await axios.get('https://dff6kz4nmb.execute-api.us-east-1.amazonaws.com/development/test-front');
    return fetchURL;
  } catch (error) {
    throw new Error(`Sorry, there was an error: ${error}`);
  }
}