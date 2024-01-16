import { Axios } from 'axios';
import * as type from './paystack.interface';
import * as url from './paystack.url';

class Transaction {
  private readonly paystackClient: Axios;

  constructor(paystackClient: Axios) {
    this.paystackClient = paystackClient;
  }

  async chargeAuthorization(
    data: type.ChargeTransactionAuthorizationInterface,
  ) {
    try {
      return await this.paystackClient.post(
        url.PAYSTACK_CHARGE_AUTHORIZATION_URL,
        data,
      );
    } catch (e) {
      return e;
    }
  }

  async initialize(data: type.InitializeTransactionInterface) {
    try {
      return await this.paystackClient.post(
        url.PAYSTACK_INITIALIZE_TRANSACTION_URL,
        data,
      );
    } catch (e) {
      return e;
    }
  }

  async verify(reference: string) {
    try {
      return await this.paystackClient.get(
        `${url.PAYSTACK_VERIFY_TRANSACTION_URL}/${reference}`,
      );
    } catch (e) {
      return e;
    }
  }
}
export default Transaction;
