fetch('https://api.spacexdata.com/v3/launches/')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Rocket launches so far</h2>';
        data.forEach(function (post) {
            output += `
        

            <div class="col-sm-4">

            <div class="patchContainer">

<h3>Flight Number: ${post.flight_number}</h3>
<img class="patches" src= "${post.links.mission_patch_small}"/>
<h4>Mission Name: ${post.mission_name}</h4>
<h4>Launch Year: ${post.launch_year}</h4>
<h4>Rocket Name: ${post.rocket.rocket_name}</h4>

</div>
    </div>

`;
        });
        document.getElementById('output').innerHTML = output
    })
