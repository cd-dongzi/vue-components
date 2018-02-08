<template>
<div class="home-container">
    <Github githubLink="https://github.com/cd-dongzi" class="github"></Github>
    <el-button v-for="btn in btns" @click="$router.push(btn.path)" class="btn">{{btn.text}}</el-button>
</div>
</template>

<script>
    import Github from 'components/Github/index'
    export default {
        name: 'home',
        components: { Github },
        data () {
            return {
                btns: [
                    { path: '/components/dialog', text: 'Dialog'},
                    { path: '/components/github', text: 'Github'},
                    { path: '/components/icon-svg', text: 'Icon-svg'},
                    { path: '/components/loading', text: 'Loading'},
                    { path: '/components/markdown', text: 'Markdown'},
                    { path: '/components/switch', text: 'Switch'},
                    { path: '/components/tooltip', text: 'Tooltip'},
                ]
            }
        }
    }
</script>


<style lang="less" scoped>
    h1 {
        text-align: center;
        margin-top: 50px;
    }
    .github {
        position: absolute;
        right:0;top:0;
    }
    .btn {
        margin: 10px 30px;
    }
</style>
