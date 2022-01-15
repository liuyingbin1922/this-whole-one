/**
 * @description 使用download-git-repo 下载git仓库文件
 */

 const download = require('download-git-repo')
 const path = require("path")
 const ora = require('ora')


module.exports = (target) => {
    target = path.join(target || '.', '.download-temp');
    return new Promise(function (res, rej) {
      // 这里可以根据具体的模板地址设置下载的url，注意，如果是git，url后面的branch不能忽略
      // 格式是名字/地址 后面不加 .git 但是带着 #分支
      // let url = 'amazingliyuzhao/CliTestGit#test'
      let url = 'https://github.com/liuyingbin1922/learnEggjs/archive/refs/tags/1.zip'
      const spinner = ora(`正在下载项目模板，源地址：${url}`)
      spinner.start();
      download("direct:"+url, target, { clone: false },  (err)  => { // clone false 设置成false 具体设置看官网设置
        if (err) {
          spinner.fail()
          rej(err)
        }
        else {
          spinner.succeed()
          res(target)
        }
      })
    })
}

