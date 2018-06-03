<template>
    <div id="wrap" style="padding: 10px;">
    <div class="columns">
        <div class="column">
            <div class="box">
                <h1>dash</h1>
                <p>
                <router-link :to="{ name: 'home' }">Home</router-link>
                </p>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <div class="card-content">
                    <p class="title">UPCOMING</p>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <div class="card-content">
                    <p class="title">TO DO</p>
                    <ul>
                        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                        <li>Ut non enim metus.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="box">
                <router-view></router-view>
            </div>
        </div>
    </div>
    <div class="columns">
        <div class="column is-one-quarter">
            <div class="card">
                <div class="card">
                  <div class="card-content">
                    <p class="title">
                      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p class="subtitle">
                      Jeff Atwood
                    </p>
                  </div>
                </div>
            </div>
        </div>
        <div class="column is-half">
            <div class="card">
              <div class="card-content">
                <div class="columns">
                    <div class="column is-one-half">
                        <img src="http://via.placeholder.com/250x250">
                    </div>   
                    <div class="column is-one-half">
                        <h2>artist</h2>
                        <h4>title</h4>
                    </div>   
                </div>
              </div>
            </div>
        </div>
        <div class="column is-one-quarter">
            <div class="card">
                <div class="card">
                  <div class="card-content">
                    <p class="title">
                      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p class="subtitle">
                      Jeff Atwood
                    </p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="card">
                <div class="card">
                  <div class="card-content">
                    <p class="title">
                      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p class="subtitle">
                      Jeff Atwood
                    </p>
                  </div>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <div class="card">
                  <div class="card-content">
                    <p class="title">
                      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p class="subtitle">
                      Jeff Atwood
                    </p>
                  </div>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <div class="card">
                  <div class="card-content">
                    <p class="title">
                      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p class="subtitle">
                      Jeff Atwood
                    </p>
                  </div>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <div class="card">
                  <div class="card-content">
                    <p class="title">
                      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p class="subtitle">
                      Jeff Atwood
                    </p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {}
</script>