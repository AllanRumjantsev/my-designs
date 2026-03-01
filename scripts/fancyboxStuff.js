const single_options = {
  groupAttr: false,
  Toolbar: {
    display: {
      left: [],
      middle: [
        "zoomIn",
        "zoomOut",
        "toggle1to1",
        "rotateCCW",
        "rotateCW",
        "download",
      ],
      right: [
        "close",
      ],
    },
  },
};

Fancybox.bind('[data-fancybox="single"]', single_options);

const videos_options = {
  Thumbs: {
    type: "classic",
  },

};

Fancybox.bind('[data-fancybox="videos-intros"]', videos_options);
Fancybox.bind('[data-fancybox="videos-promos"]', videos_options);
Fancybox.bind('[data-fancybox="videos-displays"]', videos_options);
Fancybox.bind('[data-fancybox="videos-insta"]', videos_options);
Fancybox.bind('[data-fancybox="videos-templates"]', videos_options);

const single_video_options = {
  groupAttr: false,
};

Fancybox.bind('[data-fancybox="videos-misc"]', single_video_options);
// Fancybox.bind('[data-fancybox="videos-misc2"]', single_video_options);

const gif_banner_options = {
  groupAttr: false,
  Toolbar: {
    display: {
      left: [],
      middle: [
        "rotateCCW",
        "rotateCW",
        "download",
      ],
      right: [
        "close",
      ],
    },
  },
};

Fancybox.bind('[data-fancybox="gif_banner"]', gif_banner_options);

const html_banner_options = {
  groupAttr: false,
};

Fancybox.bind('[data-fancybox="html_banner"]', html_banner_options);

const flash_banner_options = {
  groupAttr: false,
};

Fancybox.bind('[data-fancybox="flash_banner"]', flash_banner_options);

const social_media_images_options = {
  Toolbar: {
    display: {
      left: [],
      middle: [
        "zoomIn",
        "zoomOut",
        "toggle1to1",
        "rotateCCW",
        "rotateCW",
        "download",
      ],
      right: [
        "close",
      ],
    },
  },
  Thumbs: {
    type: "classic",
  },
};

Fancybox.bind('[data-fancybox="social_media_images"]', social_media_images_options);
Fancybox.bind('[data-fancybox="social_media_images_cryptor"]', social_media_images_options);
Fancybox.bind('[data-fancybox="social_media_images_events"]', social_media_images_options);
Fancybox.bind('[data-fancybox="social_media_images_conference_printing"]', social_media_images_options);

const personal_multi_options = {
  Toolbar: {
    display: {
      left: [],
      middle: [
        "zoomIn",
        "zoomOut",
        "toggle1to1",
        "rotateCCW",
        "rotateCW",
        "download",
      ],
      right: [
        "close",
      ],
    },
  },
  Thumbs: {
    type: "classic",
  },

};

Fancybox.bind('[data-fancybox="personal-warrior"]', personal_multi_options);
Fancybox.bind('[data-fancybox="personal-flying-torpedo"]', personal_multi_options);
Fancybox.bind('[data-fancybox="personal-santoro-doll"]', personal_multi_options);
Fancybox.bind('[data-fancybox="personal-betsafe-test"]', personal_multi_options);

const personal_single_options = {
  groupAttr: false,
  Toolbar: {
    display: {
      left: [],
      middle: [
        "zoomIn",
        "zoomOut",
        "toggle1to1",
        "rotateCCW",
        "rotateCW",
        "download",
      ],
      right: [
        "close",
      ],
    },
  },
  Thumbs: {
    type: "classic",
  },
};

Fancybox.bind('[data-fancybox="personal-dagger"]', personal_single_options);
Fancybox.bind('[data-fancybox="personal-chopper"]', personal_single_options);
Fancybox.bind('[data-fancybox="personal-sword"]', personal_single_options);