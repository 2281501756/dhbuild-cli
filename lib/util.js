const ora = require('ora')

function loader(message, fn, ...arr) {
  const spinner = ora(message)
  return new Promise(async (resolve, reject) => {
    try {
      let res = await fn(...arr)
      resolve(res)
    } catch {
      spinner.succeed()
      resolve()
    }
  })
}

module.exports = {
  loader,
}
