String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

var FixtureParser = function(){
    var getLocalKickOffTime = function(date, utcTime){
        if(utcTime.indexOf(":") > -1){
            var utcKOTime  = moment.utc(moment.utc(date + "T" + utcTime).format('YYYY-MM-DD HH:mm:ss')).toDate();
            localKOTime = moment(utcKOTime).format("HH:mm");
        } else{
           localKOTime = utcTime;
        }
        return localKOTime;
    };

    var getFixtureAsHTMLElement = function(fixture, index){
        var listElement = '<tr class="fixture">';
            listElement = listElement + '<td class="competition"><div class="flag flag-'+fixture.country+'"></div>' + fixture.competition + '</td>';
            listElement = listElement + '<td class="kickOffDate" ><small>' + getLocalKickOffTime(fixture.kickOff.date, fixture.kickOff.time) + '</small></td>';
            listElement = listElement + '<td class="home team"><strong>' + fixture.homeTeam +'</strong></td>';
            listElement = listElement + '<td class="score">' + fixture.score.awayGoals + ':' + fixture.score.homeGoals + '</td>';
            listElement = listElement + '<td class="away team"><strong>' + fixture.awayTeam + '</strong></td>';
            listElement = listElement + '</tr>';
        return listElement;
    };

    return {
        parseFixtures: function(fixtures){
            var localString = FixtureFinder.localizeString("fixtures");
            $('.fixtures .fixture').remove();
            $('.fixtures .numberOfFixtures').text(fixtures.length + ' ' + localString);
            $.each(fixtures, function(index, fixture ) {
               $('.fixtures .table').append(getFixtureAsHTMLElement(fixture, index));
            });
        },
        populateDropdown: function(fixtures) {
            var countries = {}
            $.each(fixtures, function(index, fixture ) {
                if(countries[fixture.country]) {
                    countries[fixture.country] = countries[fixture.country] + 1
                }
                else {
                    countries[fixture.country] = 1
                }

            });
            $('.competitions')
                        .append('<li>'+
                                  '<input type="radio" id="all"name="competition" value="0">' +
                                  '<label for="all"><span class="flag flag-all"></span>' +
                                    '<strong><span class="en-txt">All Countries & Comperirions</span></strong> ' +
                                    '<small><span class="en-txt">(' + (fixtures.length - 1) +')</span></small>' +
                                  '</label>' +
                                '</li>');
            Object.keys(countries).forEach(
                function(country, index) {
                    $('.competitions')
                        .append('<li>'+
                                  '<input type="radio" id="' + country + '"name="competition" value="' + (index + 1) + '">' +
                                  '<label for="' + country + '"><span class="flag flag-' + country + '"></span>' +
                                    '<strong><span class="en-txt">' + country +'</span></strong> ' +
                                    '<small><span class="en-txt">(' + countries[country] +')</span></small>' +
                                  '</label>' +
                                '</li>');
                }
            );
            FixtureFinder.addCompetitionListeners();
        }
    }
}();
