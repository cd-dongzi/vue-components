<template>
    <section>
        <div class="markdown-wrapper">
            <h2>MarkDown</h2>
            <Markdown v-model="code"></Markdown>
        </div>
    </section>
</template>
<script>
    export default {
        components: {
            Markdown: () => import('components/Markdown/index.vue')
        },
        data () {
            return {
                code: ''
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
    }
</style>