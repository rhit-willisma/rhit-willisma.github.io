// https://stackoverflow.com/questions/31954089/how-can-i-reuse-a-navigation-bar-on-multiple-pages
$.get("/navigation.html", function(data){
    $("#nav-placholder").replaceWith(data)
})
$.get("/footer.html", function(data){
    $("#footer-placeholder").replaceWith(data)
})

$("article").hide()

const showHTML = "<span class=\"arrow\">▶</span> show project details";
const hideHTML = "<span class=\"arrow\">▼</span> hide project details";

$("article").before(`<button class="article-button">${showHTML}</button>`)
$(".article-button").click(function(){
    let nextText = $(this).html() == showHTML ? hideHTML : showHTML
    $(this).html(nextText)
    $(this).next().slideToggle()
})