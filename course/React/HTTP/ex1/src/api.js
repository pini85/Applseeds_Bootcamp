import axios from "axios";
const baseUrl = "https://5e046e16a7ad3700141a23cf.mockapi.io";
export const getProduct = id => {
  return axios.get(`${baseUrl}/products/${id}`);
};

export const createProduct = product => {
  return axios.post(`${baseUrl}/products`, product);
};

export const allProducts = () => {
  return axios.get(`${baseUrl}/products/`);
};

export const removeProduct = id => {
  return axios.delete(`${baseUrl}/products/${id}`);
};

export const addProduct = async newItem => {
  await axios
    .post(`${baseUrl}/products/`, newItem)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  // try {
  //   const response = await axios.post(`${baseUrl}/products/`, {
  //     id: id,
  //     name: name,
  //     avatar: avatar
  //   });
  //   // const response = await axios.post(`${baseUrl}/products/${item}`, {
  //   //   posted_data: item
  //   // });
  //   console.log("👉 Returned data:", response);
  // } catch (e) {
  //   console.log(`😱 Axios request failed: ${e}`);
  // }
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
