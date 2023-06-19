import { Axios } from 'axios';
import * as type from './paystack.interface';
import * as url from './paystack.url';
import PaystackResponse from './paystack.response';
import CustomError from './custom.error';

class Transaction {
  private readonly paystackClient: Axios;

  constructor(paystackClient: Axios) {
    this.paystackClient = paystackClient;
  }

  async chargeTransactionAuthorization(
    data: type.ChargeTransactionAuthorizationInterface,
  ) {
    return this.paystackClient
      .post(url.PAYSTACK_CHARGE_AUTHORIZATION_URL, data)
      .then((result) =>
        PaystackResponse.checkResponse(result, 'charge authorization'),
      )
      .catch((err) => {
        throw new CustomError(err.response.status, err.response.data.message);
      });
  }

  async initiateTransaction(data: type.InitializeTransactionInterface) {
    return this.paystackClient
      .post(url.PAYSTACK_INITIALIZE_TRANSACTION_URL, data)
      .then((result) =>
        PaystackResponse.checkResponse(result, 'initiate transaction'),
      )
      .catch((err) => {
        throw new CustomError(err.response.status, err.response.data.message);
      });
  }

  async verifyTransaction(reference: string) {
    return this.paystackClient
      .get(`${url.PAYSTACK_VERIFY_TRANSACTION_URL}/${reference}`)
      .then((result) =>
        PaystackResponse.checkResponse(result, 'verify transaction'),
      )
      .catch((err) => {
        throw new CustomError(err.response.status, err.response.data.message);
      });
  }
}
export default Transaction;
