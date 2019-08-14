import cookieParser from '@/utils/js/parseCookie'

export default function ({ req, store }) {
  if (req && req.headers && req.headers.cookie) {
    const userId = cookieParser(req.headers.cookie, 'userId')

    if (userId) {
      console.info('checkLogin', 'is login')
    } else {
      console.info('checkLogin', 'not login')
    }
  }
}
