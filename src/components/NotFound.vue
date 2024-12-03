<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <router-link to="/"> <span class="back-arrow">&larr;</span>&nbsp;Click Here to go back to Home</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
  height: 60vh;
  color: var(--secondary-color);
  line-height: 4rem;
  font-size: 2rem;
}

.not-found a{
    text-decoration: none;
    color: var(--secondary-color);
}

.back-arrow{
  animation-name: arrow-animation;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  display: inline-block;
}

@keyframes arrow-animation {
  0%{
    transform: translateX(-5px);
  }
  50%{
    transform: translateX(5px);
  }
  100%{
    transform: translateX(-5px);
  }
}

@media (max-width:768px) {
  .not-found {
    font-size: 1.5rem;
  }
}

@media (max-width:600px) {
  .not-found{
    font-size: 1rem;
  }
}
</style>
