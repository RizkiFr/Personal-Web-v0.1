$(document).ready(function(){
    $('#test').click(function(){
        $('.htmlskill').circleProgress({
            value: 0.75,
            size: 150,
            fill: {gradient: ['#ff1e41', '#ff5f43']},
            emptyFill: 'rgba(255, 255, 255, 0.2)'
        }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
        });

        $('.cssskill').circleProgress({
            value: 0.6,
            size: 150,
            fill: {gradient: ['#0068b7', '#00d8c2']},
            emptyFill: 'rgba(255, 255, 255, 0.2)'
        }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
        });
        $('.jsskill').circleProgress({
            value: 0.5,
            size: 150,
            emptyFill: 'rgba(255, 255, 255, 0.2)'
        }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').html(Math.round(50 * progress) + '<i>%</i>');
        });
    });
});