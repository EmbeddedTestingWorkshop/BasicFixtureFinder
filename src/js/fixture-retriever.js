var FixtureRetriever = function(){
  
    var clearOldData = function(){
        $('.fixtures .noOf').empty();
        $('.fixtures .fixture').remove();
    };
    
    var fixtures = [];
    FixtureFinder.FixtureRetriever = {
        getRetrievedFixtures: function(filter) {
            FixtureParser.parseFixtures(filter(fixtures));
        },
        getFixturesByDate: function(date, filter){
            var url = 'http://rest-accachallenge.rhcloud.com/fixtures/'+date+'?callback=?';
            $('.spinner').fadeIn(1);
       
            clearOldData();

            $.ajax({
               type: 'GET',
               url: url,
               async: false,
               jsonpCallback: 'jsonCallback',
               contentType: "application/json",
               dataType: 'jsonp',
               success: function(json) {
                   fixtures = json.fixtures;
                   FixtureParser.parseFixtures(fixtures);
               },
               error: function(json) {
                   console.log(json.messages);
               }
           }).done(function () {
              $('.spinner').fadeOut(1);
           });
        }
    }
}();