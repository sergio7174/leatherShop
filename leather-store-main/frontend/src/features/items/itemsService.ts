import axios from 'axios';
import { IItem } from '../../types/data';
import { BASE_URL } from '../../utils/consts';

 const API_URL = 'http://localhost:5000/items/';
//const API_URL = BASE_URL + 'items/';

const addItem = async (itemData: FormData, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  
  alert ("Estoy en itemsSErvice - line 15 - addItem");
  const res = await axios.post(API_URL, itemData, config);
  alert ("Estoy en itemsSErvice - line 17 - addItem - res: "+ res);
  return res.data;
};

const getAllItems = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

const getItemBySlug = async (slug: string) => {
  const res = await axios.get(API_URL + slug);
  return res.data;
};

const deleteItem = async (itemId: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.delete(API_URL + itemId, config);
  return res.data;
};
const updateItem = async (
  itemId: string,
  updatedItem: Partial<IItem>,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.patch(API_URL + itemId, updatedItem, config);
  return res.data;
};

const itemsService = {
  addItem,
  getAllItems,
  getItemBySlug,
  deleteItem,
  updateItem,
};

export default itemsService;
