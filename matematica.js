function soma (a, b){
    return a + b
}

function sub (a, b){
    return a - b
}

function mult (a, b){
    return a * b
}

function fatorial(n){
  return n <= 1 ? 1 : n * fatorial(n-1)
}

module.exports = {
    soma,
    mult,
    fatorial
}