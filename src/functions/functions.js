
function calculate(array) {

    try {
      const ans = eval(array.map(item => item == 'x'? '*': item).join(''))
      return ans
    } catch {
      return "Invalid syntax"
    }

}

export { calculate }