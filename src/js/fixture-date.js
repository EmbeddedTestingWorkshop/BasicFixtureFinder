var date = function (){
  var updateDate = function(date){
      var dateElement = $('.fixtures .info .date');
      dateElement.text(
          moment(date || dateElement.attr('data-date'))
          .locale("en")
          .format('ddd Do MMMM YYYY')
      );
  };

  FixtureFinder.setDate = function(date){
        updateDate(date);
  }
}();
