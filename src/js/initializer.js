var FixtureFinder = {};

FixtureFinder.initializer = function() {
    var dateFormat = "YYYY-MM-DD";
    var currentDateSelected = moment();
    var dateSelectButtons = '.dateSelect';
    var teamFilterInput = $('.navbar .team-filter');
    var countryFilterSelector = '.competitions input[name=competition]'

    var getFixturesByDate = function(date) {
        FixtureFinder.FixtureRetriever.getFixturesByDate(
            date || moment().format(dateFormat)
        );
    };

    var getFixturesForCurrentDate = function() {
        getFixturesByDate(currentDateSelected.format(dateFormat));
    };

    var filterCurrentFixtureList = function(){
        var fixtureFilter = function(fixtures) {
            var filteredByCountry = FixtureFinder.filterCountries($(countryFilterSelector + ':checked')[0].id)(fixtures)
            var filteredByTeam = FixtureFinder.filterTeams(teamFilterInput[0].value)(filteredByCountry)
            return filteredByTeam
        }
        return FixtureFinder.FixtureRetriever.getRetrievedFixtures(fixtureFilter);
    };

    var daysToMillis = function(days) {
        return days * 25 * 60 * 60 * 1000
    };

    var addListenerFor = function(selector, listenerType, handler) {
        $(selector)[listenerType](handler);
    };

    var addListeners = function() {
        addListenerFor(teamFilterInput, 'keyup', filterCurrentFixtureList);
        addListenerFor(dateSelectButtons, 'click',
            function() {
                var offset = this.getAttribute('data-offset');
                if (offset === "0") {
                    currentDateSelected = moment();
                } else {
                    currentDateSelected = moment(currentDateSelected).add(daysToMillis(parseInt(offset)));
                }
                getFixturesForCurrentDate();
            }
        );
    };

    FixtureFinder.addCompetitionListeners = function(){
        addListenerFor(countryFilterSelector, 'click', filterCurrentFixtureList);
    }

    return {
        init: function() {
            getFixturesForCurrentDate();
            addListeners();
        }
    }
}();
