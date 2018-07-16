const defaults = {
  path: '/'
};

export default function(router, options=defaults) {
  router.route('portfolio', options , function() {
    this.route('blog');

  });
}
