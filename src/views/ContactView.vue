<script>
import axios from 'axios';
export default {
  name: 'ContactView',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      loading: false,
      success: false,
      errors: {},
      base_API: 'http://127.0.0.1:8000/',
    }
  },
  methods: {
    sendForm() {
      this.loading = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      //console.log(data);
      this.errors = {};
      axios.post('http://127.0.0.1:8000/api/contacts', data).then((response) => {
        this.success = response.data.success;
        if (!this.success) {
          this.errors = response.data.errors;
        } else {
          this.name = '';
          this.email = '';
          this.message = '';
        }
        this.loading = false;
      });
    },
  }
}
</script>
<template>
  <section class="contact-me bg py-5 vh-100 d-flex align-items-center">
    <div class="container">
      <div v-if="success" class="alert alert-success text-start" role="alert">
        Messaggio inviato con successo!
      </div>
      <form @submit.prevent="sendForm()" class="mb-5 py-3">
        <div class="mb-5">
          <label for="name" class="form-label">Name</label>
          <input type="text" name="name" id="name" v-model="name" class="form-control"
            :class="{ 'is-invalid': errors.name }" placeholder="Type your full name here" />
          <p v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="invalid-feedback"> {{ error }}
          </p>
        </div>

        <div class="mb-5">
          <label for="email" class="form-label">Email</label>
          <input type="text" name="email" id="email" v-model="email" class="form-control"
            :class="{ 'is-invalid': errors.email }" placeholder="Type your email here" />
          <p v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="invalid-feedback"> {{ error }}
          </p>
        </div>

        <div class="mb-5">
          <div for="message" class="form-label">Message:</div>
          <textarea rows="8" name="message" id="message" v-model="message" class="form-control rounded"
            :class="{ 'is-invalid': errors.message }" placeholder="Type your message here"></textarea>
          <p v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="invalid-feedback"> {{ error
          }} </p>
        </div>
        <button button type=" submit" class="btn btn-primary text-white me-2" :disabled="loading">{{ loading ?
          'Sending...' : 'Send' }}</button>
      </form>
    </div>
  </section>
</template>

<style lang="sass" scoped>


</style>