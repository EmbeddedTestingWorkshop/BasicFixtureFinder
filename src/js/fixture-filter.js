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

FixtureFinder.filterCountries = function(filter){
    return function(fixtures){
        filter = filter || 'all'
        var forEachFixture = function(fixture){
            return fixture.country === filter
        };
        return filter === 'all' ? fixtures : fixtures.filter(forEachFixture);
    }
}





