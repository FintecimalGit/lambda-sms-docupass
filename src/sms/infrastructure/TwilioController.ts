import { Twilio } from 'twilio'
import { ISmsParams } from '../domain/ISmsParams'
import { IProviderSMS } from '../domain/IProviderSMS'

export class TwilioController implements IProviderSMS  {
  private readonly twilioClient: Twilio
  constructor() {
    this.twilioClient = new Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    )
  }

  async sendMessage (params: ISmsParams) {
    try {
      await this.twilioClient.messages.create({
        to: params.to,
        body: params.body,
        from: process.env.TWILIO_PHONE_NUMBER
      })
      return {
        statusCode: 200,
        body: {
          message: params.body
        }
      }
    } catch (error) {
      console.error(error.message)
      return Promise.reject({
        statusCode: 400,
        message: error.message
      })
    }
  }
}
