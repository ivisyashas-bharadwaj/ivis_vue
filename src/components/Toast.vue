<template>
    <div class="toast-container">
      <div 
        class="toast" 
        :class="{ 'expanded': isExpanded }" 
        @mouseenter="isExpanded = true" 
        @mouseleave="isExpanded = false"
      >
        <div class="toast-tip">
          <span class="tip-text"> <span class="sereno">SERENO</span> is out now</span>
          <div @click="handleDownload">
                <a><svg
        viewBox="0 0 256 256"
        height="22"
        width="28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"
          fill="currentColor"
        ></path></svg></a>
          </div>
        </div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'ToastNotification',
    setup() {
      const isExpanded = ref(false)
  
      const handleDownload = () => {
        console.log('Downloading Sereno...')
        window.location.href = 'https://ivislabsdocs.s3.ap-south-1.amazonaws.com/Sereno_setup.exe'
      }  
      return {
        isExpanded,
        handleDownload
      }
    }
  }
  </script>
  
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,400..700;1,400..700&display=swap');
  .toast-container {
    position: fixed;
    top: 200px;
    right: 25px;
    z-index: 1000;
  }
  
  .toast {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    transition: all 0.3s ease;
    width: 220px;
    transform: translateX(160px);
    border-radius: 20px 20px 20px 20px;
  }
  
  .toast.expanded {
    transform: translateX(25px);
  }
  
  .toast-tip {
    background: 
    linear-gradient(#0007, #0000),
    #123;
    color: white;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .tip-text {
    font-weight: bold;
    white-space: nowrap;
    font-family: "Expletus Sans", sans-serif;
  }

  .sereno {
  font-family: 'Expletus Sans', sans-serif;
  font-weight: 600;
  letter-spacing: 2.26px;
  color: #25f9fc;
  text-shadow: 0 0 5px rgba(37, 249, 252, 0.7);
}
  
  .toast-content {
    padding: 15px;
    display: flex;
    justify-content: center;
  }
  a {
  color: rgba(255, 255, 255, 0.692);
  /* padding: 10px 15px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.397);
  background: rgba(255, 255, 255, 0.068);
  overflow: hidden;
  font-size: 0.9rem;
  font-weight: 600;
  gap: 8px;
  border-radius: 5px;
  margin: 0 5px;
  transition: 0.2s;
  border: 1px solid transparent;
}

a:hover {
  border-color: rgba(255, 255, 255, 0.623);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.144),
    rgba(255, 255, 255, 0.247),
    rgba(255, 255, 255, 0.39)
  );
  box-shadow: 0 6px rgba(255, 255, 255, 0.623);
  transform: translateY(-6px);
}

a:active {
  transform: translateY(2px);
  box-shadow: none;
} 

@keyframes firework {
  0% { transform: translate(var(--x), var(--initialY)); width: var(--initialSize); opacity: 1; }
  50% { width: 0.5vmin; opacity: 1; }
  100% { width: var(--finalSize); opacity: 0; }
}

/* @keyframes fireworkPseudo {
  0% { transform: translate(-50%, -50%); width: var(--initialSize); opacity: 1; }
  50% { width: 0.5vmin; opacity: 1; }
  100% { width: var(--finalSize); opacity: 0; }
}
 */
.firework,
.firework::before,
.firework::after
{
  --initialSize: 0.5vmin;
  --finalSize: 45vmin;
  --particleSize: 0.2vmin;
  --color1: yellow;
  --color2: khaki;
  --color3: white;
  --color4: lime;
  --color5: gold;
  --color6: mediumseagreen;
  --y: -30vmin;
  --x: -50%;
  --initialY: 60vmin;
  content: "";
  animation: firework 2s infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, var(--y));
  width: var(--initialSize);
  aspect-ratio: 1;
  background: 
    /*
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 0% 0%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 100% 0%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 100% 100%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 0% 100%,
    */
    
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 50% 0%,
    radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 100% 50%,
    radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 50% 100%,
    radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 0% 50%,
    
    /* bottom right */
    radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 80% 90%,
    radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 95% 90%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 90% 70%,
    radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 100% 60%,
    radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 55% 80%,
    radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 70% 77%,
    
    /* bottom left */
    radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 22% 90%,
    radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 45% 90%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 33% 70%,
    radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 10% 60%,
    radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 31% 80%,
    radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 28% 77%,
    radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 13% 72%,
    
    /* top left */
    radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 80% 10%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 95% 14%,
    radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 90% 23%,
    radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 100% 43%,
    radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 85% 27%,
    radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 77% 37%,
    radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 60% 7%,
    
    /* top right */
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 22% 14%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 45% 20%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 33% 34%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 10% 29%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 31% 37%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 28% 7%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 13% 42%
    ;
  background-size: var(--initialSize) var(--initialSize);
  background-repeat: no-repeat;
}

.firework::before {
  --x: -50%;
  --y: -50%;
  --initialY: -50%;
/*   transform: translate(-20vmin, -2vmin) rotate(40deg) scale(1.3) rotateY(40deg); */
  transform: translate(-50%, -50%) rotate(40deg) scale(1.3) rotateY(40deg);
/*   animation: fireworkPseudo 2s infinite; */
}

.firework::after {
  --x: -50%;
  --y: -50%;
  --initialY: -50%;
/*   transform: translate(44vmin, -50%) rotate(170deg) scale(1.15) rotateY(-30deg); */
  transform: translate(-50%, -50%) rotate(170deg) scale(1.15) rotateY(-30deg);
/*   animation: fireworkPseudo 2s infinite; */
}

.firework:nth-child(2) {
  --x: 30vmin;
}

.firework:nth-child(2),
.firework:nth-child(2)::before,
.firework:nth-child(2)::after {
  --color1: pink;
  --color2: violet;
  --color3: fuchsia;
  --color4: orchid;
  --color5: plum;
  --color6: lavender;  
  --finalSize: 40vmin;
  left: 30%;
  top: 60%;
  animation-delay: -0.25s;
}

.firework:nth-child(3) {
  --x: -30vmin;
  --y: -50vmin;
}

.firework:nth-child(3),
.firework:nth-child(3)::before,
.firework:nth-child(3)::after {
  --color1: cyan;
  --color2: lightcyan;
  --color3: lightblue;
  --color4: PaleTurquoise;
  --color5: SkyBlue;
  --color6: lavender;
  --finalSize: 35vmin;
  left: 70%;
  top: 60%;
  animation-delay: -0.4s;
}

  
  </style>