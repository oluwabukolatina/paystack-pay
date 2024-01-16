import { Paystack } from '../src';

const paystack = new Paystack(
  'sk_test_9389ce5dde4c1070887056a185d1a75f007207dc',
);
const createRandomStringAndNumber = () =>
  Math.random().toString(36).substring(2, 10);

describe('transaction', () => {
  it('Test charge authorization', async () => {
    const reference = `MPY-${createRandomStringAndNumber()}`;
    const result = await paystack.transaction.chargeAuthorization({
      email: '+234230m124@awabahng.com',
      authorization_code: 'AUTH_svpgkajcec',
      amount: 30000,
      metadata: { userId: 1 },
      reference,
    });
    expect(result).toHaveProperty('status', 200);
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('status', true);
    expect(result.data).toHaveProperty('message');
    expect(result.data).toHaveProperty('data');
    expect(result.data.data).toHaveProperty('amount');
    expect(result.data.data).toHaveProperty('currency');
    expect(result.data.data).toHaveProperty('transaction_date');
    expect(result.data.data).toHaveProperty('status', 'success');
    expect(result.data.data).toHaveProperty('reference');
    expect(result.data.data).toHaveProperty('domain');
    expect(result.data.data).toHaveProperty('metadata');
    expect(result.data.data).toHaveProperty('fees');
    expect(result.data.data).toHaveProperty('authorization');

    expect(result.data.data.authorization).toHaveProperty('authorization_code');
    expect(result.data.data.authorization).toHaveProperty('bin');
    expect(result.data.data.authorization).toHaveProperty('last4');
    expect(result.data.data.authorization).toHaveProperty('exp_month');
    expect(result.data.data.authorization).toHaveProperty('exp_year');

    expect(result.data.data.authorization).toHaveProperty('channel');

    expect(result.data.data.authorization).toHaveProperty('card_type');
    expect(result.data.data.authorization).toHaveProperty('country_code');
    expect(result.data.data.authorization).toHaveProperty('bank');
    expect(result.data.data.authorization).toHaveProperty('brand');
    expect(result.data.data.authorization).toHaveProperty('reusable');
    expect(result.data.data.authorization).toHaveProperty('signature');
    expect(result.data.data).toHaveProperty('customer');
    expect(result.data.data.customer).toHaveProperty('email');
    expect(result.data.data.customer).toHaveProperty('customer_code');
    expect(result.data.data.customer).toHaveProperty('email');
    expect(result.data.data.customer).toHaveProperty('email');
  });
  it('Test initiateTransaction', async () => {
    const result = await paystack.transaction.initialize({
      amount: 900,
      email: 'elon@musk.com',
      callback_url: 'api.google.com',
      metadata: { userId: 1 },
      reference: createRandomStringAndNumber(),
      channels: ['card'],
    });
    expect(result).toHaveProperty('status', 200);
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('data');
    expect(result.data).toHaveProperty('status', true);
    expect(result.data).toHaveProperty('message');
    expect(result.data.data).toHaveProperty('authorization_url');
    expect(result.data.data).toHaveProperty('access_code');
    expect(result.data.data).toHaveProperty('reference');
  });
  it('Test verify', async () => {
    const result = await paystack.transaction.verify('PENPAY-a0i0dibw6whw0h7');
    expect(result).toHaveProperty('status', 200);
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('status', true);
    expect(result.data).toHaveProperty('message');
    expect(result.data).toHaveProperty('data');
    expect(result.data.data).toHaveProperty('id');
    expect(result.data.data).toHaveProperty('status');
    expect(result.data.data).toHaveProperty('reference');
    expect(result.data.data).toHaveProperty('amount');
    expect(result.data.data).toHaveProperty('currency');
    expect(result.data.data).toHaveProperty('channel');
    expect(result.data.data).toHaveProperty('metadata');
    expect(result.data.data).toHaveProperty('log');
    expect(result.data.data).toHaveProperty('fees');
    expect(result.data.data).toHaveProperty('authorization');
    expect(result.data.data).toHaveProperty('customer');
    expect(result.data.data).toHaveProperty('reference');
  });
});
