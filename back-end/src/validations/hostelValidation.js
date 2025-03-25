import Joi from 'joi';
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'


const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({ // biến tên điều kiện đúng
    hostelName: Joi.string().required().min(3).max(50).trim().strict().messages({
      'any.required': 'Name is required ',
      'string.empty': 'Name is not allowed to be empty',
      'string.min': 'Name length must be at least 3 characters long',
      'string.max': 'Name length must be less than or equal to 5 characters long',
      'string.trim': 'Name must not have leading or trailing whitespace'
    }),
    address: Joi.string().required().min(3).max(50).trim().strict(),
    phone: Joi.string().required().pattern(/^[0-9]{9,10}$/).min(9).max(10).trim().strict(),
  })
  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    next()

  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))// console.log(error)
  }

}

export const hostelValidation = {
  createNew
}