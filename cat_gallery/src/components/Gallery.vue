<template>
 <div class="wrpper">
  <div v-if="showModal">
    <CatModal :source="srcToPass"/>
    
  </div>
  <div class="gallery">
    <div v-for="image in images" :key="image.id" class="wrapper">
      <div class="image">
        <img @click="toggleModal(image.url)" :src="image.url" :alt="image.url"/>
      </div>
  </div>
  </div>
 </div>
</template>

<script>
    import CatModal from './CatModal.vue';

    export default{
        name: 'CatModal',
        props: ['images'],
        components: {CatModal},    
        data(){
            return{
                srcToPass: "",
                showModal: false, 
            }
        },
        methods:{
             toggleModal(source){
                this.showModal = !this.showModal 
                this.srcToPass = source
                console.log(this.showModal);
            }
        }
    }
</script>
