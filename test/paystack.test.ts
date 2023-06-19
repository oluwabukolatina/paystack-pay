import PaystackHelper from '../src/paystack.helper';
import { Paystack } from '../src';

const paystack = new Paystack(
  'sk_test_6c29ef44f4993460de1842c55dba8e05ff6bd06f',
);
describe('', () => {
  it('Test charge authorization', async () => {
    const result = await paystack.transaction.chargeTransactionAuthorization({
      authorization_code: 'AUTH_d4ioucuain',
      email: 'titans@awabahng.com',
      amount: 30000,
      metadata: { userId: 1 },
    });
    expect(result).toHaveProperty('amount');
    expect(result).toHaveProperty('reference');
    expect(result).toHaveProperty('gateway_response');
    expect(result).toHaveProperty('authorization');
    expect(result).toHaveProperty('customer');
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('fees');
    expect(result).toHaveProperty('channel');
  });
  it('Test initiateTransaction', async () => {
    const result = await paystack.transaction.initiateTransaction({
      amount: 900,
      email: 'elon@musk.com',
      callback_url: 'api.google.com',
      metadata: { userId: 1 },
      reference: PaystackHelper.createRandomStringAndNumber(),
      channels: ['card'],
    });
    expect(result).toHaveProperty('authorization_url');
    expect(result).toHaveProperty('access_code');
    expect(result).toHaveProperty('reference');
  });
  it('Test verifyTransaction', async () => {
    const result = await paystack.transaction.verifyTransaction(
      '4cddba2b48932db',
    );
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('status');
    expect(result).toHaveProperty('reference');
    expect(result).toHaveProperty('amount');
    expect(result).toHaveProperty('currency');
    expect(result).toHaveProperty('channel');
    expect(result).toHaveProperty('metadata');
    expect(result).toHaveProperty('log');
    expect(result).toHaveProperty('fees');
    expect(result).toHaveProperty('authorization');
    expect(result).toHaveProperty('customer');
    expect(result).toHaveProperty('reference');
  });
});
