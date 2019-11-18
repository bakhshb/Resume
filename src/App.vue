<template>
  <div v-if="!loading">
    <Menu />
    <About/>
    <hr class="m-0">
    <Experience/>
    <hr class="m-0">
    <Education/>
    <hr class="m-0">
    <Skill/>
    <hr class="m-0">
    <Contact/>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

// import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: "App",
  components: {
    About,
    Menu,
    Experience,
    Education,
    Skill,
    Contact
  },
  created() {
    return this.$store.dispatch("callApi");
  },
  computed: {

    loading() {
      return this.$store.state.loading;
    }
  }
};
</script>