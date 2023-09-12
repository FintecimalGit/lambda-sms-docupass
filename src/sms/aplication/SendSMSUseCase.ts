import { ISmsParams } from "../domain/ISmsParams";

export class SendSMSUseCase {
  constructor(private readonly senderProvider){}

  async sendSMS (params: ISmsParams): Promise<any> {
    try {
      return await this.senderProvider.sendMessage(params)
    } catch (error) {
      console.error(error)
      return error.message
    }
  }
}
