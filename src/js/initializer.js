var FixtureFinder = {};

FixtureFinder.initializer = function() {
    var dateFormat = "YYYY-MM-DD";
    
    var getFixturesByDate = function(date) {
        FixtureFinder.FixtureRetriever.getFixturesByDate(
            date || moment().format(dateFormat)
        );
    };

    var getFixturesForCurrentDate = function(){
        getFixturesByDate(moment().format(dateFormat));
    };
     
    return {
        init: function() {
            getFixturesForCurrentDate();
        }
    }
}();
