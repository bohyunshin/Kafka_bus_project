var mymap = L.map('mapid').setView([37.56508409010426, 126.93838477134705], 20);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1Ijoic2JoMDYxMyIsImEiOiJja2p2ZWVhOXYwYjV6MnpsZnl4NWtuZnAxIn0.XIXUuZ8Pwv-NsxJkVTlDlQ'
        }).addTo(mymap);

        mapMarkers1 = [];
        mapMarkers2 = [];
        mapMarkers3 = [];

        var source = new EventSource('/topic/geodata_final');
        source.addEventListener('message', function(e){
            console.log('Message');
            obj = JSON.parse(e.data);
            console.log(obj);

            if(obj.busline == '00001'){
                for (var i = 0; i < mapMarkers1.length; i++){
                mymap.removeLayer(mapMarkers1[i]);
                }
                marker1 = L.marker([obj.latitude, obj.longitude]).addTo(mymap);
                mapMarkers1.push(marker1);
            }

            if(obj.busline == '00002'){
                for (var i = 0; i < mapMarkers2.length; i++){
                mymap.removeLayer(mapMarkers2[i]);
                }
                marker2 = L.marker([obj.latitude, obj.longitude]).addTo(mymap);
                mapMarkers2.push(marker2);
            }

        }, false);