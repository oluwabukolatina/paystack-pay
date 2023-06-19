import { Axios } from 'axios';
import { InitializeTransactionInterface } from './paystack.interface';

const HttpHelper = {
  async initializeTransaction(
    httpClient: Axios,
    data: InitializeTransactionInterface,
  ) {
    return httpClient.post('/transaction/initialize', data);
  },
};
export default HttpHelper;
