<template>
    <div class="tooltip-wrapper">
        <slot></slot>
        <div :class="['tooltip-arrow', 'tooltip-arrow-'+place]">{{msg}}</div>
    </div>
</template>
<script>
export default {
    name: 'Tag',
    props: {
        place: {
            type: String,
            default: 'right'
        },
        msg: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="less" scoped>
    @theme-color: #c1866a;
    .tooltip-wrapper {
        display: inline-block;
        position: relative;

        
        .tooltip-arrow {
            min-width: 60px;
            white-space:nowrap;
            position: absolute;
            padding: 10px;
            background: @theme-color;
            text-align: center;
            border-radius: 4px;
            color: #fff;
            opacity: 0;
            transition: all .5s;
            pointer-events: none;
            font-size: 12px;
            // left: 50%;top: 50%;
            // transform: translate(-50%, -50%);
            &::before {
                content: '';
                position: absolute;
                background: transparent;
                border: 7px solid transparent;
            }
        }
        .tooltip-arrow-top {
            bottom: e("calc(100% + 12px)");
            left:50%;transform:translateX(-50%);
            margin-bottom: 20px;
            &::before {
                border-top-color: @theme-color;
                top: 100%;left: 50%;
                transform: translateX(-50%);
            }
        }

        .tooltip-arrow-bottom {
            top: e("calc(100% + 12px)");left:0;
            left:50%;transform:translateX(-50%);
            margin-top: 20px;
            &::before {
                border-bottom-color: @theme-color;
                bottom: 100%;left: 50%;
                transform: translateX(-50%);
            }
        }

        .tooltip-arrow-left {
            right: e("calc(100% + 10px)");
            top:50%;transform:translateY(-50%);
            margin-right: 20px;
            top: 50%;
            transform: translateY(-50%);
            &::before {
                border-left-color: @theme-color;
                left: 100%;top: 50%;
                transform: translateY(-50%);
            }
        }

        .tooltip-arrow-right {
            left: e("calc(100% + 12px)");
            top:50%;transform:translateY(-50%);
            margin-left: 20px;
            top: 50%;
            transform: translateY(-50%);
            &::before {
                border-right-color: @theme-color;
                right: 100%;top: 50%;
                transform: translateY(-50%);
            }
        }

        &:hover {
            .tooltip-arrow-top {
                opacity: 1;
                margin-bottom: 0px;
            }
            .tooltip-arrow-bottom {
                opacity: 1;
                margin-top: 0px;
            }
            .tooltip-arrow-left {
                opacity: 1;
                margin-right: 0px;
            }
            .tooltip-arrow-right {
                opacity: 1;
                margin-left: 0px;
            }
        }
    }
</style>