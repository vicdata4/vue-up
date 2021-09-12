<template>
  <div class="container">
    <h2 class="title">Form</h2>
    <form @submit.prevent="submitForm">
      <div class="form-container">
        <div class="field">
          <label for="cars">Email</label>
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
          <label for="role">Role</label>
          <select
            name="role"
            id="role"
            class="field-select"
            v-model="role"
          >
            <option select>Select your role</option>
            <option value="developer">Web Developer</option>
            <option value="designer">UI / UX Designer</option>
            <option value="po">Product owner</option>
            <option value="tester">Tester</option>
          </select>
        </div>
        <div class="field">
          <label for="cars">Password</label>
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
          <label for="cars">Repeat password</label>
          <input
            type="password"
            name="password2"
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
              checked
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
      <button type="submit" class="btn blue">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      passwordRepeat: null,
      role: null,
      hobbies: [],
    };
  },
  methods: {
    submitForm() {
      const fields = {
        email: this.email,
        password: this.password,
        passwordRepeat: this.passwordRepeat,
        role: this.role,
        hobbies: this.hobbies,
      };
      console.log(fields);
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
  align-items: center;
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

label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}

input {
  padding: 10px 10px;
}
</style>
