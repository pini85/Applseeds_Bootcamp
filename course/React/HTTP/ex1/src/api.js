import axios from "axios";
const baseUrl = "https://5dd14f8d15bbc2001448d07d.mockapi.io";
export const getProduct = id => {
  return axios.get(`${baseUrl}/products/${id}`);
};

export const createProduct = product => {
  return axios.post(`${baseUrl}/products`, product);
};

export const allProducts = () => {
  return axios.get(`${baseUrl}/products/`);
};

// export default axios.create({
//     baseURL: 'https://api.unsplash.com',
//     headers: {
//         Authorization:
//         'Client-ID 11da06adedf2a38bf41b93a283823d79160a55c23de0113e0b9dd2199b30cdf7',
//     }
// })

// const baseUrl = 'https://5dd14f8d15bbc2001448d07d.mockapi.io';

// export function getUser(userId) {

// return axios.get(`${baseUrl}/user/${userId}`);

// }

// export function createUser(user) {

// return axios.post(`${baseUrl}/user`, user);
