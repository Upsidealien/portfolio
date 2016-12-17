app.controller('ResumeController', ['$scope', function($scope) {

  $scope.name = 'Thomas Cartwright';
  $scope.title = 'FULL STACK DEVELOPER | QA TESTER';
  $scope.email = 'TJCARTWRIGHT91@GMAIL.COM';
  $scope.aboutMe = 'Im currently working as a full stack developer and QA lead at a tech startup in Melbourne. Originally from Scotland, I studied in Edinburgh, living in London after graduating and recently moved to Melbourne. In my spare time I cycle, surf, travel and programme.' ;


  $scope.courses = [
    {
      name: 'BSc (Hons) Mathematics',
      place: 'Edinburgh',
      year: '2010-2014',
      desc: 'Here I studied Mathematics while also studying music and computing'
    },
    {
      name: 'Machine Learning Course',
      place: 'Coursera',
      year: '2016',
      desc: 'Here I created and implemented machine learning algorithms'
    }
  ];

  $scope.experiences = [
    {
      name: 'RotaGeek',
      year: '2014-2016',
      title: 'QA Lead | Developer',
      desc: 'Leading the the QA department and full stack development'
    }
  ];

  $scope.skills = [
      {
        name: 'FRONTEND',
        desc: 'HTML, CSS, Angular, Javascript'
      },
      {
        name: 'BACKEND',
        desc: 'C# .NET, Python, GIT'
      },
      {
        name: 'MOBILE',
        desc: 'Xamarin Forms, Xamarin, iOS, Android'
      },
      {
        name: 'WORKING ON',
        desc: 'Machine Learning, Amazon AWS, D3.JS'
      }
  ];

  $scope.projects = [
      {
        name: 'TMSv1',
        desc: 'Amazing stuff',
        link: 'https://www.google.com',
        imgsrc: ''
      },
      {
        name: 'Clocks',
        desc: 'HTML, CSS and D3.js to develop several novel web pages for telling the time',
        link: 'https://www.google.com',
        imgsrc: ''
      }
  ];
}]);
