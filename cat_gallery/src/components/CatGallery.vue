<template>
    <div v-if="showModal">
        <CatModal :image="image" @close="toggleModal"/>
    </div>
    <div class="gallery_container">
        <div v-for="image in images" class="image" :key="image.id">
        <img :src="image.url" :alt="image.url" class="gallery-img" @click="toggleModal(image.url)">
    </div>
    </div>
</template>


<script>
import CatModal from './CatModal.vue';
    export default{
        props: ['images'],
        components:{CatModal},
        data(){
            return{
                showModal:false,
                image: ""
            }
        }, 
        methods:{
            toggleModal(image){
                this.showModal = !this.showModal
                this.image = image
            }
        }
    }
</script>

<style>
.gallery_container{
  height: 100%;
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 25%;
  flex-wrap: wrap;
  flex-direction: row;
}

</style>