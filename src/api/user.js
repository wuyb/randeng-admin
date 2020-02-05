import request from '@/utils/request'
import settings from '@/settings/'

export function login(data) {
  return request({
    url: settings.api.endpoint + '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: settings.api.endpoint + '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
