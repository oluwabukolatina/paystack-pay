import { Axios } from 'axios';
import { InitializeTransactionInterface } from './paystack.interface';

const Http = {
  async initializeTransaction(
    httpClient: Axios,
    data: InitializeTransactionInterface,
  ) {
    return httpClient.post('/transaction/initialize', data);
  },
};
export default Http;
