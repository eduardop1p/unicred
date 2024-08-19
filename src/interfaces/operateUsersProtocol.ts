import AccountProtocol from './accountProtocol';

export default interface OperateUsersProtocol
  extends Omit<AccountProtocol, 'flag'> {
  socketId: string;
}
