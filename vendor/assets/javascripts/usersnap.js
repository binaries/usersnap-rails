function loadUsersnapWidget(apiKey){
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = '//api.usersnap.com/load/' + apiKey + '.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
};
