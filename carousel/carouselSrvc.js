angular.module('app').service('carouselSrvc',function(){


 const images = [
   {
     id:1,
     image: './images/home/1970s.jpg',
     text:"1"
   },
   {
     id:2,
     image: './images/home/1980s.jpg',
     text:"2"
   },
   {
     id:3,
     image: './images/home/1990s.jpg',
     text:"3"
   },
   {
     id:4,
     image: './images/home/2000s.jpg',
     text:"4"
   },
   {
     id:5,
     image: './images/home/2010s.jpg',
     text:"5"
   }
  ];


 this.getImages = function(){

     return images;
 }


});
