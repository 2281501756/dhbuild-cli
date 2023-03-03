const path = require('path')
const fs = require('fs-extra')
const Creator = require('./creator')
const Inquirer = require('inquirer')

module.exports = async function (projectName, options) {
  const cwd = process.cwd()
  const targetDirectory = path.join(cwd, projectName)
  if (fs.existsSync(targetDirectory)) {
    if (options.force) {
      fs.removeSync(targetDirectory)
    } else {
      let { isOverwrite } = await new Inquirer.prompt([
        // 返回值为promise
        {
          name: 'isOverwrite', // 与返回值对应
          type: 'list', // list 类型
          message: '存在前文件夹，是否对其进行覆盖',
          choices: [
            { name: '是', value: true },
            { name: '否', value: false },
          ],
        },
      ])
      if (isOverwrite) {
        fs.removeSync(targetDirectory)
      } else {
        console.log('停止下载')
        return
      }
    }
  }
  const creator = new Creator(projectName, targetDirectory)

  creator.create()
}
