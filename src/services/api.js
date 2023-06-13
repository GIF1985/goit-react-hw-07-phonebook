import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6486d5cebeba6297278f42ad.mockapi.io/contacts',
});

export const fetchContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async options => {
  const { data } = await instance.post('/', options);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
