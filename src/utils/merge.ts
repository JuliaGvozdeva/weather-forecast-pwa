type userName = {
  firstName: string,
  lastName: string
}

type userAge = {
  age: {
    dateOfBirdth: string,
    fullAge: number
  }
}

function merge(firstObj: userName, secondObj: userAge): userName & userAge {
  return { ...firstObj, ...secondObj };
}