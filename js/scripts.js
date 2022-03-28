$(document).ready(function() {
  $("#favorite").submit(function(event) {
    event.preventDefault();
    const favThings =$("#favorite-things").val().split(",");
    const topThree = [];
    topThree.push(favThings[1].trim());
    topThree.push(favThings[0].trim());
    topThree.push(favThings[2].trim());

    $("#favorite-output").append("<li>"+topThree[0] +"</li>" + "<li>"+ topThree[1] + "</li>" + "<li>" + topThree[2]+ "</li>");

    console.log(favThings, topThree);
  });

});

