const suffix = suffixStr => input => input + ` ${suffixStr}`
const pls = suffix('pls')
const kthx = suffix('kthnks')
const bye = suffix('bye ༼つಠ益ಠ༽つ ─=≡ΣO')
const gitgud = suffix('gitgud')

const memeify = x => bye(kthx(gitgud(pls(x))))
console.log('memeify:', memeify('Teemo') );


// Using Ramda (REPL://ramdajs.com/repl)
/* 
let composedMeme = R.compose(bye, kthx, gitgud, pls)
console.log('composedMeme:', composedMeme('Rora'));

// Alternative way if you want to read left to right
let composedMeme = R.pipe(pls, gitgud, kthx, bye)

console.log('composedMeme:', composedMeme('Rora'));
*/