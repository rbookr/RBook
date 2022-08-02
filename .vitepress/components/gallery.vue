<script setup>
import { ref,onMounted, computed, watch, reactive } from 'vue'

const props =  defineProps( {

  width : {
    type:Number,
    default:600
  },
  height: {
    type:Number,
    default:-1
  },
  title : {
    type: String,
    default:'gallery'
  },
  autoidxlog : {
    type:Boolean,
    default:true
  }

})

const container_style = computed( () =>{
    let style = {}
    /*if(props.width != -1){*/
      /*[>style.width = `${props.width}px`<]*/
      /*style["grid-auto-columns"] = `auto`*/
    /*}*/

    if(props.height != -1) {
      /*style.height = `${props.width}px`*/
      style["grid-template-rows"] = `${props.width}px`
    }
    return style
})

const container = ref(null)
const log = ref(null)

const items_size = ref(0)
const nowIdx = ref(1)

onMounted( ()=> {
    /*console.log(container.value.childElementCount)*/
    items_size.value = container.value.childElementCount
    nowIdx.value = 1

    //给log的里的内容自动 index
    if( props.autoidxlog) {
      for(let i = 0 ; i < log.value.childElementCount ;i++)
        log.value.children[i].className = `log-${i+1}`
    }

    //设置 第一个log显示
    let nowLog = log.value.getElementsByClassName(`log-${nowIdx.value}`)
    if( nowLog[0] ) nowLog[0].style.display = 'block';
    /*console.log(container_style.value)*/
})

const translateX = computed( ()=> {
    return -1*(nowIdx-1)*container.value.offsetWidth;
  })

watch( nowIdx ,(newIdx,oldIdx)=>{
  let width = container.value.offsetWidth;
  for(let i = 0 ;i < container.value.children.length ;i++) {
    container.value.children[i].style.transform = 
      `translateX(${-(newIdx-1)* width}px)`
      ;
  }
  let nowLog = log.value.getElementsByClassName(`log-${newIdx}`)
  if( nowLog[0] ) nowLog[0].style.display = 'block';
  let oldLog = log.value.getElementsByClassName(`log-${oldIdx}`)
  if( oldLog[0] ) oldLog[0].style.display = null;
  
})

const idx_click = (idx) =>{
  /*console.log(idx)*/
  //得到 gallery-container 宽度
  nowIdx.value = idx
}

const idx_next = () => {
  if(nowIdx.value < container.value.childElementCount)
    nowIdx.value++;
}

const idx_pre= () => {
  if(nowIdx.value > 1)
    nowIdx.value--;
}

</script>
<template>
  <div class="gallery">
    <div class="gallery-content" :style="{'max-width': props.width +'px'}">
      <div class="gallery-title" >
        <span>{{props.title}}</span>
      </div>

      <div class="pointer pointer-left">
        <span class="button-80" @click="idx_pre">&lt</span>
      </div>
      <div class="pointer pointer-right">
        <span class="button-80" @click="idx_next">&gt</span>
      </div>
      <div class="gallery-content-container" ref="container" :style="container_style">
        <slot></slot>
      </div>
      <div class="gallery-content-log" ref="log" >
        <slot name="log"></slot>
      </div>

      <div class="gallery-indicator-content">
        <div class="gallery-indicator">
          <button class="button-80" v-for="idx in items_size" :key="idx"
          @click="idx_click(idx)"
          :class="{active: nowIdx == idx}"
          >
            {{idx}}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" >

.gallery {
  width: 100%;
  position: relative;
  &-content {

    display: grid;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: 1px solid #1f1f1f2A;
    border-radius: 10px;
    margin: 0 auto;
    overflow: hidden;

    .gallery-indicator-content {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      border-top: 1px solid #1f1f1f2A;
      .gallery-indicator {
        background-color: rgba(0, 0, 0, 0.24);
        border: 1px solid #2a1f1f1f;
        /*filter: blur(20px); [>滤镜<]*/
        border-radius: 3px;
        /*display: grid;*/
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        /*grid-gap:5px;*/
        /*grid-template-columns: repeat(auto-fill, 22px);*/
      /*grid-auto-flow:column;*/
        width: 100%;
        padding:1px 5px;
      }
    }
    
    .gallery-title {
      padding: 10px 10px;
      border-bottom: 1px solid #1f1f1f2A;
      box-sizing: border-box;
    }

    .pointer {
      z-index:9999;
      position: absolute;
      top:45%;
      span {
        font-weight: 100;
        font-size: 1.5rem;
        background: transparent;
        border: 1px solid #1f1f1f2A;
      }
      &-left {
        left:3px;
      }
      &-right {
        right:3px;
      }
    }

    &-container,&-log {
      display: grid;
      grid-auto-flow:column;
      justify-items:center;
      align-items: center;
      overflow: hidden;
      grid-auto-columns:100%;
      margin: 10px 0;

      > * {
        transition: all 500ms linear;
      }

      > *[class^="log-"] {
        display: none;
      }

    }

  }
}

.button-80 {
  background: #fff;
  backface-visibility: hidden;
  border-radius: 20%;
  border-style: solid;
  border-width: .08rem;
  box-sizing: border-box;
  color: #212121;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,Helvetica,sans-serif;
  font-size: 0.1rem;
  font-weight: 700;
  letter-spacing: -.01em;
  line-height: 1.3;
  padding: .1rem 0.225rem;
  position: relative;
  text-align: center !important;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-80:not(:disabled):hover {
  transform: scale(1.05);
}

.button-80:not(:disabled):hover:active {
  transform: scale(1.05) translateY(.125rem);
}

.button-80:focus {
  outline: 0 solid transparent;
}

.button-80.active {
  background-color: lightslategray;
}

.button-80:focus:before {
  content: "";
  left: calc(-1*.375rem);
  pointer-events: none;
  position: absolute;
  top: calc(-1*.375rem);
  transition: border-radius;
  user-select: none;
}

.button-80:focus:not(:focus-visible) {
  outline: 0 solid transparent;
}

.button-80:focus:not(:focus-visible):before {
  border-width: 0;
}

.button-80:not(:disabled):active {
  transform: translateY(.125rem);
}

</style>
