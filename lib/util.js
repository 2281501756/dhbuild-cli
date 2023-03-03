const ora = require('ora')

function loader(message, fn, ...arr) {
  const spinner = ora(message).start()
  return new Promise(async (resolve, reject) => {
    try {
      let res = await fn(...arr)
      spinner.text = '下载成功'
      spinner.succeed()
      resolve(res)
    } catch {
      spinner.text = '下载失败'
      spinner.succeed()
      resolve()
    }
  })
}

module.exports = {
  loader,
}
