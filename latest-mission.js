 fetch('https://api.spacexdata.com/v3/launches/latest')
            .then(result => result.json())
            .then((data) => {
                createInfo(data);
            })
            .catch(err => console.log(err))

        function createInfo(result) {

            var spaceImage = document.getElementById('flickrImage');
            spaceImage.innerHTML += "<h2>Mission: " + result.mission_name + "</h2><br>";
            spaceImage.innerHTML += "<img src= " + result.links.flickr_images[6] + "/>";


            var details = document.getElementById('latestMission');
            details.innerHTML += "<p> " + result.details + "</p>";

            var moreDetails = document.getElementById('details');
            moreDetails.innerHTML += "<p>Rocket Name: "  + result.rocket.rocket_name + "</p>";
            moreDetails.innerHTML += "<p>Launch Date: "  + result.launch_date_local + "</p>";
            moreDetails.innerHTML += "<p>Launch Site: "  + result.launch_site.site_name_long + "</p>";
            moreDetails.innerHTML += "<p>Nationality: " + result.rocket.second_stage.payloads[0].nationality + "</p>";



        }
