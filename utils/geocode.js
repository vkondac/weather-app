const request = require('request')


const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1IjoidmtvbmRhYyIsImEiOiJjbDNqMWhpdngwY25yM2ttbmpxYXEzbXk4In0.VM8anbimFg1sX0WPJrkU2w&limit=1'
    request({url :url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services!')
        }else if(response.body.features.length === 0){
            callback('Unable to find location, try another search')
        }else{
            callback(undefined,{
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name
            })
        }
    })

}


module.exports = geocode