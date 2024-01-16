type CustomInterface = Record<string, number>;

export interface ChargeTransactionAuthorizationInterface {
  authorization_code: string;
  email: string;
  amount: number; // this is kobo
  metadata: CustomInterface;
  reference?: string;
}

export interface InitializeTransactionInterface {
  channels?: Array<string>; // ["card", "bank", "ussd", "qr", "mobile_money", "bank_transfer", "eft"]
  amount: number; // in kobo
  email: string;
  callback_url: string;
  metadata?: CustomInterface;
  reference: string;
}
