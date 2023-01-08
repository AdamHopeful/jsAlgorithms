// let hasan = [1, 2, 3, 4, 5]

// let toplam = 0
// console.log(hasan.map(item => toplam += item) ) 
// console.log(toplam)


// let a = hasan.reduce((acc, el) => acc += el)
// console.log(a)

// let b = hasan.filter(el => el % 2 === 0)
// console.log(b)

// let deneme = []
// let ccc = []
// hasan.map(el => el % 2 === 0 ? deneme.push(el) : ccc.push(el))
// console.log(deneme)
// console.log(ccc)

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

const shortcut = (string) => {
    let sesli = ['e', 'o', 'a', 'E', 'O', 'A', 'i', 'I', 'u', 'U']
    let bos = ''
    let can = string.split('') 
    let canan = can.map(r => sesli.includes(r) !== true ? bos += r : null )
   return bos;
  }

 console.log(shortcut('goodbye'))
