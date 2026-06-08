/*
==================
    Question 1
==================
*/


const students = [
    {
        id: '983yt4',
        name: 'Olurotimi',
        age: 21,
        grades: [55, 67, 60]
    },
    {
        id: '045dr1',
        name: 'Abubakar',
        age: 29,
        grades: [65, 70, 82]
    },
    {
        id: '788dr1',
        name: 'Kelechi',
        age: 25,
        grades: [59, 69, 66]
    },
    {
        id: '983nb2',
        name: 'Sonibare',
        age: 31,
        grades: [80, 89, 75]
    },
    {
        id: '030ye4',
        name: 'Williams',
        age: 26,
        grades: [70, 67, 60]
    },
    {
        id: '983yt4',
        name: 'Ephraim',
        age: 22,
        grades: [45, 57, 60]
    }
]


/*
==================
    Question 2
==================
*/


function calculateAverage (grades) {
    let average = grades.reduce((acc, curr) => acc + curr, 0) / grades.length
    return average.toFixed(2)
}

students.map((student) => {
    student.average  = calculateAverage(student.grades)
    console.log(student)
})


/*
==================
    Question 3
==================
*/

const getPassingStudents = (students) => students.filter((student) => student.average >= 60 )

const passing = getPassingStudents(students);
console.log(passing);


/*
==================
    Question 4
==================
*/

function processStudents (students, callback) {
    let processed = students.map((student) => callback(student))
    return processed
}

function addLetterGrade (student) {
    let score = student.average

    let {id, name, average} = student

    if  (score >= 90 ) {
        student.letterGrade = 'A'
        let {letterGrade} = student
        return {id, name, average, letterGrade}
    } else if (score >= 80) {
        student.letterGrade = 'B'
        let {letterGrade} = student
        return {id, name, average, letterGrade}
    } else if (score >= 70) {
        student.letterGrade = 'C'
        let {letterGrade} = student
        return {id, name, average, letterGrade}
    } else if (score  >= 60) {
        student.letterGrade = 'D'
        let {letterGrade} = student
        return {id, name, average, letterGrade}
    } else {
        student.letterGrade = 'F'
        let {letterGrade} = student
        return {id, name, average, letterGrade}
    }
}


function addStatus (student) {
    let {average, name, id} = student
    student.status = average > 60 ? 'Pass' : 'Fail'
    let {status} = student
    console.log(status)
    return {id, name, average, status}
}


const studentWithStatus = processStudents(students, addStatus)
console.log(studentWithStatus)

const studentWithLetterGrade = processStudents(students, addLetterGrade)
console.log(studentWithLetterGrade)



/*
==================
    Question 5
==================
*/

const findStudentById = (students, id) => {
    students.find()
}

const student = findStudentById(students, '030ye4')
console.log(student);
