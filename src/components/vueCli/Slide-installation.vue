<template>
    <div id="slide-introduction">
        <h1>Installation</h1>

        <h2>npm install -g @vue/cli</h2>

        <p>OR</p>

        <h2>yarn global add @vue/cli</h2>

        <div class="blackbox" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
            <p class="terminal terminal-cmd"><span>#</span> sudo npm install -g @vue/cli</p>
            <p class="terminal">/usr/bin/vue -> /usr/lib/node_modules/@vue/cli/bin/vue.js</p>
            <p class="terminal">+ @vue/cli@3.0.0-beta.1</p>
            <p class="terminal">added 174 packages in 6.877s</p>
        </div>

        <h2 :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]">Install a plugin</h2>

        <div class="blackbox" :style="[$parent.showStep(3) ? { opacity: 1 } : { opacity: 0 }]">
            <p class="terminal terminal-cmd"><span>#</span> npm install -D @vue/cli-plugin-babel</p>
            <p class="terminal terminal-cmd"><span>#</span> vue invoke babel</p>
        </div>
    </div>
</template>