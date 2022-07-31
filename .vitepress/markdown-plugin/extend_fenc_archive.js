//拓展fenc block,加入自己的功能
//1. viz-dot, /dot$/结尾的 进行dot语言的渲染 成 <embed src"" />
//var wasm = require("@hpcc-js/wasm")
//const sp = require('synchronized-promise')
var deasync = require('deasync');
const Viz = require('viz.js');

const { Module, render } = require('viz.js/full.render.js');

var viz = new Viz({ Module, render });

var __renderToSvgBase64 = (src) => {
  return new Promise((resolve, reject) => {
    viz.renderString(src).then( data => {
      resolve('data:image/svg+xml;base64,'+ Buffer.from(data).toString('base64') )
    })
    .catch( reject )
  })
}

//const renderToSvgBase64 = sp(__renderToSvgBase64)

//console.log( graph.layout(dot,"svg","dot") )


module.exports = function (md){
  //替换
  var orginFencRulerIdx = md.block.ruler.__find__('fence')
  if( orginFencRulerIdx == -1) return ;
  var orginFencRuler = md.block.ruler.__rules__[orginFencRulerIdx].fn
  md.block.ruler.at('fence',
    (state, startLine, endLine, silent)=>{
      let ret = orginFencRuler(state, startLine, endLine, silent)

      if( ret ) { //符合fencer规则
        if(silent) return ret;
        //得到最后一个渲染的token
        let token  = state.tokens[state.tokens.length-1]
        //console.log("=====================")
        //console.log( token )
        if( token.type === 'fence'){ //是否是fence type类型的token
          if( token.info.length >= 3 && /dot$/.test(token.info)) {
            
            let t = token.info.split('-')
            
            if( t.length == 1) //params 是 'dot'
              t = ['dot','dot'] //默认的布局
            else if (t[0] == 'viz')
              t = ['dot','dot'] //默认的布局

            let __data = false

            viz.renderString(token.content).then( data => {
              __data = ('data:image/svg+xml;base64,'+ Buffer.from(data).toString('base64') )
            })

            while(1){
              deasync.sleep(10)
              console.log("sleep 10")
              if( __data){
                console.log( "ok" )
                break
              }
            }
            
            token.block   = true
            token.type    = ''
            token.nesting = 0
            token.tag= 'embed'
            token.attrPush([
              "src",
              __data
            ])
            token.content = ''
            console.log( state.tokens[state.tokens.length])
        }

      }

      } // end if(ret)

      return ret;
    }

    ,[ 'paragraph', 'reference', 'blockquote', 'list' ] );
}
