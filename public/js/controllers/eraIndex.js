angular
.module('centennial')
.controller('eraIndex', [
  'eraFactory',
  '$http',
  '$state',
  indexController
])

function indexController(eraFactory, $http, $state) {
  console.log('hello')
  // this.uncheck() = function  {
  //   console.log('unchecking')
  //   document.getElementById('mob-toggle').clicked = false
  // }

  // this.uncheck()
  this.hovering = false
  // this.collapse = false
  // console.log('at index')
  // this.eras = eraFactory.query()
  // console.log(eraFactory.query())
  // console.log(this.eras)
  // this.eraNum = 0
  // // this.currentEra = eraFactory.get({decade: this.eraNum}).then((response) => {this.currentEra = response})
  // // this.currentEra2 = eraFactory.query({decade: this.eraNum}).then((response) => {this.currentEra2 = response})
  // console.log(this.currentEra)
  // console.log(this.currentEra2)
  //
  //
  // this.currEra = $http({
  //   method: 'GET',
  //   url: '/eras/' + this.eraNum
  // }).then((response) => {this.currEra = response; console.log('h era' + response)})
  //
  // console.log(this.currEra)
  this.setDecade = eraFactory.setDecade
  this.decade = eraFactory.getDecade()
  this.minusDec = eraFactory.minusDec
  this.addDec = eraFactory.addDec
  console.log(this.decade)
  console.log('decade is ' + eraFactory.getDecade())
  // console.log(this.setDecade)
  this.slideNum = 1
  // this.setDecade = eraFactory.setDecade()


  // this.navSelect = function(child) {
  //   var navLinks = document.getElementsByClassName('timeline-links')
    // for (var i=0;i<navLinks.length;i+=1){
      // if(navLinks[i].classList.contains('selectedNav')){
      //   navLinks[i].classList.remove('selectedNav')
      //   console.log('nav removed')
      // }
    // }
  //   navLinks[child].classList.add('selectedNav')
  //   console.log('nav selected')
  //
  // }

  this.isOverflown = function () {
    console.log('checking for overflow')
    var element = document.getElementById("intro-div")
    var btn = document.getElementById("show-btn")
    if (element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth) {
      console.log('changing button')
      btn.style.display="flex"
      btn.style.justifyContent = "center"
    }
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

  this.handleNext = function() {
    console.log('next')
    console.log(document.getElementsByClassName('first-4'))
    var firstPages = document.getElementsByClassName('first')
    var nextPages = document.getElementsByClassName('next')
    var thirdPages = document.getElementsByClassName('third')
    var nextSlide = document.getElementById("next-page")
    var nextDecade = document.getElementById("next-decade")
    var prevPage = document.getElementById('prev-page')
    var prevDecade = document.getElementById('prev-decade')


    if (firstPages.length < 4){
      // this.decade += 1
      this.setDecade(this.decade + 1)
      console.log('next decade' + this.decade)
      $state.go('Timeline' + (this.decade + 1))
    }
    // else if (firstPages.length === 4 || this.slideNum === 2) {
    //   this.slideNum = 1
    //   // this.decade += 1
    //
    //   console.log('next decade' + this.decade)
    //   console.log(this.slideNum)
    //   $state.go('Timeline' + this.decade)
    // }
if (this.slideNum === 1 && nextPages.length==0) {

  nextSlide.style.display = "none"
  nextDecade.style.display = "block"
  this.slideNum = 1
}

if (this.slideNum === 1 && nextPages.length>0) {
    for (var i=0;i<firstPages.length;i+=1){
      firstPages[i].style.display = 'none';
    }

    for (var t=0;t<nextPages.length;t+=1){
      nextPages[t].style.display = 'block';
    }
      if (this.slideNum === 1 && nextPages.length>0 && thirdPages.length==0){
      prevPage.style.display = "block"
      prevDecade.style.display = "none"
      nextSlide.style.display = "none"
      nextDecade.style.display = "block"
    }
    prevPage.style.display = "block"
    prevDecade.style.display = "none"
    this.slideNum = 2
    console.log('slide: ' + this.slideNum)

  } else if (this.slideNum === 1 && nextPages.length>0 && thirdPages.length==0){
    prevPage.style.display = "block"
    prevDecade.style.display = "none"
    nextSlide.style.display = "none"
    nextDecade.style.display = "block"
  } else if (this.slideNum === 2 && thirdPages.length>0) {
      for (var t=0;t<nextPages.length;t+=1){
        nextPages[t].style.display = 'none';
      }

      for (var x=0;x<thirdPages.length;x+=1){
        thirdPages[x].style.display = 'block';
      }
      prevPage.style.display = "block"
      prevDecade.style.display = "none"
      nextSlide.style.display = "none"
      nextDecade.style.display = "block"
      this.slideNum = 3
      console.log('slide: ' + this.slideNum)
  } else if (this.slideNum === 2) {
      nextSlide.style.display = "none"
      nextDecade.style.display = "block"
      prevPage.style.display = "block"
      prevDecade.style.display = "none"
    }

    else if (this.slideNum === 3) {
      nextSlide.style.display = "none"
      nextDecade.style.display = "block"
    }
}

  this.handlePrev = function() {
    console.log('prev')
    console.log(document.getElementsByClassName('first-4'))
    var firstPages = document.getElementsByClassName('first')
    var nextPages = document.getElementsByClassName('next')
    var thirdPages = document.getElementsByClassName('third')
    var nextSlide = document.getElementById("next-page")
    var nextDecade = document.getElementById("next-decade")
    var prevPage = document.getElementById('prev-page')
    var prevDecade = document.getElementById('prev-decade')
    console.log(this.slideNum)
    // if (this.slideNum === 1) {
    //   this.decade -= 1
    //   $state.go('Timeline' + this.decade)
    //
    // }
    if (this.slideNum === 2) {
      for (var i=0;i<firstPages.length;i+=1){
        firstPages[i].style.display = 'block';
      }
      for (var t=0;t<nextPages.length;t+=1){
        nextPages[t].style.display = 'none';
      }
      nextSlide.style.display = "block"
      nextDecade.style.display = "none"
      prevPage.style.display = "none"
      prevDecade.style.display = "block"
      this.slideNum = 1
    }
    else if (this.slideNum === 3){
    for (var i=0;i<thirdPages.length;i+=1){
      thirdPages[i].style.display = 'none';
    }

    for (var t=0;t<nextPages.length;t+=1){
      nextPages[t].style.display = 'block';
    }
    nextSlide.style.display = "block"
    nextDecade.style.display = "none"
    prevPage.style.display = "block"
    prevDecade.style.display = "none"
    this.slideNum = 2
    }

  }

  this.isOverflown()

  }
