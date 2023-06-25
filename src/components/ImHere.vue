<script>

import SocialCard from './SocialCard.vue';
export default {
  name: 'ImHere',
  components: { SocialCard },
  data() {
    return {
      /* fileUrl: '../../public/danielOddoCv.pdf' */
    }
  },
  methods: {
    downloadPDF() {
      const fileUrl = '/assets/danielOddoCv.pdf';
      window.open(fileUrl, '_blank');
    }
  },
}
</script>
<template>
  <div class="card bg-transparent">
    <div class="card-body text-center">
      <h2 class="text-white">I'm here!</h2>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Alessandria&t=&z=5&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
          <a href="https://www.whatismyip-address.com"></a><br>
          <a href="https://www.embedgooglemap.net"></a>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center mt-4">
        <SocialCard></SocialCard>
        <button @click="downloadPDF" download="Daniel-Oddo-cv.pdf" class="btn btn-primary">
          <i class="fa-solid fa-download me-1"></i>Download CV PDF</button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.gmap_canvas {
  iframe {
    width: 100%;
    height: 400px;

    @media (max-width: 768px) {
      width: 100%;
      height: 300px;
    }
  }
}

.card {
  box-shadow: 8px 8px 10px 2px black;
}

.btn {
  background-color: #4453a6;
  color: white;

  &:hover {
    background-color: #0044ff;
    box-shadow: 8px 8px 10px 2px black;
  }
}
</style>