const axios = require('axios');

// Base URL of the API
const baseURL = 'http://localhost:3000/items';

// Data for testing
const testItem = {
  name: 'Test Item',
  description: 'This is a test item.'
};

// Function to create an item
async function createItem() {
  try {
    const response = await axios.post(baseURL, testItem);
    console.log('Create Item Response:', response.data);
    return response.data._id;
  } catch (error) {
    console.error('Error creating item:', error.response ? error.response.data : error.message);
  }
}

// Function to read all items
async function readAllItems() {
  try {
    const response = await axios.get(baseURL);
    console.log('Read All Items Response:', response.data);
  } catch (error) {
    console.error('Error reading all items:', error.response ? error.response.data : error.message);
  }
}

// Function to read a specific item by ID
async function readItemById(id) {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    console.log('Read Item by ID Response:', response.data);
  } catch (error) {
    console.error('Error reading item by ID:', error.response ? error.response.data : error.message);
  }
}

// Function to update an item
async function updateItem(id) {
  const updatedData = {
    name: 'Updated Item',
    description: 'This is an updated item description.'
  };

  try {
    const response = await axios.put(`${baseURL}/${id}`, updatedData);
    console.log('Update Item Response:', response.data);
  } catch (error) {
    console.error('Error updating item:', error.response ? error.response.data : error.message);
  }
}

// Function to delete an item
async function deleteItem(id) {
  try {
    const response = await axios.delete(`${baseURL}/${id}`);
    console.log('Delete Item Response:', response.data);
  } catch (error) {
    console.error('Error deleting item:', error.response ? error.response.data : error.message);
  }
}

// Run the tests
(async () => {
  const createdItemId = await createItem();
  if (createdItemId) {
    await readAllItems();
    await readItemById(createdItemId);
    await updateItem(createdItemId);
    await deleteItem(createdItemId);
  }
})();
