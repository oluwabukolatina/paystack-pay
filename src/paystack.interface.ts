type CustomInterface = Record<string, number>;

export interface ChargeTransactionAuthorizationInterface {
  authorization_code: string;
  email: string;
  amount: number; // this is kobo
  metadata: CustomInterface;
}

export interface InitializeTransactionInterface {
  amount: number;
  email: string;
  callback_url: string;
  metadata?: CustomInterface;
  reference: string;
  // ["card", "bank", "ussd", "qr", "mobile_money", "bank_transfer", "eft"]
  channels?: Array<string>;
}
