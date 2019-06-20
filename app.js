


function populateWikiContainer(show){
	$.ajax({
		url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + show,
		method: "GET"
	}).then(function(response){
        console.log(response);
    });
}



$("#submit").on("click", function(event){
    event.preventDefault();
    var localShow = $("#wikiSearch").val();
    console.log(localShow);
    populateWikiContainer(localShow);
});


// var info = Jquery('Invasion_of_Normandy);
// console.log(info);