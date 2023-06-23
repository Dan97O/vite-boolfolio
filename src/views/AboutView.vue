<script>
import axios from 'axios'
import TextPortfolio from '../components/TextPortfolio.vue'
import MySkills from '../components/MySkills.vue';
import ImHere from '../components/ImHere.vue';
export default {
  name: 'AboutView',
  components: {
    TextPortfolio,
    MySkills,
    ImHere
  },
}
</script>

<template>
  <div class="my_container">
    <div class="container mt-5">
      <div class="row row-cols-sm-4 row-cols-md-3 row-cols-lg-2">
        <div class="card w-100 mt-5 bg-transparent">
          <div class="row no-gutters">
            <div class="col-6  d-flex align-items-center justify-content-center d-none d-lg-flex">
              <img
                src="https://camo.githubusercontent.com/c7e2ca28de4726d848194ebbb60d6f91ff1188a781fb370e0aa8dab942cc9c50/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313637302f312a5a53566d57476363317765454e6230536861775778772e676966"
                alt="" class="card-img img-fluid ">
            </div>
            <div class="col-12 col-lg-6">
              <TextPortfolio></TextPortfolio>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-5 text-white">
      <div class="row">
        <div class="col pb-5">
          <MySkills></MySkills>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-3">
    <div class="row">
      <div class="col">
        <ImHere></ImHere>
      </div>
    </div>
  </div>
</template>




<style lang="scss" scoped>
.my_container {
  .card {
    box-shadow: 8px 8px 10px 2px black;
  }

  .my_card:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
}
</style>