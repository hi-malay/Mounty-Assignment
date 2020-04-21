 <template>
<div>
    
    <h1>
    Vue Js Get data from API
    
    </h1>
    
    <div>
    <div v-for="post in posts": key="pos.id" class="post">
  <h3>{{post.title}}</h3>
    <p>{{post.adult}}</p>
<p>{{post.overview}}</p>
<p>{{post.release_date}}</p>
<p>{{post.genre_ids}}</p>
<p>{{post.original_language}}</p>
<p>{{post.popularity}}</p>
<p>{{post.vote_average}}</p>
<p>{{post.vote_count}}</p>>
    </div>
</div>
    </div>

</template>

export default{
data()
{
return {
posts:[]
}
},
mounted()
{
this.$http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1')  // This takes out the list of Top rated movies
.then (function(res){
this.post=res.body;

})
.catch(function (error){
console.log('Error:',error);
}) 
}


}


<script>
<style type='text/css'>
    .post{
        background:#ccc;
        margin-botton:20px;
        padding:10px
    }
</style>

</script>










