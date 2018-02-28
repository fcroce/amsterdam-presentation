<template>
    <div class="nuxt">
        <router-link to="/">
            <div id="home"></div>
        </router-link>
        <slider>
            <slide-introduction/>
            <slide-first-project/>
            <slide-folders-tree/>
            <slide-schema/>
            <slide-deployment/>
            <slide-deployment-nuxtjs-org/>
            <slide-success/>
        </slider>
    </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import SlideIntroduction from "@/components/nuxt/Slide-introduction.vue";
import SlideFirstProject from "@/components/nuxt/Slide-first-project.vue";
import SlideFoldersTree from "@/components/nuxt/Slide-folders-tree.vue";
import SlideSchema from "@/components/nuxt/Slide-schema.vue";
import SlideDeployment from "@/components/nuxt/Slide-deployment.vue";
import SlideDeploymentNuxtjsOrg from "@/components/nuxt/Slide-deployment-nuxtjs-org.vue";
import SlideSuccess from "@/components/nuxt/Slide-success.vue";

export default {
  name: "nuxt",
  components: {
    Slider,
    SlideIntroduction,
    SlideFirstProject,
    SlideFoldersTree,
    SlideSchema,
    SlideDeployment,
    SlideDeploymentNuxtjsOrg,
    SlideSuccess
  }
};
</script>

<style scoped>
a {
  color: #212121;
}
</style>
