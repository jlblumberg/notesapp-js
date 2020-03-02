const describe = (description, fn) => {
  console.log(description)
  fn()
}

const it = (message, fn) => describe(' ' + message, fn)

const matcher = (expectation) => ({
  toBe: function (assertionToCheck) {
    if (expectation === assertionToCheck) {
      console.log('Pass')
      return true
    } else {
      console.log('Fail')
      return false
    }
  }
});

const expect = (expectation) => matcher(expectation)

const assertion = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },
  isFalse: function (assertionToCheck) {
    if (assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsey");
    }
  },
};

