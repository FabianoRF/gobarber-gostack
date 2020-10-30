import IEmailProvider from '../models/IMailProvider';
import ISentMailDTO from '../dtos/ISendMailDTO';

export default class FakeEmailProvider implements IEmailProvider {
  private messages: ISentMailDTO[] = [];

  public async sendMail(message: ISentMailDTO): Promise<void> {
    this.messages.push(message);
  }
}
