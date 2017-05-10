describe("FixtureFinder", function() {
  var dateField = '.fixtures .info .date';
  var lang = "en";

  describe("#setDateWithCurrentLanguage", function() {
    describe("given locale is set to English", function() {

      beforeEach(function() {
        FixtureFinder.localizePage("en");
      });

      describe("when setDateWithCurrentLanguage with '2015-01-01'", function() {
        it("will set date field to Thu 1st January 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-01-01");

          expect($('.fixtures .date strong').text()).toEqual("Thu 1st January 2015");
        });
      });

      describe("when setDateWithCurrentLanguage with '2015-22-04'", function() {
        it("will set date field to Wed 22nd April 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-04-22");

          expect($('.fixtures .date strong').text()).toEqual("Wed 22nd April 2015");
        });
      });

      describe("when setDateWithCurrentLanguage with '2015-03-03'", function() {
        it("will set date field to Tue 3rd March 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-03-03");

          expect($('.fixtures .date strong').text()).toEqual("Tue 3rd March 2015");
        });
      });

      describe("when setDateWithCurrentLanguage with '2015-05-13'", function() {
        it("will set date field to Mon 11th May 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-05-11");

          expect($('.fixtures .date strong').text()).toEqual("Mon 11th May 2015");
        });
      });
    });  
  }); 
  
  describe("#setDateWithCurrentLanguage", function() {
    describe("given locale is set to German", function() {   
      beforeEach(function() {
        FixtureFinder.localizePage("de");
      });

      describe("when setDateWithCurrentLanguage with '2015-04-22'", function() {
        it("will set date field to Mi. 22. April 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-04-22");

          expect($('.fixtures .date strong').text()).toEqual("Mi. 22. April 2015");
        });
      });

      describe("when setDateWithCurrentLanguage with '2015-12-01'", function() {
        it("will set date field to Di. 01. Dezember 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-12-01");

          expect($('.fixtures .date strong').text()).toEqual("Di. 1. Dezember 2015");
        });
      });
    });  
}); 
});
