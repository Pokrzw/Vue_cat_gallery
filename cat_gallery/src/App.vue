<template>
  <div v-if="isLoading" :class="{loaderContainer:isLoading}">
    <span class="loader"></span>
  </div>
  <div v-if="!isLoading" class="container">
    <Gallery :images="images"/>
  <button @click="sendRequest">Refresh</button>
  </div>
  
</template>

<script>
import Gallery from './components/Gallery.vue';
export default {
  name: 'App',
  components:{Gallery},
  data(){
    return{
      srcToPass: "",
      showModal: false, 
      isLoading: true,
      images:[]
    }
  },
  methods: {
    sendRequest(){
    this.isLoading = true

    fetch("https://api.thecatapi.com/v1/images/search?limit=6")
      .then(res => res.json())
      .then(data => {this.images = data.slice(0,6); this.isLoading = false})
      .catch(e => console.log(e))
    
    }
  },
  mounted(){
    this.sendRequest()
  }
}
</script>

<style>

html, body {
    margin: 0;
    height: 100%;
}
.loaderContainer{
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  display: block;
  position: fixed;
  top: 0;
}

.loader {
    margin-top: 45vh;
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  background-color: rebeccapurple;
  color: #2c3e50;
  height: 100vh;
  display: flex;
}

.container{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.gallery{
  display: flex;
  flex-wrap: wrap;
}

.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 25%;
 margin: 10px;
  width: fit-content;
}

.image{
  padding: 10px;
  width: 28vw;
  height: 40vh;
}

img{
  width: 100%;
  border-radius: 15px;
height: 100%;
object-fit: cover;
}

button{
  align-self: center;
  width: 100px;
  height: 50px;
}
</style>
