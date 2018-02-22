const filterState = new Backbone.Model({
		filter: 'all'
});

const filterChannel = Backbone.Radio.channel('filter');
filterChannel.reply('filterState', function () {
		return filterState;
});
