<template>
    <section>
        <div class="loading-wrapper">
            <h2>Loading</h2>
            <el-button @click="loading(1)">第一种</el-button>
            <el-button @click="loading(2)">第二种</el-button>
        </div>
    </section>
</template>
<script>
    export default {
        components: {
            Github: () => import('components/Github/index.vue')
        },
        methods: {
            loading (type) {
                let fn = type === 1? this.$showLoading1:type === 2? this.$showLoading2: function(){}
                let fnClose = type === 1? this.$hideLoading1:type === 2? this.$hideLoading2: function(){}
                fn()
                setTimeout(() => {
                    fnClose()
                }, 2000)
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
            margin: 0 30px;
        }
    }
</style>