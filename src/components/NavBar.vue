<template>
  <header>
      <nav class="container">
          <div class="branding">
              <router-link class="header" :to="{name: 'home'}">FireBlog</router-link> <!--this method is done so you dont have to do it manuelly-->
          </div>
          <div class="nav-links">
              <ul>
                  <router-link class="link" to="#">Home</router-link>
                  <router-link class="link" to="#">Blogs</router-link>
                  <router-link class="link" to="#">Create Post</router-link>
                  <router-link class="link" to="#">Login/Register</router-link>
              </ul>
          </div>
      </nav>
      <menuIcon/>
      <transition></transition>
  </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg';
export default {
    name: 'navigation',
    components:{
        menuIcon
    }
};
</script>

<style lang="scss" scoped>

</style> <!-- will keep the styles within this component -->