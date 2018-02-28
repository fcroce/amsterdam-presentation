<template>
    <div id="slide-first-project">
        <h1>First Project</h1>

        <h2>If Vue-Cli is not installed nuxtjs.org offers a manual installation step-by-step</h2>

        <p :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">Then again why would you do manual work when all you want is to start a new project? Be lazy!</p>

        <h2 :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]"><b>#</b> vue init nuxt-community/starter-template <b>ProjectName</b></h2>

        <div :style="[$parent.showStep(3) ? { opacity: 1 } : { opacity: 0 }]">
            <p>Interesting note when you try to create the project with capital letters:</p>

            <div class="blackbox">
                <div class="code">
                    <span>? Project name (<b>ProjectName</b>)</span><br />
                    <span>>> Sorry, name can no longer contain capital letters.</span>
                </div>
            </div>
        </div>

        <div :style="[$parent.showStep(4) ? { opacity: 1 } : { opacity: 0 }]">
            <h2>Interactive setup</h2>

            <img src="@/assets/nuxt/new-nuxt-project.png">
        </div>

        <div class="terminal" :style="[$parent.showStep(5) ? { opacity: 1 } : { opacity: 0 }]">
            <p>Now we just need to install the packages with <span><b>#</b> yarn</span></p>

            <p>To start the node server use <span><b>#</b> yarn run dev</span></p>
        </div>
    </div>
</template>

<style scoped>
b {
  color: #8c3800;
}

img {
  margin: 20px auto 40px;
}
</style>
