<template>
    <form @submit.prevent="submitForm">
      <div class="form-container">
        <div class="field">
          <label for="cars">Email*</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            class="input-text"
            v-model="email"
            required
          />
        </div>
        <div class="field">
          <label for="role">Role*</label>
          <select
            name="role"
            id="role"
            class="field-select"
            v-model="role"
            required
          >
            <option value="" select>Select your role</option>
            <option value="developer">Web Developer</option>
            <option value="designer">UI / UX Designer</option>
            <option value="po">Product owner</option>
            <option value="tester">Tester</option>
          </select>
        </div>
        <div class="field">
          <label for="cars">Password*</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            class="input-text"
            v-model="password"
            required
          />
        </div>
        <div class="field">
          <label for="cars">Repeat password*</label>
          <input
            type="password"
            name="password-repeat"
            placeholder="repeat password"
            v-model="passwordRepeat"
            class="input-text"
            required
          />
        </div>
        <div class="field">
          <label for="gender">Hobbies</label>
          <div class="field-check">
            <input
              type="checkbox"
              id="travel"
              value="travel"
              v-model="hobbies"
            />
            <label for="travel">Travel</label>
          </div>
          <div class="field-check">
            <input
              type="checkbox"
              id="netflix"
              name="netflix"
              value="netflix"
              v-model="hobbies"
            />
            <label for="netflix">Netflix</label>
          </div>
          <div class="field-check">
            <input type="checkbox" id="sport" value="sport" v-model="hobbies" />
            <label for="sport">Sport</label>
          </div>
          <div class="field-check">
            <input
              type="checkbox"
              id="photography"
              value="photography"
              v-model="hobbies"
            />
            <label for="photography">Photograhy</label>
          </div>
        </div>
      </div>
      <p class="alert" v-if="alert">{{alert}}</p>
      <button type="submit" class="btn black hover">Submit</button>
      <button type="reset" class="btn blue">Reset</button>
    </form>
</template>

<script>
import { emailValidator } from '@/components/utils/functions.js';

export default {
  data() {
    return {
      email: null,
      password: null,
      passwordRepeat: null,
      role: '',
      hobbies: [],
      alert: ''
    };
  },
  methods: {
    submitForm() {
      if(!emailValidator(this.email)){
        this.alert = 'Enter a valid email';
        document.querySelector('input[type=email]').focus();
        return;
      }

      if(this.password !== this.passwordRepeat) {
        this.alert = 'Two password must be equal';
        document.querySelector('input[name=password-repeat]').focus();
        return;
      }
      
      this.alert = '';

      const fields = {
        email: this.email,
        password: this.password,
        passwordRepeat: this.passwordRepeat,
        role: this.role,
        hobbies: this.hobbies,
      };

      this.$emit("submit-form", fields);
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-flow: row wrap;
}

.field {
  min-width: 50%;
}

.field-check {
  display: flex;
  align-items: baseline;
}

.field,
.field-check {
  padding: 10px 0px;
}

.field-select {
  padding: 10px 10px;
}

.field > input, .field-select {
  font-size: 16px;
  letter-spacing: 1.2px;
  min-width: 300px;
}

.field-check > input {
  margin-right: 10px;
}

.field-check > label {
  font-size: 16px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}

input {
  padding: 10px 10px;
}

.alert {
  padding: 15px 0px;
  color: red;
}
</style>
