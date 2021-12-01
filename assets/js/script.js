$(function() {
    $('.neon').neonText({
        textColor: 'white',
        textSize: '75pt',
        neonHighlight: 'yellow',
        neonHighlightColor: 'black',
        neonHighlightHover: '#ff5700',
        neonFontHover: 'white'
    });
});

$(function () {
    $("#rating").rateYo({
      rating: 4.7,
      spacing: '5px',
      ratedFill: 'springgreen',
      readOnly: true
    });
  });
