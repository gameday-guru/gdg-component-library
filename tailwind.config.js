const colors = {
  'gdg': {
    100 : '#EAF7EF',
    200 : '#C1E9D0',
    300 : '#70CC91',
    400 : '#33b763',
    500 : '#28924F',
    600 : '#1E6D3B',
    700 : '#144927',
    800 : '#0F361D',
    900 : '#0A2413'
  },
  'gold' : {
      100 : '#F0EAD0',
      200 : '#E6DCB1',
      300 : '#DED093',
      400 : '#D3C274',
      500 : '#CAB554',
      600 : '#ccb241',
      700 : '#d8bc3e',
      800 : '#dab928',
      900 : '#e6be11'
  },
  'salmon' : {
      100 : '#fabab3',
      200 : '#faa9a0',
      300 : '#fa9b90',
      400 : '#fc8e81',
      500 : '#fa8072',
      700 : '#f86453',
      800 : '#f55644',
      900 : '#f74d3a'
  },
  'sun' : {
      100 : '#fadc7c',
      200 : '#f8d664',
      300 : '#f8cd3f',
      400 : '#fac822',
      500 : '#FFC300',
      700 : '#e6b000',
      800 : '#d1a101',
      900 : '#c29503'
  },
  'bright-blue' : {
      100 : '#46affa',
      200 : '#2fa9ff',
      300 : '#20a1fd',
      400 : '#109afc',
      500 : '#0096FF',
      600 : '#038ef1',
      700 : '#0185e4',
      800 : '#017ed8',
      900 : '#0072c4'
  },
  'ocean-blue' : {
      100 : '#829bb4',
      200 : '#6d97c0',
      300 : '#5b8dc0',
      400 : '#4a87c4',
      500 : '#4183C4',
      600 : '#377dc4',
      700 : '#2b77c4',
      800 : '#1a72c9',
      900 : '#0b6bca'
  },
  'clay' : {
      100 : '#C4AAAA',
      200 : '#B59595',
      300 : '#A78080',
      400 : '#996B6B',
      500 : '#8A5656',
      600 : '#8d4e4e',
      700 : '#8b4444',
      800 : '#833c3c',
      900 : '#7a3535'
  },
  'white' : {
      100 : '#FFFFFF',
      200 : '#FFFFFF',
      300 : '#FFFFFF',
      400 : '#FFFFFF',
      500 : '#FFFFFF',
      600 : '#FFFFFF',
      700 : '#FFFFFF',
      800 : '#FFFFFF',
      900 : '#FFFFFF'
  },
  'black' : {
      100 : '#000000',
      200 : '#000000',
      300 : '#000000',
      400 : '#000000',
      500 : '#000000',
      600 : '#000000',
      700 : '#000000',
      800 : '#000000',
      900 : '#000000'
  },
  'light-gray' : {
      100 : '#f1f0f0',
      200 : '#e6e6e6',
      300 : '#e0e0e0',
      400 : '#d8d7d7',
      500 : '#CCCCCC',
      600 : '#bebdbd',
      700 : '#8f8f8f',
      800 : '#7a7a7a',
      900 : '#636363'
  },
  'mid-gray' : {
      100 : '#f1f0f0',
      200 : '#e6e6e6',
      300 : '#e0e0e0',
      400 : '#d8d7d7',
      500 : '#CCCCCC',
      600 : '#bebdbd',
      700 : '#8f8f8f',
      800 : '#7a7a7a',
      900 : '#636363'
  },
  'drk-gray' : {
      100 : '#f1f0f0',
      200 : '#e6e6e6',
      300 : '#e0e0e0',
      400 : '#d8d7d7',
      500 : '#CCCCCC',
      600 : '#bebdbd',
      700 : '#8f8f8f',
      800 : '#7a7a7a',
      900 : '#636363'
  },
  // semantic
  'error' : {
      100 : '#fabab3',
      200 : '#faa9a0',
      300 : '#fa9b90',
      400 : '#fc8e81',
      500 : '#fa8072',
      700 : '#f86453',
      800 : '#f55644',
      900 : '#f74d3a'
  },
  'warning' : {
      100 : '#fadc7c',
      200 : '#f8d664',
      300 : '#f8cd3f',
      400 : '#fac822',
      500 : '#FFC300',
      700 : '#e6b000',
      800 : '#d1a101',
      900 : '#c29503'
  },
  'success' : {
      100 : '#7cca96',
      200 : '#6ed18f',
      300 : '#52d47d',
      400 : '#39d66d',
      500 : '#0BDA51',
      600 : '#01d448',
      700 : '#01ce45',
      800 : '#03c544',
      900 : '#03bd41'
  },
  'info' : {
      100 : '#46affa',
      200 : '#2fa9ff',
      300 : '#20a1fd',
      400 : '#109afc',
      500 : '#0096FF',
      600 : '#038ef1',
      700 : '#0185e4',
      800 : '#017ed8',
      900 : '#0072c4'
  },
  'link' : {
      100 : '#829bb4',
      200 : '#6d97c0',
      300 : '#5b8dc0',
      400 : '#4a87c4',
      500 : '#4183C4',
      600 : '#377dc4',
      700 : '#2b77c4',
      800 : '#1a72c9',
      900 : '#0b6bca'
  }
}

const prefixes = ['bg', 'border', 'text', 'flex', 'fill'];
const essentials = ['p', 'grid', 'border']

module.exports = {
  mode : 'jit',
  content : [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist : [{
    pattern : new RegExp(`(${prefixes.join("|")})-(${Object.keys(colors).join("|")})-.+`),
    // pattern : /-(${})-.+/,
    variants: [
      "first",
      "last",
      "odd",
      "even",
      "visited",
      "checked",
      "empty",
      "read-only",
      "group-hover",
      "group-focus",
      "focus-within",
      "hover",
      "focus",
      "focus-visible",
      "active",
      "disabled",
    ]
  }, {
    pattern : new RegExp(`(${essentials.join("|")})-.+`)
  }],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: colors,
    fontFamily: {
      sans: ['Graphik', 'sans-serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionProperty: {
          'height': 'height',
          'spacing': 'margin, padding',
          'border' : 'border, border-width, border-style, border-color'
      }
    }
  }
}