const downloadGitRepo = require('download-git-repo')

module.exports = function (repository, destination, opstion) {
  console.log('下载地址', destination)
  return new Promise((resolve, reject) => {
    downloadGitRepo(repository, destination, opstion, (err) => {
      if (err) {
        console.log('下载失败')
        return
      }
      console.log('下载成功')
      resolve()
    })
  })
}
