(function() {
  var stories = $('.stories');
  var template = $('.story-template', stories).html();

  var data = {
    "stories": [
      {
        "id": 1,
        "headline": "Most Important Story",
        "subline": "This article has the most visual weight.",
        "hero": "images/hero.jpg",
        "source": "https://pixabay.com/en/lamp-light-hand-idea-lights-2663053/"
      },
      {
        "id": 2,
        "headline": "Less Important Story",
        "subline": "This story has less visual weight.",
        "hero": "http://placekitten.com/250/350",
      },
      {
        "id": 3,
        "headline": "Less Important Story The Second",
        "subline": "This story has less visual weight.",
        "hero": "http://placecage.com/250/350",
        "source": "http://placecage.com"
      },
      {
        "id": 4,
        "headline": "The Third Less Important Story",
        "subline": "This story has less visual weight.",
        "hero": "http://placebear.com/250/350"
      }
    ]
  };

  $.each(data["stories"], function(index, storyData) {
    var story = $(template);

    var storyType = (index == 0 ? "story--main" : "story--sub");
    story.addClass(storyType);

    story.find('.story__headline').text(storyData.headline);
    story.find('.story__subline').text(storyData.subline);
    story.find('.story__image').attr('src', storyData.hero)

    var sourceLink = story.find('.story__source-link');
    if (storyData["source"] !== undefined) {
      sourceLink.attr(storyData.source);
    } else {
      sourceLink.remove();
    }

    stories.append(story);
  });
})();