import {request} from "./network";

export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function getProductData(type, page) {
  return request({
    baseURL: 'http://106.54.54.237:8000/api/mn',
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}