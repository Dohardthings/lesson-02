import Ember from 'ember';

export default Ember.Controller.extend({
  saveImage(url, caption) {
    const image = this.store.createRecord(`image`, {url, caption});

    image.save().then(() => {
      this.transitionToRoute(`index`);
    });
  },
});
