#! /usr/bin/env node

const program = require('commander')
const chalk = require('chalk')

program
  .name('dhbuild-cli')
  .usage(`<command> [option]`)
  .version(`dhbuild-cli ${require('../package.json').version}`)

program
  .command('create [project-name]')
  .description('创建项目模板')
  .option('-f, --force', '如果目录存在，是否将其强制覆盖')
  .action((projectName, cmd) => {
    // 处理用户输入create 指令附加的参数
    require('../lib/create')(projectName, cmd)
  })

program.on('--help', function () {
  // 前后两个空行调整格式，更舒适
  console.log()
  console.log(
    `Run ${chalk.cyan('dhbuild-cli <command> --help')} for detailed usage of given command.`
  )
  console.log()
})

program.parse(process.argv)
