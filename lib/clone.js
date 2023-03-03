const downloadGitRepo = require('download-git-repo')

module.exports = function (repository, destination, opstion) {
  return new Promise((resolve, reject) => {
    downloadGitRepo(repository, destination, opstion, (err) => {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}
