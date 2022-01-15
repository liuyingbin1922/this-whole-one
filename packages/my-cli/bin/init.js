#!/usr/bin/env node
const program = require('commander');
const download = require('../lib/download')
const generator = require('../lib/generator')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const glob = require('glob') // npm i glob -D
const inquirer = require('inquirer') // 按需引入
// const logSymbols = require("log-symbols");
const remove = require('../lib/remove') // 删除文件js
const CFonts = require('cfonts');


// 获取输入的项目参数
program.usage('package-cli')
        .parse(process.argv) // 加入这个能获取到项目名称
let projectName = program.rawArgs[2] // 获取项目名称

if(!projectName) {
    program.help()
    return 
}
console.log(projectName)


// 当前目录为空，如果当前目录的名称和project-name一样，则直接在当前目录下创建工程，否则，在当前目录下创建以project-name作为名称的目录作为工程的根目录
// 当前目录不为空，如果目录中不存在与project-name同名的目录，则创建以project-name作为名称的目录作为工程的根目录，否则提示项目已经存在，结束命令执行。
// process.cwd() 是当前执行node命令时候的文件夹地址
//__dirname 是被执行的js 文件的地址 ——文件所在目录
const list = glob.sync('*')  // 遍历当前目录,数组类型
let next = undefined;
let rootName = path.basename(process.cwd());
if (list.length) {  // 如果当前目录不为空
  if (list.some(n => {
    const fileName = path.resolve(process.cwd(), n);
    const isDir = fs.statSync(fileName).isDirectory();
    return projectName === n && isDir // 找到创建文件名和当前目录文件存在一致的文件
  })) { // 如果文件已经存在
    next = inquirer.prompt([
      {
        name:"isRemovePro",
        message:`项目${projectName}已经存在，是否覆盖文件`,
        type: 'confirm',
        default: true
      }
    ]).then(answer=>{
        if(answer.isRemovePro){
          remove(path.resolve(process.cwd(), projectName))
          rootName = projectName;
          return Promise.resolve(projectName);
        }else{
          console.log("停止创建")
          next = undefined
          // return;
        }
      })
  }else {
    rootName = '.';
    next = inquirer.prompt([
      {
        name: 'buildInCurrent',
        message: '当前目录为空，且目录名称和项目名称相同，是否直接在当前目录下创建新项目？',
        type: 'confirm',
        default: true
      }
    ]).then(answer => {
      console.log(answer.buildInCurrent)
      return Promise.resolve(answer.buildInCurrent ? '.' : projectName)
    })
  }
} else if (rootName === projectName) {  // 如果文件名和根目录文件名一致
  rootName = '.';
  next = inquirer.prompt([
    {
      name: 'buildInCurrent',
      message: '当前目录为空，且目录名称和项目名称相同，是否直接在当前目录下创建新项目？',
      type: 'confirm',
      default: true
    }
  ]).then(answer => {
    console.log(answer.buildInCurrent)
    return Promise.resolve(answer.buildInCurrent ? '.' : projectName)
  })
} else {
  rootName = projectName;
  next = Promise.resolve(projectName) // 返回resole函数，并传递projectName
}

next && go()

function go () {
  // 预留，处理子命令
  next.then(projectRoot => { 
    if (projectRoot !== '.') {
      fs.mkdirSync(projectRoot)
    }
    CFonts.say('amazing', {
      font: 'block',              // define the font face
      align: 'left',              // define text alignment
      colors: ['#f80'],         // define all colors
      background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
      letterSpacing: 1,           // define letter spacing
      lineHeight: 1,              // define the line height
      space: true,                // define if the output text should have empty lines on top and on the bottom
      maxLength: '0',             // define how many character can be on one line
    });
    return download(projectRoot).then(target => {
      return {
        projectRoot,
        downloadTemp: target
      }
    })
  })
  .then(context => {
    // console.log(context)
    return inquirer.prompt([
      {
        name: 'projectName',
    	  message: '项目的名称',
        default: context.name
      }, {
        name: 'projectVersion',
        message: '项目的版本号',
        default: '1.0.0'
      }, {
        name: 'projectDescription',
        message: '项目的简介',
        default: `A project named ${context.projectRoot}`
      },{
        name: 'isElement',
        message: '是否使用element',
        default: "No",
      },{
        name: 'isEslint',
        message: '是否使用isEslint',
        default: "No",
      }
    ]).then(answers => { // 可选选项回调函数
      let v = answers.isElement.toUpperCase();
      answers.isElement = v === "YES" || v === "Y";
      let iseslint = answers.isEslint.toUpperCase();
      answers.isEslint = iseslint === "YES" || iseslint === "Y";
      return {
        ...context,
        metadata: {
          ...answers
        }
      }
    })
  }).then(context => {
    console.log("生成文件")
    console.log(context)
     //删除临时文件夹，将文件移动到目标目录下
     return generator(context); // 插值处理
  }).then(context => {
    // 成功用绿色显示，给出积极的反馈
    // console.log(logSymbols.success, chalk.green('创建成功:)'))
    console.log(chalk.green('cd ' + context.projectRoot + '\nnpm install\nnpm start'))
  }).catch(err => {
    console.error(err)
    console.log(err);
  })
}

