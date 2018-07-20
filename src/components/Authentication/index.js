import Axios from 'axios';
import router from '@/router';

const querystring = require('querystring');

//const BudgetManagerAPI = 'https://x10qn6av83.execute-api.us-east-2.amazonaws.com/dev'
const BudgetManagerAPI = 'http://localhost:3000'

export default {
    user: {authenticated: false},

    authenticate (context, credentials, redirect) {

       var requestBody = {
           user_name: credentials.username,
           RAWpassword: credentials.password
       }

       var config = {
           headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
           }
       }

       Axios.post(`${BudgetManagerAPI}/login`, querystring.stringify(requestBody), config)
        .then(res => {
            context.$cookie.set('token',res.data.token,1)
            context.validLogin = true
            this.user.authenticated = true

            if(redirect) router.push(redirect)
        }).catch(err => {
            context.snackbar = true
            context.message = err
        })
    },

    signup (context, credentials, redirect) {
        var requestBody = {
            user_name: credentials.username,
            RAWpassword: credentials.password,
            email_address: credentials.email_address
        }

        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlended'
            }
        }

        Axios.post(`${BudgetManagerAPI}/registration`, querystring.stringify(requestBody), config)
         .then(res => {
             context.$cookie.set('token', res.data.token, 1)
             context.validSignUp = true
             this.user.authenticated = true

             if (redirect) router.push(redirect)
         }).catch(err => {
             context.snackbar = true
             context.message = err
         })
    },

    checkAuthentication () {
        const token = document.cookie

        if (token) this.user.authenticated = true
        else this.user.authenticated = false
    },

    getAuthenticationHeader (context) {
        return `Bearer ${context.$cookie.get('token')}`
    }
}