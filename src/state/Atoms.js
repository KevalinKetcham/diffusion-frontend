import { atom } from 'recoil';

export const authenticatingState = atom({
  key: 'authenticatingState',
  default: true,
})

export const authenticatedState = atom({
  key: 'authenticatedState',
  default: false,
})

export const userEmailState = atom({
  key: 'userEmailState',
  default: null,
})
  

export const uploadModalDisplayState = atom({
  key: 'uploadModalDisplayState',
  default: false,
})