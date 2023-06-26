import axios from "axios";
const apiUrl = "http://localhost:3001/words";

export const getWords = async () => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const deleteWord = async (id) => {
  await axios.delete(`${apiUrl}/${id}`);
};

export const updateWord = async ({ id, title, example, definition, type }) => {
  const response = await axios.put(`${apiUrl}/${id}`, {
    title,
    example,
    definition,
    type,
  });
  return response.data;
};

export const createWord = async ({ title, example, definition, type }) => {
  const response = await axios.post(apiUrl, {
    title,
    example,
    definition,
    type,
  });
  return response.data;
};
