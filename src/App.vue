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
                <div v-bind:style="transformObj" class="transform-element"></div>
            </div>
            
            <div class="css-output">
                <pre>
                    element {
                        transform : 
                        {{transformObj.transform}}
                }
                </pre>
            </div>

        </main>
    <router-view/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            transformObj: '',
            
        }
    },

    mounted () {
        this.$root.$on('transforms',data => {
            this.transformObj = data
            
        });
    },


}
</script>



<style src="@/assets/scss/style.scss" lang="scss"></style>

