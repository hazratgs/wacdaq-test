const highstockOptions = {
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
  yAxis: [
    {
      height: '80%'
    },
    {
      top: '80%',
      height: '20%',
      offset: 0
    }
  ],
}

export default highstockOptions
