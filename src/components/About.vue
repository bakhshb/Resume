<template>
 <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div class="w-100">
          <h1 class="mb-0">{{resume.data.fname}}
            <span class="text-primary">{{resume.data.lname}}</span>
          </h1>
          <div class="subheading mb-5">{{resume.data.address}}· {{resume.data.mobile}}·
            <a :href="'mailto:' + resume.data.email">{{resume.data.email}}</a>
          </div>
          <p class="lead mb-5">{{resume.data.goal}}</p>
          <div class="social-icons">
            <a :href="resume.data.linkedin">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a :href="resume.data.github">
              <i class="fab fa-github"></i>
            </a>
            <a :href="resume.data.twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a :href="resume.data.facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
      
</template>

<script>
export default {
  name: "About",
  computed:{
    resume(){
      return this.$store.state.data
    }
  }
};
</script>