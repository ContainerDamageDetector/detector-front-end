import api from './api.service'

//call api for pass image upload data
export const uploadImage = (data) => api.post('/image',data)