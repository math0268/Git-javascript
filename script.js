const student = {
  name: 'jessica',
  age: 25,
  isActive: true
}
console.log(student)

student.classList = ['English', 'Art', 'Science']
console.log(student.classList[1])

const story = {
  noun: 'Toronto',
  verbs: ['run', 'walk'],
}

console.log(`The sun did not ${story.verbs[0]}
It was too ${ story.adjectives[0]} to ${story.verbs[1]} 
So we sat in the  ${ story.noun}
All that, ${ story.adjectives[1]}, [adjective 1] day.`)
