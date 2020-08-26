const displayCard = {
  _id: 0,
  eventDesc: 'It is the year 500 BC and we commence on the eve of your wedding. You lift your eyes to study the face of your bride. Welcome to your new life!',
  decision1: {
    text: 'Thank you',
    stats: [0, 0, 0, 0]
  },
  decision2: {
    text: 'Indeed',
    stats: [0, 0, 0, 0]
  }
};

const cards = [
    {
        _id: 1,
        eventDesc: 'After two hours of your wife having gone into labour, you hear the thin cry of child. The midwife\'s assistant gives you glad tidings of a son. You...',
        decision1: {
            text: 'Throw a grand feast in celebration',
            stats: [10, 10, 10, 10]
        }, 
        decision2: {
            text: 'Prepare a quiet, modest party',
            stats: [-10, -10, -10, -10]
        }
    },
    { 
        _id: 2,
        eventDesc: 'After two hours of your wife having gone into labour, you hear the thin cry of child. The midwife\'s assistant gives you glad tidings of a daughter. You...',
        decision1: {
            text: 'Throw a grand feast in celebration',
            stats: [10, 10, 10, 10]
        },
        decision2: {
            text: 'Prepare a quiet, modest party',
            stats: [-10, -10, -10, -10]
        }
    },
    {
        _id: 3,
        eventDesc: 'To your dismay, your son has grown up to be mischief-maker and has been seen fraternizing with women of poor repute. You...',
        decision1: {
            text: 'leave him to his devices. He\'ll man up eventually!',
            stats: [0, -15, -5, -5]
        },
        decision2: {
            text: 'have him conscripted the next time the Pharaoh\'s men come to recruit new soldiers',
            stats: [0, 10, 10, 0]
        }
    },
    {
        _id: 4,
        eventDesc: 'To your dismay, your daughter has grown up to be willful and rebellious, and the prospect of her making a good bride is bleak. You...',
        decision1: {
            text: 'hand her over to the local temple to raise her in the way that you weren\'t able to',
            stats: [10, 5, -10, 5]
        },
        decision2: {
            text: 'increase your disciplining of her and attempt to force her to readjust her attitude',
            stats: [0, -5, 0, 0]
        }
    },
    {
        _id: 5,
        eventDesc: 'Your son has grown into a fine young man and shows exceptional potential for becoming a physician. You...',
        decision1: {
            text: 'enroll him into the nearest House of Life',
            stats: [0, 15, -10, 10]
        },
        decision2: {
            text: 'advise him to nurture his hobby but prioritize the farm',
            stats: [0, 10, 0, 10]
        }
    },
    {
        _id: 6,
        eventDesc: 'Your daughter has blossomed into an exceptional young girl and you arrange to have her married. The match you have chosen for her is...',
        decision1: {
            text: 'your neighbour\'s son, her childhood friend and a farmer like yourself',
            stats: [0, 15, 0, 0]
        },
        decision2: {
            text: 'a doctor of high repute and income from a few villages over, close in age to yourself and perhaps too dedicated to his work',
            stats: [0, 10, 10, 5]
        }
    },
    {
        _id: 7,
        eventDesc: 'It is the season of the harvest, but the high flood from the previous season has laid devastation to the crops. You...', 
        decision1: {
            text: 'try to cut corners with the tax collector',
            stats: [-15, -5, -5, -10]
        }, 
        decision2: {
            text: 'give thanks for what you have',
            stats: [0, 0, -5, 0]
        }
    },
    {
        _id: 8,
        eventDesc: 'It is the season of the harvest and you have yielded a good amount in crops. You...', 
        decision1: {
            text: 'set aside some of the harvest to give to the poor',
            stats: [0, 10, 10, 10]
        },
        decision2: {
            text: 'instruct your wife to prepare larger meals for the coming days',
            stats: [0, 10, 15, -5]
        }
    },
    {
        _id: 9,
        eventDesc: 'Envoys come calling and collecting from the palace. They say that Horus has been reincarnated through the birth of a prince. You...', 
        decision1: {
            text: 'try to cut corners with your tribute as much as possible',
            stats: [5, 0, -10, -5]
        },
        decision2: {
            text: 'pay the dues asked of you',
            stats: [10, 0, -15, 0]
        }
    },
    {
        _id: 10,
        eventDesc: 'You become aware of the possibility of being under a curse and discover that the slave you had beaten last week is responsible. You...',
        decision1: {
            text: 'destroy the slave\'s property, deal with him again, and cast him out',
            stats: [0, 10, 0, -15]
        },
        decision2: {
            text: 'enlist the Head Priest at your local temple to heal you and to deal with the slave',
            stats: [0, 10, -10, 15]
        }
    },
    {
        _id: 11,
        eventDesc: 'You hear faint stirrings in the night and, upon investigating, see a thief fleeing with a portion of food from the kitchens. You...', 
        decision1: {
            text: 'give chase!',
            stats: [0, -15, -5, -15]
        },
        decision2: {
            text: 'leave him be and ensure your house is safe',
            stats: [0, 10, -5, 15]
        }
    },
    {
        _id: 12,
        eventDesc: 'You receive summons from the Pharaoh to join his army in preparation for war. You...', 
        decision1: {
            text: 'shirk the order and attempt to flee into obscurity',
            stats: [-15, -15, 0, -15]
        },
        decision2: {
            text: 'make preparations for hired hands to look after your plot for the years you will be gone',
            stats: [15, 15, 0, 10]
        }
    },
    {
        _id: 13,
        eventDesc: 'You are visited by the tax collector, who relinquishes you of a considerable amount of savings. You...', 
        decision1: {
            text: 'plot with the locals to get your savings back without the tax collector noticing',
            stats: [-10, 0, -10, -10]
        },
        decision2: {
            text: 'resign yourself. There\'s nothing to be done after all',
            stats: [10, 0, -10, 0]
        }
    },
    {
        _id: 14,
        eventDesc: 'You are confronted with the fact that your wife is unforgivably lazy and doesn\'t do her fair share of upkeep of the house. You...', 
        decision1: {
            text: 'discipline her yourself',
            stats: [0, -10, 0, 0]
        },
        decision2: {
            text: 'enlist help from her family and friends to discipline her',
            stats: [0, 15, 0, 0]
        }
    },
    {
        _id: 15,
        eventDesc: 'You become aware of the possibility of having been cursed and discover that a neighbour you had a dispute with has placed a curse on you. You...',
        decision1: {
            text: 'pray over yourself and raise the issue with the local authorities',
            stats: [5, 10, -5, 10]
        },
        decision2: {
            text: 'seek help from the local temple to heal you and take the appropriate measures against your neighbour',
            stats: [10, 10, -10, 10]
        }
    },
    {
        _id: 16,
        eventDesc: 'A merchant you had traded with the previous day accuses you of cheating him. The local jurist judges in favour of the merchant. You...', 
        decision1: {
            text: 'plot your comeuppance',
            stats: [-10, 0, -15, 0]
        },
        decision2: {
            text: 'keep your head down and pay your fine',
            stats: [0, 0, -15, 0]
        }
    },
    {
        _id: 17,
        eventDesc: 'A merchant you had traded with the previous day accuses you of cheating him. The local jurist judges in your favour. You...', 
        decision1: {
            text: 'give thanks',
            stats: [0, 0, 10, 0]
        },
        decision2: {
            text: 'attempt to get more out of the merchant than the jurist prescribed',
            stats: [-5, -10, 15, 0]
        }
    },
    {
        _id: 18,
        eventDesc: 'You come home having finished a profitable barter. You...',
        decision1: {
            text: 'save up for emergencies and for the inundation season',
            stats: [0, 10, 15, 10]
        },
        decision2: {
            text: 'give your wife a share and head to the market',
            stats: [0, 10, -5, 0]
        }
    },
    {
        _id: 19,
        eventDesc: 'You come home worse for wear from a poor barter. You...',
        decision1: {
            text: 'work your slaves harder at the farm to reap what they can',
            stats: [0, -10, 5, 0]
        },
        decision2: {
            text: 'resign yourself and proceed with your business as usual',
            stats: [0, 0, -5, 0]
        }
    },
    {
        _id: 20,
        eventDesc: 'The land this year is hit with drought. Fortunately, your family has more than enough saved to make it to next year. You...',
        decision1: {
            text: 'instruct your wife to measure out a portion to help your neighbours in need',
            stats: [0, 10, 0, 0]
        },
        decision2: {
            text: 'be discreet and instruct your family to only eat enough to make it through each day',
            stats: [0, -10, 0, 0]
        }
    },
    {
        _id: 21,
        eventDesc: 'The land this year is hit with drought and your food stores are sparse. You...',
        decision1: {
            text: 'only eat the needed amount and prioritize the welfare of your children',
            stats: [0, 10, -5, 0]
        },
        decision2: {
            text: 'prioritize your own wellbeing to keep working at the farm and give your children only the needed amount',
            stats: [0, 0, -5, 5]
        }
    },
    {
        _id: 22,
        eventDesc: 'It is flooding season and time to turn out to work for the Pharaoh\'s pyramid. Your wife attempts to persuade you to feign illness. You...',
        decision1: {
            text: 'refuse and put your foot down',
            stats: [10, -5, 10, 5]
        },
        decision2: {
            text: 'listen to the wife',
            stats: [-15, 5, 5, -15]
        }
    },
    {
        _id: 23,
        eventDesc: 'You suffer an injury while reaping your crops. You enlist the help of...',
        decision1: {
            text: 'a priest from the House of Life',
            stats: [0, 0, -10, 10]
        },
        decision2: {
            text: 'the local witch doctor',
            stats: [-10, -15, -5, 0]
        }
    },
    {
        _id: 24,
        eventDesc: 'You discover that your wife been seen frequently visiting a witch doctor. She explains that she is attempting to cure her continued barrenness. You...',
        decision1: {
            text: 'comfort her and explain that you are content with her as she is',
            stats: [0, 10, -10, -5]
        },
        decision2: {
            text: 'rebuke her for going behind your back',
            stats: [0, 5, -10, 5]
        }
    },
    {
        _id: 25,
        eventDesc: 'A few days after the caravan you had traded with leaves, you discover that the items you acquired are defective. You...',
        decision1: {
            text: 'spread the news and plot with locals to exact revenge next year',
            stats: [0, 0, -10, 10]
        },
        decision2: {
            text: 'hide the fact to save your pride',
            stats: [0, 0, -10, -5]
        }
    },
    {
        _id: 26,
        eventDesc: 'Upon arriving home from working at the Pharaoh\'s pyramids at the end of the flooding season, you discover your wife has been unfaithful. You...',
        decision1: {
            text: 'deal with her and her lover on the spot, and enlist the help of the local officers to exact justice',
            stats: [0, -20, 0, 10]
        },
        decision2: {
            text: 'are too heartbroken to seek justice. You only ask your wife: why?',
            stats: [0, -20, 0, -15]
        }
    },
    {
        _id: 27,
        eventDesc: 'Upon returning home after a family outing on the Nile, you discover that your private store of a modest amount of gold, silver, and copper has been robbed. You...',
        decision1: {
            text: 'immediately inform the local officers so they can best derive clues to figure out the culprit',
            stats: [0, 10, -20, 10]
        },
        decision2: {
            text: 'order your family to stay out of the house and do the detective work yourself',
            stats: [0, 0, -15, 5]
        }
    },
    {
        _id: 28,
        eventDesc: 'Your wife contracts a chronic illness and issues her will, instructing to give half her wealth to her family. You...',
        decision1: {
            text: 'pledge to accord with her wishes',
            stats: [0, 15, 10, 0]
        },
        decision2: {
            text: 'enlist a scribe with dodgy credentials to change the will to have yourself inherit all of her property',
            stats: [0, -15, 15, -10]
        }
    },
    {
        _id: 29,
        eventDesc: 'The local nobility holds a competition among the peasants to produce sculptures created with clay. Your modest efforts are met with huge success! You...',
        decision1: {
            text: 'save up for emergencies and for the inundation season',
            stats: [10, 15, 10, 5]
        },
        decision2: {
            text: 'give your wife a share and head to the market',
            stats: [10, 10, -10, 0]
        }
    },
    {
        _id: 30,
        eventDesc: 'You find yourself dissatisfied with this life of drudgery and complain to your wife, who attempts to comfort you. You...',
        decision1: {
            text: 'Take her advice to heart and spend the night in contemplation over the many blessings in your life',
            stats: [0, 5, 0, 0]
        },
        decision2: {
            text: 'Listen with half an ear, but go out the next day and spend lavishly at the market the next day to comfort yourself',
            stats: [0, -5, -5, -5]
        }
    }
];