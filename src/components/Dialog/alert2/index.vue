<template>
    <transition name="fade">
        <div v-if="show" class="alert-mask">
            <div class="box">
                <div class="box-inner">
                    <div class="title">
                        <span>{{title}}</span>
                    </div>
                    <div class="content">{{content}}</div>
                </div>
                <div class="btns">
                    <button class="btn-success" @click="cancel">{{successText}}</button>
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
                show: true,
                title: '提示',
                content: '',
                successText: '确定'
            }
        },
        mounted () {
            document.addEventListener('keydown', (e) => {
                if (e.keyCode === 27) {
                    this.cancel()
                }
            })
        },
        methods: {
            cancel () {
                this.show = false;
            }
        }
    }
</script>
<style lang="less" scoped>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-to{
      opacity: 0
    } 

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
              transition: all 0.3s linear;
            .close{
                color: #444;
                position: absolute;
                right:5px;top:5px;
                font-size: 30px;

                :hover {
                    color: #111;
                }
            }

            .title {
                >* {
                    display: inline-block;
                    vertical-align: middle;
                }
                .warning-icon {
                    color: #e7a23b;
                    font-size: 30px;
                }
                span {
                    color: #303133
                }
            }
            

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
</style>

