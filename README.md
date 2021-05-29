# flask-app
Webapp using Flask and React to calculate the percentage of an inputted number relative to a random number fetched from a database.


## Booting

  * Start a cmd window in the server directory
  * Run `pipenv shell`
  * Run `pipenv update`
  * Run `python app.py`

Server should be up on port 5000. 
Make sure python version is 3.9 on your machine.

 * Navigate to UI directory and start a cmd instance
 * Run `npm install`
 * Run `npm run start` 

Flask's cmd instance sometimes lags after booting, if the first time you press generate nothing happens, open the cmd for flask's server and select it, and press enter.

If running `pipenv shell` starts to create a new environment, you'll need to run `pipenv update` for the application to work.

![demo](/demo.gif)

The feature to sign in is not functional, there is no User model, some delays were added to imitate the experience of signing in.
