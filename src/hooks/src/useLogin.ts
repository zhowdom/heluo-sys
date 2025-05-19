import { useUserStore } from '@/stores'

export function useLogin() {
  const params = {
    password: 'Id8BGFJg',
    userName: 'appid-22009-001'
  }
  const doLogin = async () => {
    const userStore = useUserStore()
    console.log('s', userStore.userLogin)
    userStore.userLogin(params)
    // localStorage.setItem('token', res.accesstoken)
  }
  return {
    doLogin
  }
}