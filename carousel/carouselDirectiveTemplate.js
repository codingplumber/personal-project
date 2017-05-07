// <div id="carousel-container" class="row">
//    <div class="col-md-12 carousel-div">
//
//        <div id="slides_control" ng-controller="carouselCtrl">
//            <div>
//                <carousel interval="myInterval">
//                    <slide ng-repeat="slide in slides" active="slide.active">
//                       <div class="carousel-image-container">
//
//                            <img class="carousel-image" ng-src="{{slide.image}}">
//                       </div>
//
//                        <div class="carousel-caption">
//                            <h4 class="inner-slide">Slide {{$index+1}}</h4>
//                        </div>
//                    </slide>
//                </carousel>
//            </div>
//        </div>
//    </div>
// </div>'''
//
// [2:28]
// '''#carousel-container
//    width: 100%
//    margin: auto
//    .carousel-div
//        margin: 0
//        padding: 0
//        .carousel-image-container
//            width: 100%
//            //height: 60vh
//            .carousel-image
//                width: 100%
//                height: 100%
//        '''
//
// [2:28]
// '''angular.module('surfApp').controller('carouselCtrl',function($scope,carouselService){
//
//
//
//
//  $scope.myInterval = 4000;
//  $scope.active = 0;
//  $scope.slides = carouselService.getImages();
//  var currIndex = 0;
//
//
// });'''
//
// [2:28]
// '''angular.module('surfApp').directive('carouselDir', function(){
//
//    return {
//        restrict: "E",
//        templateUrl: "app/directives/carouselDir/carousel.html",
//        controller: 'carouselCtrl',
//        scope:{
//            bgColor: '='
//        },
//        link: function(scope,element,attribute){
//            $('.inner-slide').css({"width": scope.bgColor})
//        }
//    }
//
//
//
//
//
// });'''
//
// [2:29]
// '''angular.module('surfApp').service('carouselService',function(){
//
//
//    const images = [
//        {
//            id:1,
//            image: './images/home/1970s.jpg',
//            text:"1"
//        },
//        {
//            id:2,
//            image: './images/home/1980s.jpg',
//            text:"2"
//        },
//        {
//            id:3,
//            image: './images/home/1990s.jpg',
//            text:"3"
//        },
//        {
//            id:4,
//            image: './images/home/2000s.jpg',
//            text:"4"
//        },
//        {
//            id:5,
//            image: './images/home/2010s.jpg',
//            text:"5"
//        },
//         {
//            id:6,
//            image: './images/banner6.png',
//            text:"6"
//        },
//
//    ];
//
//
//    this.getImages = function(){
//
//        return images;
//    }
//
//
// });
