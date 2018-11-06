import axios from 'axios';

const app = new Vue({
    el:'#app',
    data:{
        filmes:[]
    },
    mounted(){
        fetch("https://api.themoviedb.org/3/search/movie?api_key=a4accb20c5e0a70f856e96b508717ccd&language=en-US&query=")
        // a4accb20c5e0a70f856e96b508717ccd
        .then(response => response.json())
        .then((data) => {
            this.filmes = data;
            console.log(filmes);
        })
    },
    mounted(){
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=a4accb20c5e0a70f856e96b508717ccd')
        .then(response => {
            console.log('entrou');
            this.filmes = response;
            console.log(this.filmes);
        })
    },
    template:`    
        <div v-for="filme in filmes">
            <li>{{filme.title}}</li>
        </div>
    `

})

// https://developers.themoviedb.org/