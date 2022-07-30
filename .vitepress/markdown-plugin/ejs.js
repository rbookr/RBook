const fs = require("fs")
const Path = require("path")
const ejs = require("ejs")


//let content = fs.readFileSync('./1.md',{encoding:'utf8'})
//let filename = Path.join(__dirname,'./1.md')
//let html = ejs.render(content,{},{
  //filename
//})

//console.log(html)

function create_func(md,options){
  options = options || {}
  //根据 vitepress的源码
  //md.__path 代表渲染文件的路径
  options.ejs_opt  = { filename :  md.__path || options.filename }

  return function ejs_render(state) {
    state.src = ejs.render(state.src,options.data ||{}, {
      filename : state.md.__path || ''
    })
  }
}

module.exports = function(md,options){

  md.core.ruler.before('normalize','ejs_format',create_func(md,options),{})

}
