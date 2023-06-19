import axios, { Axios } from 'axios';
import Transaction from './transaction';

const baseUrl = 'https://api.paystack.co/';
export class Paystack {
  private readonly secretKey: string;

  private readonly paystackClient: Axios;

  public transaction: Transaction;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
    this.paystackClient = axios.create({
      baseURL: `${baseUrl}`,
      headers: {
        Authorization: `Bearer ${this.secretKey}`,
      },
    });
    this.transaction = new Transaction(this.paystackClient);
  }
}
