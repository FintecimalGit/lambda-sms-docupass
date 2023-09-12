import Joi from "joi"
import { ISmsParams } from "../../sms/domain/ISmsParams"

export const validationParams = (params: ISmsParams) => {
  const errorsMessage = []
  const schemaRules = Joi.object({
    to: Joi.string()
    .required()
    .pattern(/^[+][0-9]{12}$/)
    .message('Please enter a valid phone number'),
    body: Joi.string().required()
  })

  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true // remove unknown props
  }
  const { error } = schemaRules.validate(params, options)
  if (error) {
    error.details.forEach(element => {
      errorsMessage.push(element.message)
    });
  } 
  return errorsMessage
}
