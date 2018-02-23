<template>
    <div class="vue-cli">
        <div id="home">
            <router-link to="/">Home</router-link>
        </div>
        <slider>
            <slide-introduction/>
            <slide-installation/>
            <slide-first-application/>
        </slider>
    </div>
</template>

<script>
    import Slider from '@/components/slider.vue';
    import SlideIntroduction from '@/components/home/slide-introduction.vue';
    import SlideInstallation from '@/components/home/slide-installation.vue';
    import SlideFirstApplication from '@/components/home/slide-first-application.vue';

    export default {
        name: "vue-cli",
        components: {
            Slider,
            SlideIntroduction,
            SlideInstallation,
            SlideFirstApplication
        }
    };
</script>

<style scoped>
    #home {
        display: block;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
    }
    a {
        color: #212121;
    }
</style>