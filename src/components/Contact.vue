<template>
  <section id="contact" class="resume-section p-3 p-lg-5 d-flex align-items-center">
    <div class="w-100">
      <h2 class="w-100">Contact Me</h2>
      <div class="forms" id>
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8">
            <form @submit.prevent="submitform" method="POST">
              <div class="form-errors" style="display:none;"></div>

              <div class="form-group row textinput required">
                <div class="field-errors" style="display:none;"></div>

                <label for="name" class="col-sm-2 col-form-label">
                  Name
                  <span class="asterisk">*</span>
                </label>

                <div class="col-sm-8">
                  <input
                    type="text"
                    name="name"
                    class="form-control textinput"
                    required
                    id="name"
                    v-model="contactme.name"
                  >
                </div>
              </div>

              <div class="form-group row emailinput required">
                <div class="field-errors" style="display:none;"></div>

                <label for="email" class="col-sm-2 col-form-label">
                  Email
                  <span class="asterisk">*</span>
                </label>

                <div class="col-sm-8">
                  <input
                    type="email"
                    name="email"
                    autocomplete="email"
                    class="form-control emailinput"
                    required
                    id="email"
                    v-model="contactme.email"
                  >
                </div>
              </div>

              <div class="form-group row textarea required">
                <div class="field-errors" style="display:none;"></div>

                <label for="message" class="col-sm-2 col-form-label">
                  Message
                  <span class="asterisk">*</span>
                </label>

                <div class="col-sm-8">
                  <textarea
                    name="message"
                    cols="40"
                    rows="10"
                    class="form-control textarea"
                    required
                    id="message"
                    v-model="contactme.message"
                  ></textarea>
                </div>
              </div>

            <div class="form-group row">
                <div class="field-errors" style="display:none;"></div>

                <label for="email" class="col-sm-2 col-form-label">
                  Are you a human
                  <span class="asterisk">*</span>
                </label>

                <div class="col-sm-8">
                  <vue-recaptcha ref="recaptcha" :sitekey="sitekey" :loadRecaptchaScript="true" @verify="onVerify">
                  </vue-recaptcha>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm-4"></div>
                <div class="col-sm-8">
                  <button class="btn btn-primary" type="submit" value="Submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="form-success" v-bind:style="{display: showMessage}">
          <p>Thank You</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: "Contact",
  components: { VueRecaptcha },
  data: function() {
    return {
      contactme: [], 
      sitekey: '6LdKU8QUAAAAAKNSrM1DqmIPeditLzu9N8RYx8Ui', 
      verify: false
    };
  },
  computed: {
    showMessage() {
      return this.$store.state.showmsg;
    }
  },
  methods: {
    submitform() {
      if (this.verify === true){
        return this.$store.dispatch("savecontact", this.contactme)
        .then(response => {
          // show success message
          console.log("Success");
          return this.$store.dispatch("sendemail", this.contactme);
        })
        .catch(err => {
          // show error message
          console.log(err);
        });
      }else{
        this.$refs.recaptcha.reset()
      }
    },
    onVerify: function (response) {
      this.verify = true
      console.log('Verify: ' + response)
    }
  }
};
</script>
