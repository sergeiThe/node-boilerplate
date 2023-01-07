## Sessions and cookies

1. Users should not be able to login by simply manipulationg cookies values in browser
2. Initialize session storage when starting server. Sessions will then be used on every request
3. req.session is added my the session middleware
4. sessions should be stored in a database instead of memory due to potential overflow in case of many users