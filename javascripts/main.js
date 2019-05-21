// var testimonials = [
//   {
//     name: 'Bangaly Kaba',
//     title: 'Head of Growth at Instagram',
//     body: 'I loved it and am so happy that I participated. This program gave me a ton of important insight and networking opportunities to move forward my career as an angel investor.',
//     imageSource: 'img/people/bk.jpg'
//   },
//   {
//     name: 'Mandela Schumacher-Hodge Dixon',
//     title: 'Founder at FounderGym',
//     body: 'When I think about the First Round Angel Track program, one word comes to mind: intentional. I felt like they truly took the time to understand who we were as individuals and what it means to be an angel investor. In a world full of one-size-fits-all products and programming, it was truly refreshing to participate in a more intimate, personalized experience.',
//     imageSource: 'img/people/md.jpg'
//   },
//   {
//     name: 'Brian Rothenberg',
//     title: 'VP & General Manager of Eventbrite’s Self Service Business and Product',
//     body: 'Foundational in my learning and development as an early-stage investor. Incredible mentorship. One of the most amazingly talented, diverse, and fun groups of people I have ever had the opportunity to work with and learn from. And it doesn’t end with the last session -- this is an invaluable group we will all continue to benefit from, and more importantly, work together to give back to the startup community through.',
//     imageSource: 'img/people/br.jpg'
//   },
//   {
//     name: 'Yardley Ip',
//     title: 'Chief Product Officer at Thrive Global',
//     body: 'First Round Angel Track class gave me the necessary insights from long-time investors to make sound investment decisions, and more importantly, help me find my own investment style and ways to help founders. On top of that, I now have a community of operators who are not only people I can count on to co-invest together, but also friends.',
//     imageSource: 'img/people/yi.jpg'
//   }
// ];

var guides = [
  {
    name: 'Selina Tobaccowala',
    title: 'Co-Founder of Gixo',
    bio: 'Selina Tobaccowala is the cofounder of Gixo, increasing access to fitness globally. Prior to that, she was the President and CTO at SurveyMonkey, and cofounded Evite.',
    imageSource: 'img/people/set.png'
  },
  {
    name: 'Sarah Guo',
    title: 'General Partner at Greylock',
    bio: 'Sarah is a General Partner at Greylock, and is the firm’s youngest GP and first female GP. Prior to Greylock, she spent time at Goldman Sachs.',
    imageSource: 'img/people/sg.png'
  },

  {
    name: 'Afton Vechery',
    title: 'CEO of Modern Fertility',
    bio: 'Afton is the cofounder and CEO of Modern Fertility, helping women everywhere get access to fertility information. Prior to this, she rebuilt 23AndMe’s consumer experience and worked in healthcare focused private equity.',
    imageSource: 'img/people/av.png'
  },
  // {
  //   name: 'Rebecca Kaden',
  //   title: 'Partner at Union Square Ventures',
  //   bio: 'Rebecca Kaden is a partner at Union Square Ventures. She began her career as a journalist and, prior to USV, was a Partner at Maveron, a consumer-focused early stage fund. Rebecca was born in New York City. She studied English and American Literature at Harvard and received her MBA from Stanford.',
  //   imageSource: 'img/people/rk.png'
  // },
  {
    name: 'Fatima Dicko',
    title: 'CEO of Jetpack',
    bio: 'Fatima is the founder and CEO of Jetpack, bringing students the products they need in minutes. Jetpack is backed by Dorm Room Fund. Prior to Jetpack, Fatima was the youngest senior engineer in P&G’s upstream innovation division.',
    imageSource: 'img/people/fd.png'
  },
  {
    name: 'Ann Miura-Ko',
    title: 'Partner at Floodgate',
    bio: 'Ann Miura-Ko is a founding partner of Floodgate, been named the “Most Powerful Woman in Startups”, and made early bets on companies like Lyft, Taskrabbit and more. She’s also a founding member of AllRaise.',
    imageSource: 'img/people/amk.jpg'
  },
  {
    name: 'Heather Fernandez',
    title: 'CEO of Solv Health',
    bio: 'Heather Fernandez is the CEO and co-founder of Solv Health, bringing access to high quality same-day healthcare. She sits on the board of Atlassian. Prior to Solv, she scaled Trulia from 20 people to an exit to Zillow and served as National Deputy Press Secretary to John McCain.',
    imageSource: 'img/people/hf.png'
  },
  {
    name: 'Felicia Curcuru',
    title: 'CEO of Binti',
    bio: 'Felicia is the CEO of Binti, building software to alleviate the shortage of foster parents and find the best family for every child. Prior to Binti, she spent time at FundersClub and McKinsey.',
    imageSource: 'img/people/fc.png'
  },
  {
    name: 'Sarah Tavel',
    title: 'General Partner at Benchmark',
    bio: 'Sarah is the first female general partner at Benchmark. Prior to that, she spent time at Greylock, Pinterest and Bessemer.',
    imageSource: 'img/people/st.png'
  },
  {
    name: 'Ellen Chisa',
    title: 'CEO of Dark',
    bio: 'Ellen is the CEO and cofounder of Dark, helping people make scalable apps in an afternoon. Prior to this, she was VP Product and early team member at Lola.',
    imageSource: 'img/people/ec.png'
  }
];

// Counters to store which testimonial and guide is currently visible.
var state = {
  counters: {
    testimonial: 0,
    guide: 0
  }
}

// var setTestimonial = function(testimonial) {
//   document.getElementById("testimonial-body").textContent = testimonial.body;
//   document.getElementById("testimonial-name").textContent = testimonial.name;
//   document.getElementById("testimonial-title").textContent = testimonial.title;
//   document.getElementById("testimonial-title").textContent = testimonial.title;
//   document.getElementById("testimonial-image").src = testimonial.imageSource;
// };

var setGuide = function(guide) {
  document.getElementById("guide-bio").textContent = guide.bio;
  document.getElementById("guide-name").textContent = guide.name;
  document.getElementById("guide-title").textContent = guide.title;
  document.getElementById("guide-image").src = guide.imageSource;
};

var setButtonDisabledStatus = function(buttonSelector, disabled) {
  var button = document.querySelector(buttonSelector);
  if (!button) {
    debugger;
  }
  button.disabled = disabled;
}

var setButtonDisabledStatuses = function(carousel, current, limit) {
  var previousButtonSelector = '#previous-' + carousel;
  var nextButtonSelector = '#next-' + carousel;

  if (current == 0) {
    setButtonDisabledStatus(previousButtonSelector, true);
  } else if (current == limit) {
    setButtonDisabledStatus(nextButtonSelector, true);
  } else {
    setButtonDisabledStatus(previousButtonSelector, false);
    setButtonDisabledStatus(nextButtonSelector, false);
  }
};

var changeCarousel = function(carousel, delta, carouselOptions) {
  state.counters[carousel] = state.counters[carousel] + delta;
  var counter = state.counters[carousel];
  setButtonDisabledStatuses(carousel, counter, carouselOptions.length - 1)
  nextOption = carouselOptions[counter];

  if (carousel == 'testimonial') {
    setTestimonial(nextOption);
  } else if (carousel == 'guide') {
    setButtonDisabledStatuses('guide-small', counter, carouselOptions.length - 1);
    setGuide(nextOption);
  }
}

window.addEventListener('load',function() {
  // setTestimonial(testimonials[state.counters.testimonial]);
  setGuide(guides[state.counters.guide]);
  // setButtonDisabledStatuses("testimonial", state.counters.testimonial, testimonials.length - 1)
  setButtonDisabledStatuses("guide", state.counters.guide, guides.length - 1)
  setButtonDisabledStatuses("guide-small", state.counters.guide, guides.length - 1)

  // document.getElementById("next-testimonial").addEventListener("click", function() {
  //   changeCarousel('testimonial', 1, testimonials);
  // });

  // document.getElementById("previous-testimonial").addEventListener("click", function() {
  //   changeCarousel('testimonial', -1, testimonials);
  // });

  document.getElementById("next-guide").addEventListener("click", function() {
    changeCarousel('guide', 1, guides);
  });

  document.getElementById("previous-guide").addEventListener("click", function() {
    changeCarousel('guide', -1, guides);
  });

  document.getElementById("next-guide-small").addEventListener("click", function() {
    changeCarousel('guide', 1, guides);
  });

  document.getElementById("previous-guide-small").addEventListener("click", function() {
    changeCarousel('guide', -1, guides);
  });
});
