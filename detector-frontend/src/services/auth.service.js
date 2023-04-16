import api from './api.service'

//call api for login
export const login = (data) => api.post('/auth/login', data)

//call api for pass image upload data
export const uploadImage = (data) => api.post('/image',data)

//call api to get image upload urls
export const getUploadImageUrl = (data) => api.get('/image/getPresignedUrl',data)

//call api to get list of damages
export const getDamageList = (data) => api.get('/image/damageList',data)