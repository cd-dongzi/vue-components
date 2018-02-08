<template>
    <section>
        <div class="icon-svg-wrapper">
            <h2>Icon-svg</h2>
            <ul>
                <li v-for="item in list"><Icon :name="item.icon"></Icon></li>
            </ul>
        </div>
    </section>
</template>
<script>
    export default {
        components: {
            Icon: () => import('components/Icon-svg/index.vue')
        },
        data () {
            return {
                list: [
                    { icon: 'authority'},
                    { icon: 'homel'},
                    { icon: 'zuowen'},
                    { icon: '-fuzhizujian'},
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
            margin: 20px 50px;
            color: rgba(186, 164, 119, 0.99);
            svg {
                font-size: 30px;
            }
            &:hover {
                svg {
                    color: #ff4747;
                }
            }
        }
    }
</style>