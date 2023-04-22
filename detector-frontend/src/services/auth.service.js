import api from './api.service'

//call api for login
export const login = (data) => api.post('/auth/login', data)

//call api for pass image upload data
export const uploadImage = (data) => api.post('/image',data)

//call api to get image upload urls
export const getUploadImageUrl = (data) => api.get('/image/getPresignedUrl',data)

//call api to get list of damages
export const getDamageList = () => api.get('/image/damageList')

//get data of image
export const getImageData = (id) => api.get(`image/${id}`)

//call api to get list of damages
export const getRecoverPriceList = () => api.get('/image/recoverPriceList')


//get image from s3 bucket
export const getImage = (key) => api.get(`image/uploads/images/${key}`)




// export const getImage = () => api.get('image/uploads/images/0ac89e04-2eba-4291-854c-369e2c247852.jpg')
