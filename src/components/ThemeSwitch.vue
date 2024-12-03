<template>
    <label class="switch" id="theme_switch">
      <span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="#ffd43b">
                <circle r="5" cy="12" cx="12"></circle>
                <path
                  d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z">
                </path>
              </g>
            </svg></span>
      <span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z">
              </path>
            </svg></span>
      <input type="checkbox" class="input" v-model="isDarkTheme">
      <span class="slider"></span>
    </label>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDarkTheme: JSON.parse(localStorage.getItem('theme')) || false,
      };
    },
    watch: {
      isDarkTheme(newValue) {
        localStorage.setItem('theme', JSON.stringify(newValue));
        document.body.classList.toggle('dark-theme', newValue);
      }
    },
    mounted() {
      document.body.classList.toggle('dark-theme', this.isDarkTheme);
    }
  };
  </script>
  
  <style>
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

    /* .switch:hover */.sun svg {
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
  </style>
  