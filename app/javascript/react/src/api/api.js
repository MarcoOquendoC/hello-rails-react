const baseURL = 'http://localhost:3000';
const randomMessageURL = `${baseURL}/message`;

const api = {
  fetchRandomGreeeting: async () => {
    const response = await fetch(randomMessageURL);
    const { message } = await response.json();

    return message;
  },
};
export default api;
