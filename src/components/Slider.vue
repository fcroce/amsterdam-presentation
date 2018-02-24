<template>
    <div id="slider" @keyup.left="previous" @keyup.right="next">
        <i class="navigation left" :class="{ visible: leftIsVisible }" @click="previous"></i>
        <slot/>
        <i class="navigation right" :class="{ visible: rightIsVisible }" @click="next" @keyup.right="next"></i>
    </div>
</template>

<script>
    export default {
        name: "slider",
        data() {
            return {
                slides: [],
                currentSlide: 0,
                step: 0
            }
        },
        computed: {
            leftIsVisible () {
                return this.currentSlide > 0;
            },
            rightIsVisible () {
                return this.currentSlide < this.slides.length - 1;
            }
        },
        methods: {
            previous () {
                if (this.currentSlide === 0) {
                    return;
                }

                this.currentSlide--;

                if (this.currentSlide < 0) {
                    this.currentSlide = this.slides.length - 1;
                }

                this.moveSlides();
            },

            next () {
                if (this.currentSlide === this.slides.length - 1) {
                    return;
                }

                this.currentSlide++;

                if (this.currentSlide > this.slides.length - 1) {
                    this.currentSlide = 0;
                }

                this.moveSlides();
            },
            moveSlides () {
                this.step = 0;

                this.slides.forEach((slide) => {
                    slide.style.setProperty(
                        'transform',
                        'translate3d(0, ' + (this.currentSlide * -100) + 'vh, 0)'
                    );
                });
            },

            nextStep () {
                this.step++;
            },

            previousStep () {
                if (this.step > 0) {
                    this.step--;
                }
            },

            showStep (current) {
                return this.step >= current;
            }
        },
        mounted () {
            this.$slots.default.forEach(vnode => {
                if (vnode.tag !== undefined) {
                    this.slides.push(vnode.elm);
                }
            });

            window.addEventListener('keyup', (event) => {
                if (event.keyCode === 37) {
                    this.previous();
                }

                if (event.keyCode === 39) {
                    this.next();
                }

                if (event.keyCode === 40 || event.keyCode === 32) {
                    this.nextStep();
                }

                if (event.keyCode === 38) {
                    this.previousStep();
                }

                if (event.keyCode === 46) {
                    this.step = 0;
                }
            });
        }
    }
</script>

<style scoped>
    #slider {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
    }
    #slider > div {
        display: block;
        width: 80%;
        height: 100vh;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.35);
        border-radius: 3px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
        padding: 60px;
        overflow: hidden;
        -webkit-transition: all 600ms cubic-bezier(.25,.75,.5,1.25);
        -moz-transition: all 600ms cubic-bezier(.25,.75,.5,1.25);
        -o-transition: all 600ms cubic-bezier(.25,.75,.5,1.25);
        transition: all 600ms cubic-bezier(.25,.75,.5,1.25);
    }
    .navigation {
        display: none;
        cursor: pointer;
        position: absolute;
        top: 50%;
        bottom: 0;
        z-index: 1;
        margin: 0;
        width: 0;
        height: 0;
        border-top: 30px solid transparent;
        border-bottom: 30px solid transparent;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        font-size: 40px;
        text-align: center;
        -webkit-transition: all 250ms ease;
        -moz-transition: all 250ms ease;
        -o-transition: all 250ms ease;
        transition: all 250ms ease;
    }
    .navigation.left {
        left: 5%;
        border-right:30px solid #ccc;
    }
    .navigation.left:hover, .navigation.left:active {
        border-right-color: #ca5b10;
    }
    .navigation.right {
        right: 5%;
        border-left: 30px solid #ccc;
    }
    .navigation.right:hover, .navigation.right:active {
        border-left-color: #ca5b10;
    }
    .navigation.left.visible, .navigation.right.visible {
        display: flex;
    }
</style>