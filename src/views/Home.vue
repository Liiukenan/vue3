
<template>
    <div>
        <button v-for="(item, index) in girls" :key="index" @click="selectGirlFun(index)">{{ item }}</button>
        <div>你选择了{{ selectGirl }}为你服务</div>
    </div>
</template>

<script lang="ts">
//reactive()
// ref,
import { onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onUnmounted, onUpdated, reactive, toRefs } from "vue"
interface DataProps {
    girls: string[]
    selectGirl: string
    selectGirlFun: (index: number) => void
}
export default {
    name: "Home",
    setup() {
        console.log('1.开始创建')
        const data: DataProps = reactive({
            girls: ["kenan", "tingting"],
            selectGirl: "",
            selectGirlFun: (index: number) => {
                data.selectGirl = data.girls[index]
            }
        })
        onBeforeMount(() => {
          console.log('2.挂载到页面之前执行,onBeforeMount')
        })
        onMounted(()=>{
          console.log('3.挂载到页面之后执行,onMounted')
        })
        onBeforeUpdate(()=>{
          console.log('4.更新之前执行,onBeforeUpdate')
        })
        onUpdated(()=>{
          console.log('5.组件更新之后执行,onMounted')
        })
        onBeforeUnmount(()=>{
          console.log('6.组件卸载之前执行的函数,onMounted')
        })
        onMounted(()=>{
          console.log('7.组件加载完毕')
        })
        onUnmounted(()=>{
          console.log('7.组件销毁之后执行,onMounted')
        })
        onActivated(()=>{
          console.log('8')
        })
        onErrorCaptured(()=>{
          console.log()
        })
        const refData = toRefs(data)
        return {
            ...refData
        }
    },
}
</script>
