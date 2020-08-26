let turn = 0;
let currCardId = 0;
let prevCardId = 0;
let gameover = false;
const sons = [];
const daughters = [];
let horus = false;
let illness = false;

const stats = [
  { label: 'royal', value: 0 },
  { label: 'family', value: 0 },
  { label: 'finance', value: 0 },
  { label: 'security', value: 0 }
];

const names = ['Aarun', 'Akhom', 'Ay', 'Ibi', 'Idu', 'Inyotef', 'Iuseneb', 'Khaemwaset', 'Meriti', 'Metjen', 'Narmer', 'Neferhotep', 'Neheb', 'Senbi', 'Sneferu', 'Wadjenes'];
const name = names[Math.floor(Math.random() * names.length)];

$('.begin').on('click', function() {
    $('.start-screen').css({ 'display': 'none' });
    setTimeout(function() {
        $('.card-front').css({ 'transform': 'rotateY(180deg)' });
        $('.card-front').css({ 'transition-duration': '0.5s' });
        $('.card-back').css({ 'transform': 'rotateY(360deg)' });
        $('.card-back').css({ 'transition-duration': '0.5s' });
    }, 150);
})

displayCard.featureCard = function() {
    $('.box.count p').text(function() { return `${turn} years`; });
    $('.box.year p').text(function() { return `Year ${500 + turn} BC`; });
    $('.box.name p').text(function() { return name; });
    $('.description p').text(function() { return displayCard.eventDesc; });
}

function animations() {
    $('.card-hidden').on({
        mousemove: function(event) {
            if (!gameover) {
                var screenWidth = $(document).width();
                var mousePosition = event.clientX;
                $('.card-back .hover-text').css({ 'display': 'none' });

                if (mousePosition < (screenWidth / 2)) {
                    $('.card-back .decision p').text(function() { return displayCard.decision1.text; });
                    $('.card-back').css({
                      'left': '-2.5rem',
                      'background': 'linear-gradient(270deg, peru 30%, navajowhite 100%)',
                      'text-align': 'left'
                    });

                    for (let i = 0; i < stats.length; i += 1) {
                        if (turn === 0 || displayCard.decision1.stats[i] != 0) {
                            $(`.change-${stats[i].label}`).css({ 'display': 'block' });
                        } else {
                            $(`.change-${stats[i].label}`).css({ 'display': 'none' });
                        }
                    }
                } else {
                    $('.card-back .decision p').text(function() { return displayCard.decision2.text; });
                    $('.card-back').css({
                      'left': '2.5rem',
                      'background': 'linear-gradient(90deg, peru 30%, navajowhite 100%)',
                      'text-align': 'right'
                    });

                    for (let i = 0; i < stats.length; i += 1) {
                        if (turn === 0 || displayCard.decision2.stats[i] != 0) {
                            $(`.change-${stats[i].label}`).css({ 'display': 'block' });
                        } else {
                            $(`.change-${stats[i].label}`).css({ 'display': 'none' });
                        }
                    }
                }
            }
        },
        mouseleave: function() {
            $('.card-back').css({
                'background': 'peru',
                'left': '0'
            });
            $('.card-back .hover-text').css({ 'display': 'flex' });
            $('.card-back .decision p').text(function() { return ''; });
            $('.change').css({ 'display': 'none' });
        }
    });
}

displayCard.handleStats = function() {
    $('.card-hidden').on('click', function(event) {
        if (!!gameover) {
            return;
        } else {
          var leftPosition = $('.card-back').css('left').slice(0, -2);
          if (leftPosition > 25 || leftPosition < -25) {
              $('.change').css({ 'display': 'none' });

              var screenWidth = $(document).width();
              var mousePosition = event.clientX;
              if (mousePosition < (screenWidth / 2)) {
                  for (let i = 0; i < stats.length; i += 1) {
                      stats[i].value = displayCard.decision1.stats[i];
                  }
              } else {
                  for (let i = 0; i < stats.length; i += 1) {
                      stats[i].value = displayCard.decision2.stats[i];
                  }
              }

              for (let i = 0; i < stats.length; i += 1) {
                  newHeight = $(`.${stats[i].label}`).height() + stats[i].value;
                  if (newHeight > 60) newHeight = 60;
                  if (newHeight !== $(`.${stats[i].label}`).height()) {
                      $(`.${stats[i].label}`).animate({ height: newHeight }, 'ease-in-out');
                      if (newHeight <= 0) {
                          $(`.stat-${stats[i].label}`).addClass('blink-min-infinite');
                      } else if (newHeight >= 60) {
                          $(`.${stats[i].label}`).addClass('blink-max-infinite');
                      } else {
                          $(`.${stats[i].label}`).addClass('blink-max-once');
                      }
                  }
                  if (turn > 0 && (newHeight <= 0 || newHeight >= 60)) {
                      if (i === 0) {
                          if (newHeight <= 0) {
                              gameover = 'Talk of your exceedingly humble existence spreads throughout Kemet and the Pharaoh is suitably impressed. He orders upon his death for you to be buried with him in his tomb.';
                          } else {
                              gameover = 'Children start to go missing in the village and jealous neighbours pin the blame on you. The matter is escalated to officers of the High Court and you are sent to gaol without trial.';
                          }
                      }
                      if (i === 1) {
                          if (newHeight <= 0) {
                              gameover = 'Your family contracts a severe stomach illness from spoiled ingredients in the store and there is no help for any of you. You\'re the last to die a miserable death five days later.';
                          } else {
                              gameover = 'Your wife had always been excessively paranoid and jealous. One night, she barricades all the exits and sets the house on fire. Your burnt remains are found under the debris.';
                          }
                      }
                      if (i === 2) {
                          if (newHeight <= 0) {
                            gameover = 'You throw a grand party to celebrate your great fortune, and a jealous neighbour imbibes a bit too much drink. Your corpse is found the next morning, pierced by a dagger through the heart.';
                          } else {
                            gameover = 'After several successive years of drought and with your stores depleted, you are unable to continue feeding your family, let alone yourself. Your family perishes one by one.';
                          }
                      }
                      if (i === 3) {
                          if (newHeight <= 0) {
                              gameover = 'You\'ve spent the last few years sloughing off most of the work to the one or two slaves under you. One day you suffer a sudden heart attack, and the slaves greet the day with joy.';
                          } else {
                              gameover = 'Life as an ancient Egyptian farmer doesn\'t come with much job security. One day when you\'re working in the Nile, a crocodile decides to make you its next meal.';
                          }
                      }
                  };
                  if (i === stats.length - 1 && !!gameover) {
                      $('.card-hidden').css({ 'display': 'none' });
                      $('.card-back').css({
                        'transform': 'rotateY(180deg)',
                        'transition-duration': '0.5s'
                      });
                      $('.card-front').css({
                        'transform': 'rotateY(360deg)',
                        'transition-duration': '0.5s'
                      });
                      $('.card-front p').text('Proceed »');
                      $('.card-front').on('click', function() {
                          $('.game-over').css({ 'display': 'flex' });
                          $('.name-value').text(function () { return name; });
                          $('.years-value').text(function () { return `${turn} years`; });
                          for (let i = 0; i < stats.length; i += 1) {
                              if ($(`.stat-${stats[i].label}`).hasClass('blink-min-infinite')) {
                                  $(`.stat-${stats[i].label}`).removeClass('blink-min-infinite');
                                  $(`.stat-${stats[i].label}`).addClass('min-d');
                              }
                              if ($(`.${stats[i].label}`).hasClass('blink-max-infinite')) {
                                  $(`.${stats[i].label}`).removeClass('blink-max-infinite');
                                  $(`.${stats[i].label}`).addClass('max-d');
                              }
                          }
                      });

                      return;
                  }
              }

              setTimeout(function() {
                  for (let i = 0; i < stats.length; i += 1) {
                      $(`.${stats[i].label}`).removeClass('blink-max-once');
                  }
              }, 750);
            } else {
                return;
            }
        }
    });
}

function getNewCard() {
    do {
        currCardId = Math.floor((Math.random() * cards.length) + 1)
    } while (currCardId === prevCardId);

    prevCardId = currCardId;
    const newCard = cards.filter(function (card) { return card._id === currCardId });
    const newDisplayCard = newCard[0];

    if (newDisplayCard._id === 9) {
        if (!horus) { horus = true; }
        else { return getNewCard(); }
    }
    if (newDisplayCard._id === 28) {
        if (!illness) { illness = true; }
        else { return getNewCard(); }
    }
    if (newDisplayCard._id > 6) {
        return newDisplayCard;
    }
    if (newDisplayCard._id === 1) {
        sons.push({ used: false });
        return newDisplayCard;
    }
    if (newDisplayCard._id === 2) {
        daughters.push({ used: false });
        return newDisplayCard;
    }

    let index;
    if (newDisplayCard._id === 3 || newDisplayCard._id === 5) {
        index = sons.findIndex(son => !son.used);
        if (index > -1) {
            sons[index] = { used: true };
            turn += 15;
            $('.box.add').css({ 'display': 'flex' });
            setTimeout(function() {
                $('.box.add').css({ 'display': 'none' });
            }, 2000);
            return newDisplayCard;
        } else {
            return getNewCard();
        }
    }
    if (newDisplayCard._id === 4 || newDisplayCard._id === 6) {
        index = daughters.findIndex(daughter => !daughter.used);
        if (index > -1) {
            daughters[index] = { used: true };
            turn += 15;
            $('.box.add').css({ 'display': 'flex' });
            setTimeout(function() {
                $('.box.add').css({ 'display': 'none' });
            }, 2000);
            return newDisplayCard;
        } else {
            return getNewCard();
        }
    }
}

displayCard.nextCard = function() {
    $('.card-hidden').on('click', function() {
        $('.card-back').css({
          'background': 'peru',
          'left': '0'
        });
        $('.card-back .decision p').text(function() { return ''; });

        if (!!gameover) {
            $('.description p').text(function() { return gameover; });
            return;
        } else {
            $('.card-back .hover-text').css({ 'display': 'flex' });
            var leftPosition = $('.card-back').css('left').slice(0, -2);

            if (leftPosition > 25 || leftPosition < -25) {
                const newCard = getNewCard();
                Object.assign(displayCard, newCard);
                turn += 1;

                $('.box.count p').text(function() { return `${turn} years`; });
                $('.box.year p').text(function() { return `Year ${500 + turn} BC`; });
                $('.description p').text(function() { return displayCard.eventDesc; });

                if (turn === 1) {
                    for (let i = 0; i < stats.length; i += 1) {
                        $(`.${stats[i].label}`).animate({ height: 30 }, 'ease-in-out');
                        $(`.${stats[i].label}`).addClass('blink-max-once');
                    }
                }
            } else {
                return;
            }
        }
    });
}

cards.init = function() {
    displayCard.featureCard();
    animations();
    displayCard.handleStats();
    displayCard.nextCard();
}

$(function() {
    cards.init();
});