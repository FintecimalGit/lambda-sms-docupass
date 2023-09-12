import { SMSController } from "../sms/infrastructure/SMSController"
import { TwilioController } from '../sms/infrastructure/TwilioController'
import * as SMSParams from '../mock/smsParams.json'

jest.mock('../sms/infrastructure/TwilioController')

describe('Send SMS module Test Suite', () => {
  test('should be return status 400 if "to" phone number is invalid', () => {
    const twilioProvider = new TwilioController()
    const SMSProvider = new SMSController(twilioProvider, SMSParams)
    SMSProvider.execSMS().catch(error => {
      expect(error.statusCode).toEqual(400)
    })
  })

  test('should message success send', () => {
    const twilioProvider = new TwilioController()
    const SMSProvider = new SMSController(twilioProvider, SMSParams)
    const sendSMS = SMSProvider.execSMS()
    expect(sendSMS).resolves.not.toThrowError()
  })
})
