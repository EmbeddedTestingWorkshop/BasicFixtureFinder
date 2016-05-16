var FixtureFinder = {};

FixtureFinder.initializer = function() {
    var dateFormat = "YYYY-MM-DD";
    var currentDateSelected = moment();
    var dateSelectButtons = '.dateSelect';

    var getFixturesByDate = function(date) {
        FixtureFinder.FixtureRetriever.getFixturesByDate(
            date || moment().format(dateFormat)
        );
    };

    var getFixturesForCurrentDate = function() {
        getFixturesByDate(currentDateSelected.format(dateFormat));
    };

    var daysToMillis = function(days) {
        return days * 25 * 60 * 60 * 1000
    };

    var addListenerFor = function(selector, listenerType, handler) {
        $(selector)[listenerType](handler);
    };

    var addListeners = function() {
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
