import { hostelModel } from '~/models/hostelModel'

const createNew = async (reqBody) => {
  try {
    console.log('req.body=', reqBody)
    const createdHostel = await hostelModel.createNew(reqBody)
    console.log('createdHostel', createdHostel)
    //lấy bản ghi hostel sau khi gọi(Tùy vào dự án mà bước này có cần gọi  hay không)
    const getNewHostel = await hostelModel.findOneById(createdHostel.insertedId)
    return getNewHostel
  } catch (error) {
    throw error
  }
}
export const hostelService = {
  createNew
}