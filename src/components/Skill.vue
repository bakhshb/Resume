<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div class="w-100">
        <h2 class="mb-5">Skills</h2>

        <div class="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <i class="fab fa-html5"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-css3-alt"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-js-square"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-angular"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-react"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-node-js"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-sass"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-less"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-wordpress"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-gulp"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-grunt"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-npm"></i>
          </li>
        </ul>

        <div class="subheading mb-3">Hard</div>
        <ul class="fa-ul mb-0"  v-for=" hard in resume.data.skill.hard_skills" :key="hard.id">
          <li>
            <i class="fa-li fa fa-check"></i>
            {{hard}}
			    </li>
        </ul>
		
		<div class="subheading mb-3">soft</div>
        <ul class="fa-ul mb-0"  v-for=" soft in resume.data.skill.soft_skills" :key="soft.id">
          <li>
            <i class="fa-li fa fa-check"></i>
            {{soft}}
			    </li>
        </ul>
		
		<div class="subheading mb-3">Language</div>
        <ul class="fa-ul mb-0"  v-for=" language in resume.data.skill.languages" :key="language.id">
          <li>
            <i class="fa-li fa fa-check"></i>
            {{language}}
			    </li>
        </ul>
      </div>
    </section>
</template>

<script>
export default {
  name: "Skill",
  computed: {
    resume() {
      return this.$store.state.data;
    }
  }
};
</script>