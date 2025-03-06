<template>
  <nav>
    <div class="logo"><img src="../assets/logo_transparent_small.png" alt="Logo"></div>
    <ul class="mainbar">
      <li class="hide">
        <ThemeSwitch />
      </li>
      <li class="hide hover"><router-link to="/">Home</router-link></li>
      <li class="hide hover"><router-link to="/solutions">Our Solutions</router-link></li>
      <li class="hide hover"><router-link to="/products">Our Products</router-link></li>
      <li class="hide hover"><router-link to="/ourteam">Our Team</router-link></li>
      <li class="hide hover"><router-link to="/aboutus">About Us</router-link></li>
      <li class="stopShowing">
        <input type="checkbox" id="checkbox" v-model="isSidebarVisible" @change="handleToggle">
        <label for="checkbox" class="toggle" style="z-index: 100;">
          <div class="bars" id="bar1"></div>
          <div class="bars" id="bar2"></div>
          <div class="bars" id="bar3"></div>
        </label>
      </li>
    </ul>
    <ul :style="{ display: isSidebarVisible ? 'flex' : 'none' }" class="sidebar" ref="sidebar">
      <li><ThemeSwitch /></li>
      <li class="hover"><router-link to="/" @click="closeSidebar">Home</router-link></li>
      <li class="hover"><router-link to="/solutions" @click="closeSidebar">Our Solutions</router-link></li>
      <li class="hover"><router-link to="/products" @click="closeSidebar">Our Products</router-link></li>
      <li class="hover"><router-link to="/ourteam" @click="closeSidebar">Our Team</router-link></li>
      <li class="hover"><router-link to="/aboutus" @click="closeSidebar">About Us</router-link></li>
    </ul>
  </nav>
</template>

<script>
import ThemeSwitch from './ThemeSwitch.vue';

export default {
  components: {
    ThemeSwitch,
  },
  data() {
    return {
      isSidebarVisible: false,
    };
  },
  methods: {
    handleToggle(event) {
      this.isSidebarVisible = event.target.checked;
    },
    closeSidebar() {
      this.isSidebarVisible = false;
    },
    handleClickOutside(event) {
      const sidebar = this.$refs.sidebar;
      const toggle = document.getElementById('checkbox');
      if (
        sidebar && 
        !sidebar.contains(event.target) && 
        !toggle.contains(event.target) &&
        !event.target.closest('.toggle')
      ) {
        this.isSidebarVisible = false;
        toggle.checked = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>
  
  <style scoped>
    .logo img {
        width: 100px;
        margin-left: .5rem;
        cursor: pointer;
    }

    nav {
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: var(--primary-color);
    z-index: 100;
    min-height: 10vh;
    box-shadow: 2px 2px 4px lightblue;
    }

    .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    z-index: 10;
    background-color: var(--primary-color);
    box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(100px);
    gap: 2rem;
    }

    .sidebar a {
    text-decoration: none;
    color: var(--secondary-color)
    }

    .mainbar {
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    }

    .mainbar a {
    text-decoration: none;
    color: var(--secondary-color);
    }

    .hover a:hover{
    background-color: #c9e6e5;
    color: black;
    padding: .4rem .8rem;
    transition: .3s cubic-bezier(0, 0, 0.61, 0.83);
    cursor: pointer;
    }

    .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
    }

    /* button styling */
    .button {
    --border-right: 6px;
    --text-stroke-color: #3be0ef;
    --animation-color: #3be0ef;
    --fs-size: 1.5em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Nunito";
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
    }

    /* this is the text, when you hover on button */
    .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
    }

    /* hover */
    .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color))
    }

    /* The switch - the box around the slider */
    .switch {
    display: block;
    --width-of-switch: 3.5em;
    --height-of-switch: 2em;
    /* size of sliding icon -- sun and moon */
    --size-of-icon: 1.4em;
    /* it is like a inline-padding of switch */
    --slider-offset: 0.3em;
    position: relative;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
    cursor: pointer;
    }

    /* Hide default HTML checkbox */
    .switch input {
    opacity: 0;
    width: 0;
    height: 0;
    }

    /* The slider */
    .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 64px;
    height: 34px;
    }

    .switch input {
    opacity: 0;
    width: 0;
    height: 0;
    }

    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #73C0FC;
    transition: .4s;
    border-radius: 30px;
    }

    .slider:before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    border-radius: 20px;
    left: 2px;
    bottom: 2px;
    z-index: 2;
    background-color: #e8e8e8;
    transition: .4s;
    }

    .sun svg {
    position: absolute;
    top: 6px;
    left: 36px;
    z-index: 1;
    width: 24px;
    height: 24px;
    }

    .moon svg {
    fill: #73C0FC;
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1;
    width: 24px;
    height: 24px;
    }

   .sun svg {
    animation: rotate 15s linear infinite;
    }

    @keyframes rotate {
    
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
    }

    /* .switch:hover */.moon svg {
    animation: tilt 5s linear infinite;
    }

    @keyframes tilt {
    
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(-10deg);
    }

    75% {
        transform: rotate(10deg);
    }

    100% {
        transform: rotate(0deg);
    }
    }

    .input:checked + .slider {
    background-color: #183153;
    }

    .input:focus + .slider {
    box-shadow: 0 0 1px #183153;
    }

    .input:checked + .slider:before {
    transform: translateX(30px);
    }

    ul {
    list-style: none;
    }

    #checkbox {
    display: none;
    }

    .toggle {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition-duration: .3s;
    }

    .bars {
    width: 100%;
    height: 4px;
    background-color: var(--secondary-color);
    border-radius: 5px;
    transition-duration: .3s;
    }

    #checkbox:checked+.toggle .bars {
    margin-left: 13px;
    }

    #checkbox:checked+.toggle #bar2 {
    transform: rotate(135deg);
    margin-left: 0;
    transform-origin: center;
    transition-duration: .3s;
    }

    #checkbox:checked+.toggle #bar1 {
    transform: rotate(45deg);
    transition-duration: .3s;
    transform-origin: left center;
    }

    #checkbox:checked+.toggle #bar3 {
    transform: rotate(-45deg);
    transition-duration: .3s;
    transform-origin: left center;
    }

    @media (min-width:992px) {
    .collapse {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    }

    @media (max-width:330px) {
    .example-2 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .example-2 .icon-content .tooltip {
        left: 90%;
        transform: translateY(-60%);
    }
    }

    @media (max-width:800px) {
    .hide {
        display: none;
    }
    }

    @media (min-width:801px) {
    .stopShowing {
        display: none;
    }
    }

    @media (max-width:670px) {
      .mainbar{
        gap: 0.8rem;
      }
    }
  </style>