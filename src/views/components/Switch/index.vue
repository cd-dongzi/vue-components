<template>
    <section>
        <div class="switch-wrapper">
            <h2>Switch</h2>
            <div class="box">
                <switch-component v-model="status1"></switch-component>
                <div><span>状态:</span>{{status1}}</div>
            </div>
            <div class="box">
                <switch-component v-model="status2" :animate="2"></switch-component>
                <div><span>状态:</span>{{status2}}</div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        components: {
            SwitchComponent: () => import('components/Switch/index.vue')
        },
        data () {
            return {
                status1: false,
                status2: true
            }
        }
    }
</script>
<style lang="less" scoped>
    section {
        text-align: center;
        h2 {
            margin: 20px 0;
        }
        ul li {
            display: inline-block;
            margin: 20px 50px;
            color: rgba(186, 164, 119, 0.99);
        }
        .box {
            display: inline-block;
            vertical-align: middle;
            margin: 10px 40px;
        }
    }
</style>