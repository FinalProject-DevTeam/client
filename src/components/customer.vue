<template>
<div class="cust">
  <div class="s">
    <div class="notification">

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Add customer data</p>
            <p class="subtitle">-</p>
            <div class="content">
              <div class="field is-horizontal">
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">name</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input v-model="name" class="input" type="text" placeholder=" name">
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">gender</label>
                </div>
                <div class="field-body">
                  <div class="select">
                    <select v-model="gender">
                     <option>Select gender</option>
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
                      <input v-model="email" class="input" type="email" placeholder=" email">
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
                      <input v-model="phonenumber" class="input" type="text" placeholder="phone ">
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
                      <input v-model="birthyear" class="input" type="text" placeholder="birth year">
                    </p>
                  </div>
                </div>
              </div>

              <div class="field is-grouped">
                <a class="button is-primary">Save data</a>
              </div>
            </div>

          </article>
        </div>
        <div class="tile is-parent is-8">
          <article class="tile is-child box">
            <p class="title">Customer Data</p>
            <div class="content">
              <table class="table is-hoverable">
                <thead>
                  <tr>
                    <th><abbr title="Position">Pos</abbr></th>
                    <th><abbr title="Played">Name</abbr></th>
                    <th><abbr title="Won">Gender</abbr></th>
                    <th><abbr title="Drawn">Email</abbr></th>
                    <th><abbr title="Lost">Phone Number</abbr></th>
                    <th><abbr title="Goals for">Birthyear</abbr></th>
                    <th><abbr title="Goals against">occupation</abbr></th>
                    <th><abbr title="Goals against">action </abbr></th>

                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th>1</th>
                    <td> jhlk
                    </td>

                    <td>23</td>
                    <td>12</td>
                    <td>3</td>
                    <td>68</td>
                    <td>35</td>
                    <td> <span class="button">edit</span> <span class="button">delete</span></td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>skjbss</td>
                    <td>38</td>
                    <td>20</td>

                    <td>7</td>
                    <td>65</td>
                    <td>35</td>
                    <td> <span class="button">edit</span> <span class="button">delete</span></td>
                  </tr>

                  <tr>
                    <th>5</th>
                    <td><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a></td>
                    <td>38</td>

                    <td>9</td>
                    <td>10</td>
                    <td>49</td>
                    <td>35</td>
                    <td> <span class="button">edit</span> <span class="button">delete</span></td>
                  </tr>


                </tbody>
              </table>
              {{name}} {{email}} {{birthyear}} {{phonenumber}} {{gender}} {{occupation}}

            </div>
          </article>
        </div>
      </div>
    </div>
  </div>


</div>
</template>

<script>
export default {
  name: 'customerpage',
  props: {
    msg: String
  },
  data: function() {
    return {
      name: 'ini data',
      gender: '',
      email: '',
      phonenumber: '',
      birthyear: '',
      occupation: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
