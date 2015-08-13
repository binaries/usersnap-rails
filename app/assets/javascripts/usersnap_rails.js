//= require usersnap

$(document).on('page:change', function(event) {
    var usersnapTags = $(document).find("#include-usersnap-widget");
    if (usersnapTags.length){
	loadUsersnapWidget();
    }
});
