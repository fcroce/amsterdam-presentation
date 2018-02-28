<template>
    <div class="questions">
        <router-link to="/">
            <div id="home"></div>
        </router-link>
        <slider>
            <slide-questions/>
        </slider>
    </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import SlideQuestions from "@/components/questions/Slide-questions.vue";

export default {
  name: "questions",
  components: {
    Slider,
    SlideQuestions
  }
};
</script>

<style scoped>
a {
  color: #212121;
}
</style>
