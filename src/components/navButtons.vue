<template>
    <div id= "nav">
        <div class="navContainer">
        <router-link to= "/">
            <img class="icon" alt="home icon" src="../assets/home.png"/>
        </router-link>
        </div>

         <div class="navContainer">
        <router-link to= "/about">
            <img class="icon" alt="about icon" src="../assets/info.png"/>
        </router-link>
        </div>

        
         <div class="navContainer">
        <router-link to= "/feature1">
            <img class="icon" alt="about icon" src="../assets/info.png"/>
        </router-link>
        </div>

        
         <div class="navContainer">
        <router-link to= "/feature2">
            <img class="icon" alt="rocket icon" src="../assets/rocket.png"/>
        </router-link>
        </div>

    </div>

</template>

<script>
export default {
    name: 'NavButtons',
    data() {
        return{

        }
    },
    methods: {

    }
}
</script>

<style scoped>
* {
    margin: 0;
}


#nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 0;
    justify-content: space-between;
}

.navContainer {
  background-color:lightcoral;
    padding: 20px;
}

.icon {
    width: 50px;
    height: 50px;
    background-color:lightcoral;
}

</style>