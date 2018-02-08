<template>
    <section>
        <div class="dialog-wrapper">
            <h2>Dialog</h2>
            <el-button @click="show1">第一种</el-button>
            <el-button @click="show2">第二种</el-button>
            <el-button @click="show3">第三种</el-button>
        </div>
    </section>
</template>
<script>
    export default {
        methods: {
            show1 () {
                this.$alert1('第一种！！！已经出现啦啦啦！！！！')
            },
            show2 () {
                this.$alert2('第二种！！！已经出现啦啦啦！！！！')
            },
            show3 () {
                this.$alert3('第三种！！！已经出现啦啦啦！！！！')
                    .then( res => {
                        alert('你点击的确定按钮')
                    }).catch( err => {
                        alert('你点击的取消按钮')
                    })
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
    }
</style>