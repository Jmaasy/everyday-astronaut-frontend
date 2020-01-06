var getSingleLaunch = function(id) {
    return jQuery.ajax({url: "http://127.0.0.1:5000/launch/1069"})
}

var getLaunches = function(id) {
    return jQuery.ajax({url: "http://127.0.0.1:5000/all"})
}