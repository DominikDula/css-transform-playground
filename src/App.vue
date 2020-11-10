<template>
  <div id="app">
        <main class="main-container">

            <nav class="navigation">
                <ul>
                    <li><router-link class="active" to="/">Transform</router-link></li>
                    <li><router-link to="/box-shadow">Box-shadow</router-link></li>
                    <li><router-link to="/border-radius">Border-radius</router-link></li>
                </ul>
            </nav>

            <div class="transform-container">
                <div class="transform-element"></div>
            </div>
            
            <div class="css-output">
                <pre>
                    element {
                        transform : rotate(65deg)
                        scale(1.2)
                        skew(-35deg) 
                        translate(-74px);
                }
                </pre>
                <p>{{key}}</p>
            </div>

        </main>
    <router-view/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            key: ''
        }
    },

    mounted () {
        this.$root.$on('rot',data => {
            this.key = data
            
        });
    },
}
</script>



<style src="@/assets/scss/style.scss" lang="scss"></style>

