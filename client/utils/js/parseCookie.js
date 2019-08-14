export default function (cookes, targetKey) {
  const cookieArr = cookes.split(';')
  const target = cookieArr.find(item => {
    if (item && item.split('=').length) {
      return item && targetKey === item.split('=')[ 0 ].trim()
    }

    return false
  })

  return target && target.split('=')[ 1 ]
}
