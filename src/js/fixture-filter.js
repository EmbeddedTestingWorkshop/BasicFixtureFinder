FixtureFinder.filterTeams = function(filter){
    return function(fixtures){
        filter = filter || ""
        var forEachFixture = function(fixture){
            return fixture.homeTeam.contains(filter) 
            || fixture.awayTeam.toLowerCase().contains(filter.toLowerCase());
        };
        return fixtures.filter(forEachFixture);
    }
}




