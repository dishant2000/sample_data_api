# Getting started


### For installing all the dependencies
```
npm install
```

### For running the server on which the db.json file is routed
```
npm run start
```

### For running the app.js file on which you can get a console output as a sorted array of list items.

```
npm run start-app
```

# Detailed description

## Problem statement

Assume you have an endpoint (Example 1 below) that returns a JSON output
(Example 2) when a GET request is performed and write a code snippet in Python
and Javascript that performs a GET request to the Example 1 endpoint and loops
through the JSON output from Example 2. Print the `name` and `id` fields, sorting by
the `id` field.

## My solution 

- I have hosted the server which is sending the data array from the db.json file on heroku.
-  The api link is as follows [https://symbl-data-api.herokuapp.com/data]
-  Further in the app.js file it will make a get request to api and console ouput array in a sorted manner (as mentioned in the problem statement).