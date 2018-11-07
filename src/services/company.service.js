import createRestApiClient from '../utils/createRestApiClient';

const apiEndpoint = "http://5bdea7dd7ad6890013e9c2b5.mockapi.io/api/v1"

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    getCompany: () => client.request({
      method: 'GET',
      url: '/companies/'
    }),
    createCompany: ({ name, address, revenue, phone }) => client.request({
      method: 'POST',
      url: `/companies/`,
      data: {
        name,
        address,
        revenue,
        phone
      }
    }),
    deleteCompany: (id) => client.request({
      method: 'DELETE',
      url: `/companies/${id}`
    })
  };
};
