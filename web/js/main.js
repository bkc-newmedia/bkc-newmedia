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
        labels: ['긍정', '부정'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ["rgb(246, 197, 45)",'rgb(53, 155, 189)'],
            data: [3, 10]
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
        labels: ['긍정', '부정'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: [ "rgb(246, 197, 45)",'rgb(53, 155, 189)'],
            data: [3, 10]
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

var labelArray = ["경제", "사회","생활문화","세계","연예","정치","IT 과학"],
    positiveData0501 = [55, 82, 24,24,54,34,12];
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
var labelArray = ["경제", "사회","생활문화","세계","연예","정치","IT 과학"],
    positiveData0502 = [55, 82, 24,24,54,34,12];
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

var labelArray = ["경제", "사회","생활문화","세계","연예","정치","IT 과학"],
    positiveData01 = [55, 82, 24, 24, 54, 34, 12],
    negativeData01 = [45, 18, 76, 76, 46, 66, 88];
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

var labelArray = ["경제", "사회","생활문화","세계","연예","정치","IT 과학"],
  positiveData02 = [55, 82, 24, 24, 54, 34, 12],
  negativeData02 = [45, 18, 76, 76, 46, 66, 88];
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
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '여성',
            backgroundColor: ["rgb(246, 197, 45)"],
            borderColor: "rgb(246, 197, 45)",
            data: [5, 3, 3, 4, 5, 6, 7, 8, 20, 4, 20],
            fill: false
        }, {
            label: '남성',
            backgroundColor: ['rgb(53, 155, 189)'],
            borderColor: 'rgb(53, 155, 189)',
            data: [20, 13, 33, 64, 35, 16, 7, 8, 20, 4, 20],
            fill: false
        }]
    },
    options: {}
});

var secChart10 = document.getElementById('sec-10-chart').getContext('2d');
var chart = new Chart(secChart10, {
    type: 'line',
    data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '여성',
            backgroundColor: ["rgb(246, 197, 45)"],
            borderColor: "rgb(246, 197, 45)",
            
            data: [20, 13, 33, 64, 35, 16, 7, 8, 20, 4, 20],
            fill: false
        }, {
            label: '남성',
            backgroundColor: ['rgb(53, 155, 189)'],
            borderColor: 'rgb(53, 155, 189)',
            data: [5, 3, 3, 4, 5, 6, 7, 8, 20, 4, 20],
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