import CustomError from './custom.error';

const PaystackResponse = {
  checkResponse(result: any, errorMessage: string) {
    if (result && result.data && result.data.status) {
      return result.data.data;
    }
    throw new CustomError(400, `unable to ${errorMessage}`);
  },
};
export default PaystackResponse;
