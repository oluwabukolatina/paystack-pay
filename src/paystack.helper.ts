import { Axios } from 'axios/index';
import { InitializeTransactionInterface } from './paystack.interface';
import HttpHelper from './http-helper';
import PaystackResponse from './paystack.response';
import CustomError from './custom.error';

const PaystackHelper = {
  createRandomStringAndNumber() {
    return Math.random().toString(36).substring(2, 10);
  },
  async initiateTransaction(
    client: Axios,
    body: InitializeTransactionInterface,
  ) {
    return HttpHelper.initializeTransaction(client, body)
      .then((result) =>
        PaystackResponse.checkResponse(result, 'initiate transaction'),
      )
      .catch((err) => {
        throw new CustomError(err.response.status, err.response.data.message);
      });
  },
};
export default PaystackHelper;
