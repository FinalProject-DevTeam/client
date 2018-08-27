<template>
<div class="customercomponent">
  <div class="s">
    <div class="notification">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Add Customer Data</p>
            <hr>
            <div class="content">

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Name</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input v-model="name" class="input" type="text" placeholder="Enter Name">
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
                    <select v-model="gender">
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
                      <input v-model="email" class="input" type="email" placeholder="Enter email">
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
                    <select v-model="occupation">
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
                      <input v-model="phonenumber" class="input" type="text" placeholder="Enter Phone Number ">
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Birth Year</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input v-model="birthyear" class="input" type="test" placeholder="Birth Year">
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-grouped">
                <a class="button is-info is-medium" @click="addCustomer">Save data</a>
              </div>
            </div>
          </article>
        </div>



        <div class="tile is-parent is-9">
          <article class="tile is-child box">
            <p class="title">List Customers</p>
            <hr>
            <div class="content">

              <table class="table is-hoverable">
                <thead>
                  <tr>
                    <th><abbr title="Played">Name</abbr></th>
                    <th><abbr title="Won">Gender</abbr></th>
                    <th><abbr title="Drawn">Email</abbr></th>
                    <th><abbr title="Lost">Phone Number</abbr></th>
                    <th><abbr title="Goals for">Birthyear</abbr></th>
                    <th><abbr title="Goals against">Occupation</abbr></th>
                    <th><abbr title="Goals against">Action </abbr></th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(customer, index) in customers" :key="index">
                    <td class="names">{{ customer.name }}</td>
                    <td v-if="customer.gender === 'Male'">
                      <ion-icon name="male" size="large"></ion-icon>
                    </td>
                    <td v-else>
                      <ion-icon name="female" size="large"></ion-icon>
                    </td>

                    <td class="email">{{ customer.email }}</td>
                    <td>{{ customer.phoneNumber }}</td>
                    <td>{{ customer.birthYear }}</td>
                    <td>{{ customer.occupation }}</td>
                    <td>
                      <div class="buttons has-addons">
                        <span class="button is-info is-selected"><router-link :to='`/detailCustomer/${customer.id}`'>Update</router-link></span>
                        <span class="button is-danger" @click='removeCustomer(customer.id)'><ion-icon size="medium" name="trash"></ion-icon>Delete</span>

                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex';

export default {
  name: "customerpage",
  props: {
    msg: String
  },
  data: function() {
    return {
      name: "",
      gender: "",
      email: "",
      phonenumber: "",
      birthyear: "",
      occupation: ""
    };
  },
  computed: {
    ...mapState([
      'customers',
    ]),
  },
  created() {
    this.getCustomers();
  },
  methods: {
    ...mapActions([
      'inputCustomer', 'getCustomers', 'deleteCustomer'
    ]),
    getTimeOnly(date) {
      console.log(date)
      return new Date(date)
    },
    getGender(field) {
      console.log(field)
      if (field === 'Male') {
        return '<ion-icon name="male"></ion-icon>'
      } else {
        return '<ion-icon name="female"></ion-icon>'
      }
    },
    addCustomer() {
      const uid = localStorage.getItem('uid');

      const newCustomer = {
        name: this.name,
        gender: this.gender,
        email: this.email,
        phoneNumber: this.phonenumber,
        birthYear: this.birthyear,
        occupation: this.occupation,
        restaurantId: uid,
      }
      this.inputCustomer(newCustomer)
      this.getCustomers()
      this.name = "",
        this.gender = "",
        this.email = "",
        this.phonenumber = "",
        this.birthyear = "",
        this.occupation = ""
    },
    removeCustomer(id) {
      this.deleteCustomer(id)
      this.getCustomers()
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.email {
  color: #808080
}

.names {
  font-weight: 700
}

.notification .title,
.notification .subtitle,
.notification .content {
  color: #808080 !important;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
