
function calculate(array) {

    try {
      const ans = eval(array.join(''))
      return ans
    } catch {
      return "Invalid syntax"
    }

}

export { calculate }