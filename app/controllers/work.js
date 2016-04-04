import Ember from 'ember';

export default Ember.Controller.extend({

	showModal: false,

	actions: {
		showModal: function () {
		this.set('showModal', true);
		},

		closeModal: function () {
			this.set('showModal', false);
		}
	} 
});
