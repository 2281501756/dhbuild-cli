const { loader } = require('./util')
const clone = require('./clone')

module.exports = class creator {
  constructor(projectName, targetDirectory) {
    this.projectName = projectName
    this.targetDirectory = targetDirectory
  }
  create() {
    const templateUrl = `2281501756/dhcreate`
    loader('开始下载', clone, templateUrl, this.targetDirectory)
  }
}
