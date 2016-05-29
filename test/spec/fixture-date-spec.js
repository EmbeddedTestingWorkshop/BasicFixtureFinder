describe("FixtureFinder", function() {
  var dateField = '.fixtures .info .date';
  var lang = "en";

  describe("#setDate", function() {
      describe("when setDate is called with '2015-01-01'", function() {
        it("will set the date field to Thu 1st January 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-01-01", lang);

          expect($(dateField).text()).toEqual("Thu 1st January 2015");
        });
      });

      describe("when setDate is called with '2015-22-04'", function() {
        it("will set the date field to Wed 22nd April 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-04-22", lang);

          expect($(dateField).text()).toEqual("Wed 22nd April 2015");
        });
      });

      describe("when setDate is called with '2015-03-03'", function() {
        it("will set the date field to Tue 3rd March 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-03-03", lang);

          expect($(dateField).text()).toEqual("Tue 3rd March 2015");
        });
      });

      describe("when setDate is called with '2015-05-13'", function() {
        it("will set the date field to Mon 11th May 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-05-11", lang);

          expect($(dateField).text()).toEqual("Mon 11th May 2015");
        });
      });

  });
});
