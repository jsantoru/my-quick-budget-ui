<template>
       <div class="centered-container">
        <md-content class="md-elevation-3" v-if="loginVisible">
            <div class="title">
                <div class="md-title">Login</div>
            </div>

            <div class="form">
                <md-field>
                    <label>Email</label>
                    <md-input v-model="credentials.username" autofocus required></md-input>
                </md-field>
                <md-field md-has-password>
                    <label>Password</label>
                    <md-input v-model="credentials.password" type="password" required></md-input>
                </md-field>
            </div>

            <div class="actions md-layout md-alignment-center-space-between">
                <a href="/resetpassword">Reset password</a>
                <md-button class="md-raised md-primary" @click="submitAuthentication()">Log in</md-button>
            </div>

            <div class="loading-overlay" v-if="loading">
                <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
            </div>
        </md-content>

        <md-content class="md-elevation-3" v-if="signUpVisible">
            <div class="title">
                <div class="md-title">Sign Up</div>
            </div>

            <div class="form">
                <md-field>
                    <label>Email</label>
                    <md-input v-model="newUser.email_address" autofocus required></md-input>
                </md-field>
                <md-field md-has-password>
                    <label>Password</label>
                    <md-input v-model="newUser.password" type="password" required></md-input>
                </md-field>
                <md-field md-has-password>
                    <label>Confirm Password</label>
                    <md-input required></md-input>
                </md-field>
            </div>
        </md-content>

        <md-snackbar :md-duration="Infinity" :md-active.sync="snackbar" md-persistent v-model="snackbar">
            <span>{{ message }}</span>
            <md-button class="md-primary" @click="snackbar=false">Retry</md-button>
            <md-button class="md-primary" @click="snackbar=false, loginVisible=false, signUpVisible=true">Register</md-button>
        </md-snackbar>
    </div>
</template>
<script>
  import Authentication from '@/components/Authentication'
  //import VueMaterial from 'vue-material'
  import 'vue-material/dist/vue-material.min.css'

  export default {
    data () {
      return {
        snackbar: false,
        validLogin: false,
        validSignUp: false,
        loginVisible: true,
        signUpVisible: false,
        loginPasswordVisible: false,
        signUpPasswordVisible: false,
        loading: false,
        rules: [ (value) => !!value || 'This field is required' ],
        credentials: {
          username: '',
          password: ''
        },
        newUser: {
          email_address: '',
          username: '',
          password: ''
        },
        message: ''
      }
    },
    methods: {
      submitAuthentication () {
        this.loading = true;
        // Using this setTimeout to "fake" a slow credential lookup
        setTimeout(() => {
            Authentication.authenticate(this, this.credentials, '/');
        }, 5000);
        //Authentication.authenticate(this, this.credentials, '/')
      },

      submitSignUp () {
        Authentication.signup(this, this.newUser, '/')
      }
    }
  }
</script>
<style lang="scss">
    .centered-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 100vh;
        .title {
            text-align: center;
            margin-bottom: 30px;
            img {
            margin-bottom: 16px;
            max-width: 80px;
            }
        }
        .actions {
            .md-button {
            margin: 0;
            }
        }
        .form {
            margin-bottom: 60px;
        }
        .background {
            background: url(../../assets/clouds.jpg);
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 0;
        }
        .md-content {
            z-index: 1;
            padding: 40px;
            width: 100%;
            max-width: 400px;
            position: relative;
        }
        .loading-overlay {
            //z-index: 10;
            top: 0;
            left: 0;
            right: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>
