<template>
    <section>
        <div class="github-wrapper">
            <h2>Github</h2>
            <ul>
                <li v-for="tag in list"><Github :link="tag.link" :color="tag.color || ''" :backgroundColor="tag.backgroundColor || ''"></Github></li>
            </ul>
        </div>
    </section>
</template>
<script>
    export default {
        components: {
            Github: () => import('components/Github/index.vue')
        },
        data () {
            return {
                list: [
                    { link: 'https://github.com/cd-dongzi/vue-project'},
                    { link: 'https://github.com/cd-dongzi/utils', color: '#4AB7BD', backgroundColor: '#ccc'},
                    { link: 'https://github.com/cd-dongzi/vue-node-blog', color: '', backgroundColor: 'rgba(186, 164, 119, 0.99)'},
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
            margin: 0 30px;
        }
    }
</style>