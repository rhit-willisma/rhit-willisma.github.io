// https://stackoverflow.com/questions/31954089/how-can-i-reuse-a-navigation-bar-on-multiple-pages
$.get("/navigation.html", function(data){
    $("#nav-placholder").replaceWith(data)
})
$.get("/footer.html", function(data){
    $("#footer-placeholder").replaceWith(data)
})