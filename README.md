# searchable-movies

1. `cd` into this directory.
2. Run a web server  - e.g. `python -m SimpleHTTPServer`. This must be done because the templateUrl directive API uses XHR to retrieve the referenced templates and most browsers block the file:// protocol. I chose to avoid any build step eventhough inlining templates could've helped in this regard.
3. In a modern browser like Chrome, navigate to `http://localhost:8000/`

