/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},

		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config : {
				timeFormat : 12,
				timezone: 'Asia/Kolkata	',
			},
		},
		{
			module: 'MMM-GoogleCalendar',
			header: "Calendar",
			position: "top_right",
			config: {
				calendars: [
					{
						
						symbol: "calendar-week",
						calendarID: "ashminjayson10@gmail.com"
					},
					// add another calendar HERE if needed
				],
			}
		},
		{
            module: 'MMM-KeyBindings',
            config: {
				enableKeyboard: true
            }
        },
		// {
		// 	module: "compliments",
		// 	position: "lower_third"
		// },
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: " ",
				locationID: "1273874", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "824fe5d0147f9bde2545aba6858280fa"
			}
		},
		
        {
            module: 'MMM-Carousel',
			position: 'bottom_bar',
            config: {
				showPageIndicators: true,
				showPageControls: true,
                transitionInterval: 10000,
                ignoreModules: [],
                mode: 'positional',
                top_right: {enabled: true, ignoreModules: [], overrideTransitionInterval: 10000},
            },

			keyBindings: {
				enabled: true,
				map: {
					NextSlide: "ArrowRight",
					PrevSlide: "ArrowLeft",
					Slide0:    "Home"
				},
				mode: "DEFAULT"
			}

        },

	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
