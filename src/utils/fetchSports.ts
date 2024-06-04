import axios from "axios";

export const fetchSports = async () => {
  try {
    const fetchURL = await axios.get('https://apimocha.com/playgreen/sports');
    return fetchURL;
  } catch (error) {
    throw new Error(`Sorry, there was an error: ${error}`);
  }
}