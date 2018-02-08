<template>
    <transition name="bounce">
        <div v-if="show" class="alert-mask">
            <div class="box">
                <div class="box-inner">
                    <h3 class="title">{{title}}</h3>
                    <div class="content">{{content}}</div>
                </div>
                <div class="btns">
                    <button class="btn-cancel" @click="cancel">{{cancelText}}</button>
                    <button class="btn-success" @click="success">{{successText}}</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        data () {
            return {
                name:'alert',
                show: false,
                title: '提示',
                content: '',
                successText: '确定',
                cancelText: '取消',
            }
        },
        mounted () {
            // document.addEventListener('keydown', (e) => {
            //     if (e.keyCode === 27) {
            //         this.cancel()
            //     }
            // })
        },
        methods: {
            success () {},
            cancel () {}
        }
    }
</script>
<style lang="less" scoped>
    .alert-mask {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;top: 0;
        background: rgba(0, 0, 0, .4);
        z-index: 1000;
        .box {
            width: 80%;
            max-width: 400px;
            position: absolute;
            top: 50%;left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            padding: 20px;
            border-radius: 6px;
            text-align: center;

            .content {
                padding: 15px 0;
                color: #48576a;
            }
            .btns {
                text-align: right;

                >* {
                    display: inline-block;
                    vertical-align: middle;
                    cursor: pointer;
                    padding: 10px 15px;
                    border-radius: 4px;
                }
            }
            .btn-success {
                background: #20a0ff;
                border: 1px solid #20a0ff;
                color: #fff;
                &:hover {
                    border-color: #20a0ff;
                }
            }

            .btn-cancel {
                background: #fff;
                border: 1px solid #c4c4c4;
                &:hover {
                    border-color: #20a0ff;
                }
            }
        }
    }
    .bounce-enter {
        opacity: 0;
        .box {
            transform:scale(0);
        }
    }

    .bounce-enter-active {
        transition: opacity .4s;
        .box {
            transition: transform .4s;
        }
    }
    .bounce-leave-active{
        transition: opacity .2s;
        .box {
            transition: transform .2s;
        }
    }
    .bounce-leave-active {
        opacity: 0;
    }
</style>

