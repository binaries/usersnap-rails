//= require usersnap

$(document).on('page:change', function(event) {
    var usersnapTags = $(document).find(".include-usersnap");
    if (usersnapTags.length){
	loadUsersnap();
    }
});
