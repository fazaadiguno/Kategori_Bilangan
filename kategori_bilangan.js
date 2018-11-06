//ganjil genap
 var gangen = function(x){
    if(x % 2 == 0){
    return 'Genap';
} else {
    return 'ganjil';
};
};

// bilangan bulat

var bulat = function(x){
    if (Number.isInteger(x)) {
      return 'Bulat!';
    }
    return false;
  }
  

  // bilangan 0

  var zero = function(x){
      if (x == 0){
          return 'Nol'
      } else {
        return false
    }
  }

console.log(zero(0));

// bilangan cacah dan negatif
var cacah = function(x){
    if (Number.isInteger(x) && x >= 0){
        return 'Cacah'
    } else if(Number.isInteger(x) && x < 0){
        return 'Negatif'
    }
}

// Bilangan asli

var asli = function(x){
    if (Number.isInteger(x) && x > 0){
        return 'Asli'
    } else {
        return false
    }
}

// Bilangan Prima

var prima = function(x) {
    for(var i = 2; i < x; i++)
      if(x % i === 0) return false;
    if(x > 1) return 'Prima';
  }

// Bilangan Komposit

var komposit = function(x){
    for(var i = 2; i < x; i++)
    if (Number.isInteger(x) && x > 1 && x % i === 0){
        return 'Komposit'
    } else {
        return false
    }
}


// Finale

var bilangan = function(x){
    var y = [gangen(x), bulat(x), zero(x), cacah(x), asli(x), prima(x), komposit(x)]
    return y
}

console.log(bilangan(10))