const options = {
  chart: {
    alignTicks: false
  },
  rangeSelector: {
    selected: 1,
    buttons: [{
      type: 'minute',
      count: 500,
      text: '1m'
    }, {
      type: 'minute',
      count: 1440,
      text: '15m'
    }, {
      type: 'month',
      count: 3,
      text: '3m'
    }, {
      type: 'month',
      count: 6,
      text: '6m'
    }, {
      type: 'ytd',
      text: 'YTD'
    }, {
      type: 'year',
      count: 1,
      text: '1y'
    }, {
      type: 'all',
      text: 'All'
    }]
  },
  title: {
    text: 'ETH/BTC Volume'
  },
  series: [{
    type: 'column',
    name: 'ETH/BTC',
    data: [],
    dataGrouping: {
      units: [[
        'week', // unit name
        [1] // allowed multiples
      ], [
        'month',
        [1, 2, 3, 4, 6]
      ]]
    }
  }]
}

export default options
