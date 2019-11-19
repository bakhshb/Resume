<template>
  <div>
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
import Menu from "./Menu";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skill from "./Skill";
import Contact from "./Contact";

export default {
  name: "Home",
  components: {
    Menu,
    About,
    Experience,
    Education,
    Skill,
    Contact

  },
}
</script>
