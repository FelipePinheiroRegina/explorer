// Getting three grades of the students
let students = prompt('Say your name: ')
let gradeOne = prompt('Enter your first grade: ')
let gradeTwo = prompt('Enter your second grade: ')
let gradeThree = prompt('Enter your thirth grade: ')

// Conversion of grades for the number
gradeOne = Number(gradeOne)
gradeTwo = Number(gradeTwo)
gradeThree = Number(gradeThree)

// Making calculation of the grades for the everage
let average = (gradeOne + gradeTwo + gradeThree) / 3
let averageOfCut = 5.5

// Giving the congratulations to who passed, and motivating who don't passed
if (average >= averageOfCut) {
    alert(`Congratulations, ${students}!, was you approved!.
    Your average was of ${average.toFixed(1)}.`)
} else {
    alert(`${students}, you was reproved, but don't stop the learning, persist ever. your average was of ${average.toFixed(1)}`)
}



