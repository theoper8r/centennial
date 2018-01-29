angular
.module('centennial')
.controller('eraIndex', [
  'eraFactory',
  '$http',
  '$state',
  indexController
])

function indexController(eraFactory, $http, $state) {
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

  this.handleNext = function() {
    console.log('next')
    console.log(document.getElementsByClassName('first-4'))
    var firstPages = document.getElementsByClassName('first')
    var nextPages = document.getElementsByClassName('next')
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

    for (var i=0;i<firstPages.length;i+=1){
      firstPages[i].style.display = 'none';
    }

    for (var t=0;t<nextPages.length;t+=1){
      nextPages[t].style.display = 'block';
    }

    this.slideNum = 2
    console.log(this.slideNum)

  }

  this.handlePrev = function() {
    console.log('prev')
    console.log(document.getElementsByClassName('first-4'))
    var firstPages = document.getElementsByClassName('first')
    var nextPages = document.getElementsByClassName('next')
    console.log(this.slideNum)
    if (this.slideNum === 1) {
      this.decade -= 1
      $state.go('Timeline' + this.decade)

    }

    else {
    for (var i=0;i<firstPages.length;i+=1){
      firstPages[i].style.display = 'block';
    }

    for (var t=0;t<nextPages.length;t+=1){
      nextPages[t].style.display = 'none';
    }
    this.slideNum = 1
    }

  }

  }
