var FixtureRetriever = function() {

    var clearOldData = function() {
        $('.fixtures .info .numberOfFixtures').empty();
        $('.fixtures .fixture').remove();
    };

    var fixtures = [];
    FixtureFinder.FixtureRetriever = {
        getRetrievedFixtures: function(filter) {
            var filteredFixtures = filter(fixtures);
            FixtureParser.parseFixtures(filteredFixtures);
            FixtureParser.populateDropdown(filteredFixtures);
        },
        getFixturesByDate: function(date, filter) {
            var url = 'http://rest-accachallenge.rhcloud.com/fixtures/' + date + '?callback=?';
            $('.spinner').fadeIn(1);

            FixtureFinder.setDate(date);
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
                    FixtureParser.populateDropdown(fixtures);
                },
                error: function(json) {
                    console.log(json.messages);
                }
            }).done(function() {
                $('.spinner').fadeOut(1);
            });
        }
    }
}();
