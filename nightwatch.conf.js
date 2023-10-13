// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  //src_folders: ['test','nightwatch/examples'],
  src_folders:["test"],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: ['nightwatch/page-objects'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: ['nightwatch/custom-commands'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: ['nightwatch/custom-assertions'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: ['@nightwatch/apitesting'],
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: 'global.js',
  
  

webdriver: {},

 

test_workers: {

  enabled: true,
  workers: "auto"

},



test_settings: {

  default: {

    disable_error_log: false,

    launch_url: 'http://localhost',



    screenshots: {

      enabled: false,

      path: 'screens',

      on_failure: true

    },



    desiredCapabilities: {

      browserName: 'chrome',



      chromeOptions: {



        // args: ['--headless', '--no-sandbox']



      }

    },

  

    webdriver: {

      start_process: true,
     //start_process: false,

      //server_path: 'node_modules/.bin/chromedriver',

      // port: 9515

    },
    
  } ,




  

  chrome: {

    desiredCapabilities: {

      browserName: 'chrome',

      'goog:chromeOptions': {

        // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/

        //

        // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)

        w3c: true,

        args: [

          '--no-sandbox',

          //'--ignore-certificate-errors',

          //'--allow-insecure-localhost',

         '--headless'

        ]

      }

    },



    webdriver: {

      start_process: true,

     // server_path: 'node_modules/.bin/chromedriver',
     server_path:'Chrome driver/chromedriver-linux64/chromedriver',

      //port: 9515,

      cli_args: [

        // --verbose

      ]

    }

  },
  firefox: {
    desiredCapabilities : {
      browserName : 'firefox'
    },
    
    webdriver: {
      start_process: true,
      port: 4444
    }
  }

  
  // api_testing: {
  //   start_session: false,
  //   webdriver: {
  //     start_process: false,
  //   }
  // }
}
}

