angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('iscap2017.iscapConference2017', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/iscapConference2017.html',
        controller: 'iscapConference2017Ctrl'
      }
    }
  })

  .state('iscap2017', {
    url: '/side-menu21',
    templateUrl: 'templates/iscap2017.html',
    controller: 'iscap2017Ctrl'
  })

  .state('iscap2017.schedule', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      }
    }
  })

  .state('iscap2017.messages', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })

  .state('iscap2017.speakerBios', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/speakerBios.html',
        controller: 'speakerBiosCtrl'
      }
    }
  })

  .state('iscap2017.map', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('iscap2017.scheduleByDay', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/scheduleByDay.html',
        controller: 'scheduleByDayCtrl'
      }
    }
  })

  .state('iscap2017.scheduleBySessionCategory', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/scheduleBySessionCategory.html',
        controller: 'scheduleBySessionCategoryCtrl'
      }
    }
  })

  .state('iscap2017.scheduleBySpeaker', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/scheduleBySpeaker.html',
        controller: 'scheduleBySpeakerCtrl'
      }
    }
  })

  .state('iscap2017.november52017', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/november52017.html',
        controller: 'november52017Ctrl'
      }
    }
  })

  .state('iscap2017.november62017', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/november62017.html',
        controller: 'november62017Ctrl'
      }
    }
  })

  .state('iscap2017.november72017', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/november72017.html',
        controller: 'november72017Ctrl'
      }
    }
  })

  .state('iscap2017.november82017', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/november82017.html',
        controller: 'november82017Ctrl'
      }
    }
  })

  .state('iscap2017.paperAIWhatWeKnowNow', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paperAIWhatWeKnowNow.html',
        controller: 'paperAIWhatWeKnowNowCtrl'
      }
    }
  })

  .state('iscap2017.paperCodingWhereIsGoing', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paperCodingWhereIsGoing.html',
        controller: 'paperCodingWhereIsGoingCtrl'
      }
    }
  })

  .state('iscap2017.sessionSpotlight', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sessionSpotlight.html',
        controller: 'sessionSpotlightCtrl'
      }
    }
  })

  .state('animatedGraphicsANewDawn', {
    url: '/page15',
    templateUrl: 'templates/animatedGraphicsANewDawn.html',
    controller: 'animatedGraphicsANewDawnCtrl'
  })

  .state('iscap2017.sessionNetworkSecurity', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sessionNetworkSecurity.html',
        controller: 'sessionNetworkSecurityCtrl'
      }
    }
  })

  .state('iscap2017.paperJavaVsC', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paperJavaVsC.html',
        controller: 'paperJavaVsCCtrl'
      }
    }
  })

  .state('iscap2017.paperTheFlippedCProgramming', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paperTheFlippedCProgramming.html',
        controller: 'paperTheFlippedCProgrammingCtrl'
      }
    }
  })

  .state('iscap2017.paperBigDataAnalysisMethodology', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paperBigDataAnalysisMethodology.html',
        controller: 'paperBigDataAnalysisMethodologyCtrl'
      }
    }
  })

  .state('iscap2017.paperStudentVeteransSocialMedia', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paperStudentVeteransSocialMedia.html',
        controller: 'paperStudentVeteransSocialMediaCtrl'
      }
    }
  })

  .state('iscap2017.everyone', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/everyone.html',
        controller: 'everyoneCtrl'
      }
    }
  })

  .state('iscap2017.coders', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/coders.html',
        controller: 'codersCtrl'
      }
    }
  })

  .state('iscap2017.artificialIntelligence', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/artificialIntelligence.html',
        controller: 'artificialIntelligenceCtrl'
      }
    }
  })

  .state('iscap2017.animatedGraphics', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/animatedGraphics.html',
        controller: 'animatedGraphicsCtrl'
      }
    }
  })

  .state('messages2', {
    url: '/page25',
    templateUrl: 'templates/messages2.html',
    controller: 'messages2Ctrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});