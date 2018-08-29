<template>
<div class="detailpagecustomer">
  <div class="container">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">Update Customer Data</p>
        <hr>
        <div class="content">
          <div class="field is-horizontal">
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input v-model="editNew.name" class="input" type="text" placeholder=" name">
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Gender</label>
            </div>
            <div class="field-body">
              <div class="select">
                <select v-model="editNew.gender">
                        <option selected>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Email</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input v-model="editNew.email" class="input" type="email" placeholder=" email">
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Occupation</label>
            </div>
            <div class="field-body">
              <div class="select">
                <select v-model="editNew.occupation">
                        <option>Select Occupation</option>
                        <option>Businessperson</option>
                        <option>Student</option>
                        <option>Police</option>
                        <option>Soldier</option>
                        <option>CEO</option>
                        <option>CFO</option>
                        <option>Developer</option>
                        <option>Tradesman</option>
                        <option>Doctor</option>
                        <option>Lecturer</option>
                        <option>Instructor</option>
                        <option>Security</option>
                        <option>Driver</option>
                        <option>Chef</option>
                        <option>Waitress</option>
                        <option>Presenter</option>
                        <option>Other</option>
                    </select>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Phone</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input v-model="editNew.phoneNumber" class="input" type="text" placeholder="phone ">
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Birthyear</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input v-model="editNew.birthYear" class="input" type="text" placeholder="birth year">
                </p>
              </div>
            </div>
          </div>
          <div class="field is-grouped">
            <a class="button is-primary is-medium" @click="editCustomer">Update data</a>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapActions
} from 'vuex';
import axios from 'axios';

export default {
  name: 'updatecustomer',
  data: function() {
    return {
      customer: null,
      editNew: '',
    }
  },
  created() {
    this.getOneCustomer()
  },
  methods: {
    ...mapActions([
      'updateCustomer'
    ]),
    getOneCustomer() {
      axios.get(`https://server.rika.website/customer/${this.$route.params.id}`)

        .then(result => {
          this.customer = result.data.data
        })

        .catch(err => {
          console.log(err)
        })
    },
    editCustomer() {
      console.log("ini di edit customer", this.$route.params.id)
      let editData = {
        id: this.$route.params.id,
        data: this.editNew
      }
      this.updateCustomer(editData)
    }
  },
  watch: {
    customer() {
      this.editNew = this.customer;
    }
  }
};
</script>

<style>

</style>
