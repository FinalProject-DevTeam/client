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
            <span class="button is-medium is-info" @click="getModelStatus()">Get Status ML Model</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success" @click="createEvaluation()">Create Evaluation</span>
            <span class="button is-medium is-info" @click="getEvaluationStatus()">Get Status Evaluation</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success" @click="createNewBatchPrediction()">Create Prediction</span>
            <span class="button is-medium is-info" @click="getPredictionStatus()">Get Status Prediction</span>
          </div>

          <div class="buttons">
            <span class="button is-medium is-success" @click="getPrediction()">Get Prediction</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success" @click="deleteDataSource()">Delete data Source</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success" @click="deleteModel()">Delete ML Model</span>
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
  mounted() {
    //do something after mounting vue instance
    if (localStorage.getItem('isLogin') === 'false') {
      this.$router.push('/')
    }
  },
  methods: {
    async uploadToS3() {
      let date = new Date();
      let today = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`;
      if (this.dataName === 'customers-data') {
        let id = localStorage.getItem('uid');
        let customersData = await axios.get('https://server.rika.website/customer/listbydate', {
          headers: {
            uid: id,
          }
        })
        let folderName = 'customersData';
        let columns = {
          gender: "gender",
          birthYear: "birthyear",
          occupation: "occupation",
        }
        let arrData = customersData.data.data.map((datum) => {
          return [datum.genderML, Number(datum.birthYear), datum.occupationML];
        })
        let payload = {
          arrData: arrData,
          dataName: this.dataName,
          folderName: folderName,
          columns: columns,
          id: id,
        }
        let {
          data
        } = await axios.post('https://server.rika.website/aws/s3', payload)
        console.log(data);
      } else {
        let id = today
        let folderName = 'transactionsData';
        let columns = {
          gender: "gender",
          birthYear: "birthyear",
          occupation: "occupation",
          ordered_item: "ordered_item",
        }
        let transactionsData = await axios.get('https://server.rika.website/populate')
        console.log(transactionsData.data.length)
        // let arrData = [];
        // transactionsData.data.map((datum) => {
        //   return datum.itemsOrderedML.map((item) => {
        //     return arrData.push([datum.customer.genderML, +(datum.customer.birthYear), datum.customer.occupationML, item]);
        //   })
        // })
        // // console.log(arrData);
        // let payload = {
        //   arrData: arrData,
        //   dataName: this.dataName,
        //   folderName: folderName,
        //   columns: columns,
        //   id: id,
        // }
        // let {
        //   data
        // } = await axios.post('https://server.rika.website/aws/s3', payload)
        // console.log(data);
      }
    },
    async createDataSource() {
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
          dataName: 'transactions-data',
          folderName: 'transactionsData',
          id: id,
        }
      }
      let {
        data
      } = await axios.post(`https://server.rika.website/aws/datasource`, payload)
      console.log(data);
    },
    async getDataSourceStatus() {
      let date = new Date();
      let today = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`;
      if (this.datasourceId === 'restaurantId') {
        let id = `${localStorage.getItem('uid')}-${today}`
        let {
          data
        } = await axios.get(`https://server.rika.website/aws/datasource/${id}`)
        console.log(data);
      } else {
        let id = today
        let {
          data
        } = await axios.get(`https://server.rika.website/aws/datasource/${id}`)
        console.log(data);
      }
    },
    deleteDataSource() {
      if (this.datasourceId === 'restaurantId') {
        let id = localStorage.getItem('uid')
        axios.delete(`https://server.rika.website/aws/datasource/${id}`);
      } else {
        let date = new Date();
        let today = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`;
        let id = today;
        axios.delete(`https://server.rika.website/aws/datasource/${id}`);
      }
    },
    async createMLModel() {
      let {
        data
      } = await axios.post(`https://server.rika.website/aws/model`)
      console.log(data);
    },
    async getModelStatus() {
      let date = new Date();
      let today = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`;
      let {
        data
      } = await axios.get(`https://server.rika.website/aws/model/${today}`)
      console.log(data);
    },
    async createEvaluation() {
      let {
        data
      } = await axios.post(`https://server.rika.website/aws/evaluation`)
    },
    async getEvaluationStatus() {
      let date = new Date();
      let today = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`;
      let {
        data
      } = await axios.get(`https://server.rika.website/aws/evaluation/${today}`)
      console.log(data);
    },
    async createNewBatchPrediction() {
      let id = localStorage.getItem('uid')
      let {
        data
      } = await axios.post(`https://server.rika.website/aws/prediction/${id}`)
      console.log(data);
    },
    async getPredictionStatus() {
      let id = localStorage.getItem('uid')
      let {
        data
      } = await axios.get(`https://server.rika.website/aws/predictionstatus/${id}`)
      console.log(data);
    },
    async getPrediction() {
      let id = localStorage.getItem('uid')
      let {
        data
      } = await axios.get(`https://server.rika.website/aws/prediction/${id}`)

      let resultArr = [];
      for (let i = 1; i < data.length; i++) {
        let index = 0;
        let maxNumber = 0;
        let food = '';
        for (let j = 0; j < data[i].length; j++) {
          if (data[i][j] > maxNumber) {
            maxNumber = data[i][j];
            index = j;
            food = data[0][j];
          }
        }
        resultArr.push(food)
      }

      let customer = await axios.get(`https://server.rika.website/customer/listbydate`, {
        headers: {
          uid: id,
        }
      });


      let dataCustomers = customer.data.data;
      for (let i = 0; i < dataCustomers.length; i++) {
        let findDot = resultArr[i].indexOf('.');
        if (findDot === -1) {
          dataCustomers[i].foodfav = resultArr[i];
        } else {
          dataCustomers[i].foodfav = resultArr[i].split('.').join(' ');
        }
      }
      dataCustomers.map(customer => {
        axios.post(`https://server.rika.website/customer/setdata/${customer.id}`, customer)
          .then(result => {
            console.log('berhasil', '=>', result.data)
          })
      })

    }
  }
};
</script>

