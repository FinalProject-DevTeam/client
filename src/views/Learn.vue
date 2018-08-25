<template>
<div class="learn">
  <Nav/>

  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">Learn</p>
        <div class="content">
          <div class="buttons">
            <span class="button is-medium is-success" @click="uploadToS3()">Upload to S3</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success" @click="createDataSource()">Create data Source</span>
            <span class="button is-medium is-info" @click="getDataSourceStatus()">Get Status Data</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success" @click="createMLModel()">Create ML Model</span>
            <span class="button is-medium is-info">Get Status ML Model</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success">Create Evaluation</span>
            <span class="button is-medium is-info">Get Status Evaluation</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success">Create Prediction</span>
            <span class="button is-medium is-info">Get Status Prediction</span>
          </div>

          <div class="buttons">
            <span class="button is-medium is-success">Get Prediction</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success">Delete data Source</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success">Delete ML Model</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success">Delete Prediction</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success">Delete Evaluation</span>
          </div>
        </div>
      </article>
    </div>
    <div class="tile is-parent is-8">
      <article class="tile is-child box">
        <p class="title">Main column</p>
        <p class="subtitle">With some content</p>
        <div class="content">
        <b-field>
          <b-select placeholder="dataName" v-model="dataName">
            <option value="customers-data">customers</option>
            <option value="transactions-data">transactions</option>
          </b-select>
        </b-field>
        <b-field>
          <b-select placeholder="datasourceId" v-model="datasourceId">
            <option value="restaurantId">restaurantId</option>
            <option value="date">date</option>
          </b-select>
        </b-field>
        </div>
      </article>
    </div>
  </div>
</div>
</template>

<script>
import Nav from '../components/Header/Navbar.vue';
import axios from 'axios';

export default {
  data() {
    return {
      dataName: null,
      datasourceId: null,
    };
  },
  components: {
    Nav
  },
  methods: {
    async uploadToS3() {
      let payload;
      let columns;
      let id;
      let folderName;
      if (this.dataName === 'customers-data') {
        id = localStorage.getItem('uid');
        let customersData = await axios.get('http://localhost:3000/customer', {
            headers: {
              uid: id,
            }
          })
        folderName = 'customersData';
        columns = {
      	  gender: "gender",
      		birthYear: "birthyear",
      		occupation: "occupation",
        }
        let arrData = customersData.data.data.map((datum) => {
          return [ datum.genderML , Number(datum.birthYear), datum.occupationML ];
        })
        payload = {
          arrData: arrData,
          dataName: this.dataName,
          folderName: folderName,
          columns: columns,
          id: id,
        }
        let { data } = await axios.post('http://localhost:3000/aws/s3', payload)
        console.log(data);
      } else {

      }
    },
    createDataSource() {
      let id;
      let payload;
      if (this.datasourceId === 'restaurantId') {
        id = localStorage.getItem('uid');
        payload = {
          dataName: 'customers-data',
          folderName: 'customersData',
          id: id,
        }
      } else {
        id = '';
        payload = {
          dataName: 'customers-data',
          folderName: 'customersData',
          id: id,
        }
      }
      axios.post(`localhost:3000/aws/datasource`, payload)
    },
    getDataSourceStatus() {
      let id;
      let date = new Date();
      let today = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`;
      if (this.datasourceId === 'restaurantId') {
        id = localStorage.getItem('uid')
      } else {
        id = today
      }
      axios.get(`http://localhost:3000/aws/datasource/${id}`)
    },
    createMLModel() {

    }
  }
};
</script>
<style>
html {
  background-color: #eee
}
</style>
