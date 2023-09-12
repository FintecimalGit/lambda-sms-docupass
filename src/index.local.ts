import dotenv from 'dotenv'
dotenv.config()
import { TwilioController } from "./sms/infrastructure/TwilioController";
import { SMSController } from './sms/infrastructure/SMSController'
import * as SMSParams from './mock/smsParams.json'

const twilioClient = new TwilioController()
const smsClient = new SMSController(twilioClient, SMSParams)
smsClient.execSMS().then(response => console.log(response))
.catch(console.error)
