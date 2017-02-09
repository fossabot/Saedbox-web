<template>
<div class="body_login">
<div class="container">
  <div class="row">
    <div class="col-md-2 col-md-offset-5">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Login</h3>
      </div>
        <div class="panel-body">
          <form accept-charset="UTF-8" @submit.prevent="login">
                  <fieldset>
              <div class="form-group">
                <input class="form-control" v-model="email" placeholder="E-mail" name="email" type="text">
            </div>
            <div class="form-group">
              <input class="form-control" v-model="pass" placeholder="Password" name="password" type="password" value="">
            </div>
            <div class="form-group otp">
              <input class="form-control" placeholder="OTP Password" name="otppassword" type="password" value="">
              <label>
                <a href="#" class="otp_q">OTP ?</a>
              </label>
            </div>
            <div class="checkbox">
                <label>
                  <input name="remember" type="checkbox" value="Remember Me"> Remember me
                </label>
              </div>
            <input class="btn btn-lg btn-success btn-block" type="submit" value="Login">
            <label>
              <a href="#" class="lost">Lost password ?</a>
            </label>
          </fieldset>
            </form>
        </div>
    </div>
  </div>
</div>
</div>
</div>
</template>

<script>
import auth from '../utils/auth'

export default {
  data () {
    return {
      email: '',
      pass: '',
      error: false
    }
  },
  methods: {
    login () {
      auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          console.log('good')
          this.$router.replace('/home')
        }
      })
    }
  }
}
</script>

<style scoped>

.body_login {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #247236;
  overflow: hidden;
  z-index: 10000;
  visibility: visible;
}

.container {
  width: 100%;
  margin-left : 40%;
  margin-top : 10%;
  position: relative ;
}

.col-md-2 {
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 3px;
  box-shadow: 0px 3px #14401e;
}

.otp {
  opacity: 0.5;
}

.otp:hover {
  opacity: 1;
}

.lost {
  font-size : 12px;
  color : grey;
}

.otp_q {
  position: absolute;
  margin-left: 250px;
  margin-top: -10px;
  font-size: 12px;
  color : grey;
  float: right;
}

.checkbox {
  margin-top: -30px;
}

.panel-title {
  padding-bottom: 10px;
}
</style>
