import { SMSController } from "./sms/infrastructure/SMSController"
import { TwilioController } from "./sms/infrastructure/TwilioController"

export const handler = async (event) => {
  let response = {}
  try {
    const smsClient = new SMSController(new TwilioController(), event)
    const success = await smsClient.execSMS()
    response = {
      statusCode: 200,
      body: success
    }
  } catch (error) {
    response = {
      statusCode: 400,
      body: error
    }
  }
  return response
}
