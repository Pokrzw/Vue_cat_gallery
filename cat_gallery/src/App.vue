<template>
  <div v-if="isLoading" :class="{loader_container:isLoading}">
    <span class="loader"></span>
  </div>
  <div v-if="!isLoading" class="container">
    <CatGallery :images="images"/>
  <button @click="sendRequest">Odśwież koty</button>
  </div>
  
</template>

<script>
import CatGallery from './components/CatGallery.vue'; 
import { getImages } from './CatService';
export default {
  name: 'App',
  components:{CatGallery},
  data(){
    return{
      isLoading: true,
      images:[]
    }
  },
  methods: {
    sendRequest(){
      this.isLoading = true
      getImages(6)
      .then(data => {this.images = data; this.isLoading = false})
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
    background: linear-gradient(to right, #2193b0, #6dd5ed); 
}
.loader_container{
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

.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  
 margin: 10px;
  width: fit-content;
}

.image{
  padding: 10px;
  width: 28vw;
  height: 40vh;
  overflow: visible;
  display: flex;
}


img{
  width: 100%;
  border-radius: 15px;
  border: #FFF 1px solid;
  height: 100%;
  object-fit: cover;
}

img.gallery_img{
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 0);
  transition: 0.5s;
}
img.gallery_img:hover{    
  height: 102%;
  width: 102%;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 0.7);
}

button{
  align-self: center;
  width: 100px;
  height: 50px;
  margin-bottom: 20px;
  border: none;
  cursor: pointer;
  border-radius: 20px;
}
</style>
