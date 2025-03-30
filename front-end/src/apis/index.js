import axios from 'axios'
import { API_ROOT } from '~/utils/constants'
import { toast } from 'react-toastify'
import authorizeAxiosInstance from '~/utils/authorizeAxios'
// export const fetchHostelDetailsAPI = async (hostelId) => {
//   const response = await axios.get(`${API_ROOT}/v1/hostel/${hostelId}`)
//   console.log('response:', response.data)
//   return response.data
// }


// User
export const registerUserAPI = async (data) => {
  const respone = await authorizeAxiosInstance.post(`${API_ROOT}/v1/users/register`, data)
  toast.success('Account created successfully! Please check and verify your account before logging in!',
    { theme: 'colored' }
  )
  return respone.data
}
export const verifyUserAPI = async (data) => {
  const response = await authorizeAxiosInstance.put(`${API_ROOT}/v1/users/verify`, data)
  toast.success('Account verified successfully! Now you can login to enjoy our service!',
    { theme: 'colored' }
  )
  return response.data
}