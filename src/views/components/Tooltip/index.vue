<template>
    <section>
        <div class="Tooltip-wrapper">
            <h2>Tooltip</h2>
            <ul>
                <li v-for="tag in list">
                    <Tooltip :msg="tag.msg" :place="tag.place">
                        {{tag.intro}}
                    </Tooltip>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    export default {
        components: {
            Tooltip: () => import('components/Tooltip/index.vue')
        },
        data () {
            return {
                list: [
                    { place: 'top', msg: '这是上面', intro: '上面内容'},
                    { place: 'left', msg: '这是左边', intro: '左边内容'},
                    { place: 'right', msg: '这是右边', intro: '右边内容'},
                    { place: 'bottom', msg: '这是下面', intro: '下面内容'},
                ]
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
            margin: 50px;
        }
    }
</style>