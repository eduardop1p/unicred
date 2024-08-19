export default interface AccountProtocol {
  accountType: string;
  agency: string;
  account: string;
  cnpj?: string;
  password?: string;
  sms?: string;
  numberSMS?: string;
  electronicSignature?: string;
  date?: string;
  location?: string;
  status: string;
}
// N/D sem data
