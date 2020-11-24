import axiosClient from './axiosClient';

const studentApi = {
  getAll(params) {
    const url = '/students';
    return axiosClient.get(url, { params });
  },
};

export default studentApi;
