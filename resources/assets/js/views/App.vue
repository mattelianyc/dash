<style lang="scss">
    #wrap {
        padding: 15px;
        text-align: center;
    }
    .is-parent {
      padding: 0.25rem !important;
    }
    .tile {
      border-radius: 0;
    }
</style>

<template>
  <div id="wrap">

    <div class="tile is-ancestor">

      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">June 3, 2018 </p>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">GoogleCal API</p>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">To Do List</p>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child box has-text-centered">
          <img src="https://wiki.openstreetmap.org/w/images/thumb/7/7f/Clock.svg/300px-Clock.svg.png" height="150" width="150">
        </article>
      </div>

    </div>

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-9">

        <div class="tile">

          <div class="tile is-parent">
            <article class="tile is-child box">
                <h1>?</h1>
                <router-view></router-view>
            </article>
          </div>

          <div class="tile is-8 is-vertical">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <div class="columns">
                  <div class="column">
                    <img src="//via.placeholder.com/250x250">
                  </div>
                  <div class="column has-text-left">
                    <p class="title">SpotifyAPI</p>
                    <br>
                    <p class="subtitle">artist</p>
                    <p class="subtitle">track</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

        </div>

        <div class="tile">

          <div class="tile is-4 is-parent">
            <article class="tile is-child box">
              <p class="title">NewsAPI</p>
              <p class="subtitle">Subtitle</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>

          <div class="tile is-4 is-parent">
            <article class="tile is-child box">
              <p class="title">NewsAPI</p>
              <p class="subtitle">Subtitle</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>

          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">NewsAPI</p>
              <p class="subtitle">Subtitle</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
        </div>

      </div>

      <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="content">
            <p class="title">Weather</p>
            <p class="subtitle">openweathermap API</p>
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
              <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
            </div>
          </div>
        </article>
      </div>
    </div>

</div>
</template>

<script>
    export default {}
</script>