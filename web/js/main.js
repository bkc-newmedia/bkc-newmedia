// var secChart01 = document.getElementById('sec-01-chart').getContext('2d');
// var chart = new Chart(secChart01, {
//     type: 'pie',
//     data: {
//         labels: ['여성', '남성'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: ['rgb(53, 155, 189)', "rgb(246, 197, 45)"],
//             data: [3, 10]
//         }]
//     },
//     options: {}
// });

var secChart0201 = document.getElementById('sec-02-chart-01').getContext('2d');
var chart = new Chart(secChart0201, {
    type: 'doughnut',
    data: {
        label: '여성',
        labels: ['긍정','중립', '부정'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ["rgb(246, 197, 45)",'rgb(100, 175, 150)', 'rgb(53, 155, 189)' ],
            data: [1189177, 3072437, 2221313]
        }]
    },
    options: {
      title: {
        display: true,
        fontSize:30,
        fontColor:"#333333",
        margin: 10,
        text: '여성'
    }
    }
});

var secChart0202 = document.getElementById('sec-02-chart-02').getContext('2d');
var chart = new Chart(secChart0202, {
    type: 'doughnut',
    label: '남성',
    data: {
        labels: ['긍정', '중립', '부정'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ["rgb(246, 197, 45)", 'rgb(100, 175, 150)', 'rgb(53, 155, 189)'],
            data: [842775, 1523563, 1935181]
        }]
    },
    options: {
      title: {
        display: true,
        fontSize:30,
        fontColor:"#333333",
        margin: 10,
        text: '남성'
    }
    }
});

// var secChart03 = document.getElementById('sec-03-chart').getContext('2d');
// var chart = new Chart(secChart03, {
//     type: 'pie',
//     data: {
//         labels: ['여성', '남성'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: ['rgb(53, 155, 189)', "rgb(246, 197, 45)"],
//             data: [3, 10]
//         }]
//     },
//     options: {}
// });

// var secChart04 = document.getElementById('sec-04-chart').getContext('2d');
// var chart = new Chart(secChart04, {
//     type: 'pie',
//     data: {
//         labels: ['여성', '남성'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: ['rgb(53, 155, 189)', "rgb(246, 197, 45)"],
//             data: [3, 10]
//         }]
//     },
//     options: {}
// });

var labelArray = ['세계','정치','IT과학','연예','생활문화','경제','사회'],
    positiveData0501 = [16.7
      ,6.8
      ,2.9
      ,32.5
      ,17.8
      ,6.2
      ,17.1];
var secChart0501 = document.getElementById('sec-05-chart-01').getContext('2d');
var chart = new Chart(secChart0501, {
  type: 'pie',
  data: {
    labels: labelArray,
    datasets: [{
        label: '여성 %',
        data: positiveData0501,
        backgroundColor: ['rgb(246, 196, 45)',"rgb(245, 147, 37)","rgb(134, 223, 243)","rgb(66, 120, 183)","rgb(54, 99, 142)","rgb(59, 126, 130)","rgb(145, 193, 34)"]
      }
    ]
  },
  options: {
    title: {
      display: true,
      fontSize:30,
      fontColor:"#333333",
      margin: 30,
      text: '여성'
  },
    plugins: {
      datalabels: {
        color: 'white',
        font: {
          weight: 'bold'
        },
        formatter: function(value, context) {
          return Math.round(value) + '%';
        }
      }
    }
  }
});
var labelArray = ['세계','정치','IT과학','연예','생활문화','경제','사회'],
    positiveData0502 = [9.8
      ,1.8
      ,1.3
      ,30.5
      ,10.6
      ,2.7
      ,9.6];
var secChart0502 = document.getElementById('sec-05-chart-02').getContext('2d');
var chart = new Chart(secChart0502, {
  type: 'pie',
  data: {
    labels: labelArray,
    datasets: [{
        label: '남성 %',
        data: positiveData0502,
        backgroundColor: ['rgb(246, 196, 45)',"rgb(245, 147, 37)","rgb(134, 223, 243)","rgb(66, 120, 183)","rgb(54, 99, 142)","rgb(59, 126, 130)","rgb(145, 193, 34)"]
      }
    ]
  },
  options: {
    title: {
      display: true,
      fontSize:30,
      fontColor:"#333333",
      margin: 10,
      text: '남성'
  },
    plugins: {
      datalabels: {
        color: 'white',
        font: {
          weight: 'bold'
        },
        formatter: function(value, context) {
          return Math.round(value) + '%';
        }
      }
    }
  }
});

var labelArray = ['경제','사회','생활문화','세계','연예','정치','IT과학'],
    positiveData01 = [19.86, 8.51, 35.72, 1.65, 26.50, 7.22, 24.77], 
    negativeData01 = [26.51, 60.69, 26.60, 91.55, 18.27, 61.34, 11.86], 
    neutralData01 = [53.63, 30.80, 37.68, 6.80, 55.23, 31.44, 63.37]; 
var secChart06 = document.getElementById('sec-06-chart').getContext('2d');
var chart = new Chart(secChart06, {
  type: 'horizontalBar',
  data: {
    labels: labelArray,
    datasets: [{
        label: '긍정적 %',
        data: positiveData01,
        backgroundColor: 'rgb(246, 197, 45)',
        borderColor: 'rgb(246, 197, 45)',
      },
      {
        label: '부정적 %',
        data: negativeData01,
        backgroundColor: 'rgb(53, 155, 189)',
        borderColor: 'rgb(53, 155, 189)',
      },
      {
        label: '중립적 %',
        data: neutralData01,
        backgroundColor: 'rgb(245, 147, 37)',
        borderColor: 'rgb(245, 147, 37)',
      }
    ]
  },
  options: {
    scales: {
      xAxes: [{
        stacked: true,
      }],
      yAxes: [{
        stacked: true
      }]
    },
    plugins: {
      datalabels: {
        color: 'white',
        font: {
          weight: 'bold'
        },
        formatter: function(value, context) {
          return Math.round(value) + '%';
        }
      }
    }
  }
});

var labelArray = ['경제','사회','생활문화','세계','연예','정치','IT과학'],
  positiveData02 = [23.75, 2.43, 37.24, 1.77, 26.86, 5.40, 26.27],
  negativeData02 = [27.25, 87.52, 33.58, 89.97, 16.85, 75.46, 24.22];
  neutralData02 = [48.99, 10.05, 29.18, 8.26, 56.29, 19.14, 49.51];
var secChart07 = document.getElementById('sec-07-chart').getContext('2d');
var chart = new Chart(secChart07, {
  type: 'horizontalBar',
  data: {
    labels: labelArray,
    datasets: [{
        label: '긍정적 %',
        data: positiveData02,
        backgroundColor: 'rgb(246, 197, 45)',
        borderColor: 'rgb(246, 197, 45)',
      },
      {
        label: '부정적 %',
        data: negativeData02,
        backgroundColor: 'rgb(53, 155, 189)',
        borderColor: 'rgb(53, 155, 189)',
      },
      {
        label: '중립적 %',
        data: neutralData02,
        backgroundColor: 'rgb(245, 147, 37)',
        borderColor: 'rgb(245, 147, 37)',
      }
    ]
  },
  options: {
    scales: {
      xAxes: [{
        stacked: true,
      }],
      yAxes: [{
        stacked: true
      }]
    },
    plugins: {
      datalabels: {
        color: 'white',
        font: {
          weight: 'bold'
        },
        formatter: function(value, context) {
          return Math.round(value) + '%';
        }
      }
    }
  }
});


var secChart08 = document.getElementById('sec-08-chart').getContext('2d');
var chart = new Chart(secChart08, {
    type: 'pie',
    data: {
        labels: ['여성', '남성'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ["rgb(246, 197, 45)",'rgb(53, 155, 189)'],
            data: [3, 10]
        }]
    },
    options: {}
});

var secChart09 = document.getElementById('sec-09-chart').getContext('2d');
var chart = new Chart(secChart09, {
    type: 'line',
    data: {
        labels: ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '여성',
            backgroundColor: ["rgb(246, 197, 45)"],
            borderColor: "rgb(246, 197, 45)",
            data: [15.37, 17.5, 16.88, 15.46, 15.14, 17.79, 19.36, 19.31, 19.93, 19.8, 19.97, 20.56, 17.1, 16.07, 16.26, 16.42, 18.67, 21.11, 19.78, 18.38
            ],
            fill: false
        }, {
            label: '남성',
            backgroundColor: ['rgb(53, 155, 189)'],
            borderColor: 'rgb(53, 155, 189)',
                data: [16.07, 17.08, 18.83, 16.7, 16.47, 20.08, 21.11, 21.7, 22.18, 21.26, 20.62, 19.81, 17.47, 16.36, 16.18, 16.74, 21.01, 23.58, 22.41, 21.43
            ],
            fill: false
        }]
    },
    options: {}
});

var secChart10 = document.getElementById('sec-10-chart').getContext('2d');
var chart = new Chart(secChart10, {
    type: 'line',
    data: {
        labels: ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '여성',
            backgroundColor: ["rgb(246, 197, 45)"],
            borderColor: "rgb(246, 197, 45)",
            
            data: [51.99, 49.93, 54.51, 57.33, 56.7, 51.23, 50.0, 50.37, 48.9, 45.29, 43.35, 41.89, 45.48, 43.91, 42.49, 44.94, 49.39, 48.48, 50.76, 53.84
            ],
            fill: false
        }, {
            label: '남성',
            backgroundColor: ['rgb(53, 155, 189)'],
            borderColor: 'rgb(53             , 155, 189)',
                data: [53.23, 53.05, 54.02, 59.3, 57.21, 50.06, 46.73, 48.51, 47.9, 43.83, 41.52, 40.43, 39.85, 40.19, 39.23, 42.63, 46.65, 47.0, 50.23, 53.21
            ],
            fill: false
        }]
    },
    options: {}
});

(function (global, $) {
  var $menu = $('.floating-menu li.m'),
      $contents = $('.scroll'),
      $doc = $('html, body');
  $(function () {
      $menu.on('click', 'a', function (e) {
          var $target = $(this).parent(),
              idx = $target.index(),
              section = $contents.eq(idx),
              offsetTop = section.offset().top;
          $doc.stop()
              .animate({
                  scrollTop: offsetTop
              }, 800);
          return false;
      });
  });
  
  $(window).scroll(function () {
      var scltop = $(window).scrollTop();
      $.each($contents, function (idx, item) {
          var $target = $contents.eq(idx),
              i = $target.index(),
              targetTop = $target.offset().top;

          if (targetTop <= scltop) {
              $menu.removeClass('on');
              $menu.eq(idx).addClass('on');
          }
          if (!(0 <= scltop)) {
              $menu.removeClass('on');
          }
      })
  });
}(window, window.jQuery));

$(function(){
  $(".gnb_btn").click(function(){
    $(".gnb").addClass("on");
  })
  $(".gnb p").click(function(){
    $(".gnb").removeClass("on");
  })

});