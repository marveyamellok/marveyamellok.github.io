$.getJSON('/components/data.json', function(_data){
  data = _data;
  $(window).trigger( "main:ready", data );
});

