# usersnap-rails

The usersnap-rails gem integrates the [Usersnap](https://usersnap.com/) widget with the Rails asset pipeline.
In order to use it you have to [register an account at Usersnap](https://usersnap.com/#signup) and add your project. Each project has an own API-key.
This gem isn't maintained by the official Usersnap team, and it comes without any guarantee.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'usersnap-rails'
```

And then execute:

    $ bundle install

## Usage
### Include JavaScript assets
Add to your app/assets/javascripts/application.js
```
//= require usersnap-rails
```

### Include stylesheet assets
Add to your app/assets/stylesheets/application.css
```
*= require usersnap-rails
```

Or if your manifest file is .scss
```
@import "usersnap-rails";
```

### Configure your Usersnap API key
usersnap-rails assumes that your Usersnap API key is stored in a config variable called usersnap_api_key
Set its value in an initializer (e.g. config/initializers/usersnap.rb) or in the environment-specific config files:
```
Rails.application.config.usersnap_api_key = "x1x2a1-whatever-aa55";
```

### Activate the Usersnap widget in views
On the pages where the Usersnap widget should appear, add an element with the ID "include-usersnap-widget".
```
<div id="include-usersnap-widget"></div>
```
If you want it to appear an all pages, add it to app/views/layouts/application.html.erb.
If you want to make the Usersnap widget available only to specific users, you can write something like this:
```
<% if current_user.is_allowed_to_report_bug? %>
  <div id="include-usersnap-widget"></div>
<% end %>
```

The positioning of the hidden element doesn't influence where the Usersnap widget will appear.

## Contributing

1. Fork it ( https://github.com/[my-github-username]/usersnap-rails/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
