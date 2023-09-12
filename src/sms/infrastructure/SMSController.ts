import { validationParams } from "../../shared/errors/validationParams";
import { SendSMSUseCase } from "../aplication/SendSMSUseCase";
import { ValidPhoneNumber } from "../aplication/ValidPhoneNumber";
import { IProviderSMS } from "../domain/IProviderSMS";
import { ISmsParams } from "../domain/ISmsParams";

export class SMSController {
  private readonly smsProvider: IProviderSMS
  private readonly smsParams: ISmsParams
  constructor(SMSProvider: IProviderSMS, smsParams: ISmsParams){
    this.smsProvider = SMSProvider
    this.smsParams = smsParams
  }

  async execSMS() {
    try {
      const errorsMessage = validationParams(this.smsParams)
      if (errorsMessage.length) return {
        statusCode: 400,
        body: errorsMessage
      }
      
      const SMSClient = new SendSMSUseCase(this.smsProvider)
      return await SMSClient.sendSMS(this.smsParams)
    } catch (error) {
      console.error(error)
      return Promise.reject(error)
    }
  }
}
