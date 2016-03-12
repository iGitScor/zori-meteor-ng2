import {Links} from 'collections/links';

export function loadLinks() {
  if (Links.find().count() === 0) {

    var links = [
      {
        "url" : "https://soundcloud.com/shigoosh/hey-baby-stephen-marley-feat-tupac-mos-def",
        "nbClick" : 0,
        'public': true
      },
      {
        "url" : "http://www.youtube.com/watch?v=W4ATOCCyB2w",
        "nbClick" : 3,
        'public': true
      },
      {
        "url" : "http://www.dailymotion.com/video/xryxme_sofiane-dingue-de-toi-nabi-nabila-clip-officiel_music",
        "nbClick" : 2,
        'public': true
      },
      {
        "url" : "https://soundcloud.com/elliegoulding/tessellate-alt-j-cover",
        "nbClick" : 5,
        'public': true
      },
      {
        "url" : "https://soundcloud.com/slowmagic/moon",
        "nbClick" : 6,
        'public': true
      },
      {
        "url" : "https://www.youtube.com/watch?v=l_E9g4DVbRM",
        "nbClick" : 0,
        'public': true
      },
      {
        "url" : "http://www.youtube.com/watch?v=KDBfkgcDwAI",
        "nbClick" : 2,
        'public': true
      },
      {
        "url" : "http://www.youtube.com/watch?v=o2b2Xh4yFAs",
        "nbClick" : 1,
        'public': true
      },
      {
        "url" : "http://www.youtube.com/watch?v=bpOSxM0rNPM",
        "nbClick" : 3,
        'public': true
      },
      {
        "url" : "https://soundcloud.com/edbangerrecords/sebastian-h-a-l",
        "nbClick" : 0,
        'public': true
      },
      {
        "url" : "https://www.youtube.com/watch?v=Sfou7a-nYEE",
        "nbClick" : 1,
        'public': true
      }
    ];

    for (var i = 0; i < links.length; i++) {
      Links.insert(links[i]);
    }
  }
};
