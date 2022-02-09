let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://2323'
} else if (process.env.NODE_ENV === 'prodiction') {

} else {

}

export {
  BASE_URL,
  TIME_OUT
}
