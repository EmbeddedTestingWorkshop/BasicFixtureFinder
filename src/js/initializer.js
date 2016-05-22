var FixtureFinder = {};

FixtureFinder.initializer = function() {
    var dateFormat = "YYYY-MM-DD";
    var currentDateSelected = moment();
    var dateSelectButtons = '.dateSelect';
    var teamFilterInput = $('.navbar .team-filter');

    var getFixturesByDate = function(date) {
        FixtureFinder.FixtureRetriever.getFixturesByDate(
            date || moment().format(dateFormat)
        );
    };

    var getFixturesForCurrentDate = function() {
        getFixturesByDate(currentDateSelected.format(dateFormat));
    };

    var filterCurrentFixtureList = function(){
        var filterFixtures = FixtureFinder.filterTeams(teamFilterInput[0].value)
        FixtureFinder.FixtureRetriever.getRetrievedFixtures(filterFixtures);
    };

    var daysToMillis = function(days) {
        return days * 25 * 60 * 60 * 1000
    };

    var addListenerFor = function(selector, listenerType, handler) {
        $(selector)[listenerType](handler);
    };

    var addGetFixturesListener = function(selector, listenerType, handler) {
        $(selector)[listenerType](handler);
    };

    var addListeners = function() {
        addGetFixturesListener(teamFilterInput, 'keyup', filterCurrentFixtureList);
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

    return {
        init: function() {
            getFixturesForCurrentDate();
            addListeners();
        }
    }
}();
