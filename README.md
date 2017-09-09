# E2 Left app - a mini social media app for you and your housemates

***IMPORTANT*** <br>
The MONGO_URI in server.js makes use of environment variables which you will need to configure on your machine.

most of the docs used for webpack.config found [here](https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html)

handy commands:
// Todo
// figure out a less verbose way of running this stuff
// implement ExtractTextPlugin to create separate stylesheet

run the webpack server with hot reload:
	 ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --progress --colors


transpile to public/main.js:
./node_modules/webpack/bin/webpack.js

or for minified code:
./node_modules/webpack/bin/webpack.js -p

compiling for production:
NODE_ENV=production ./node_modules/webpack/bin/webpack.js -p
