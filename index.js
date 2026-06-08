/*
==================
    Question 1
==================
*/


const students = [
    {
        id: 1,
        name: 'Olurotimi',
        age: 21,
        grades: [55, 67, 60]
    },
    {
        id: 2,
        name: 'Abubakar',
        age: 29,
        grades: [65, 70, 82]
    },
    {
        id: 3,
        name: 'Kelechi',
        age: 25,
        grades: [59, 69, 66]
    },
    {
        id: 4,
        name: 'Sonibare',
        age: 31,
        grades: [80, 89, 75]
    },
    {
        id: 5,
        name: 'Williams',
        age: 26,
        grades: [70, 67, 60]
    },
    {
        id: 6,
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
    return Number(average.toFixed(2))
}

const studentsWithAverage = students.map((student) => {
    let average  = calculateAverage(student.grades)
    return {...student, average}
})
console.log(studentsWithAverage)

/*
==================
    Question 3
==================
*/

const getPassingStudents = (students) => students.filter((student) => student.average >= 60 )

const passing = getPassingStudents(studentsWithAverage);
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
        return {id, name, average, 'letterGrade': 'A'}
    } else if (score >= 80) {
        return {id, name, average, 'letterGrade': 'B'}
    } else if (score >= 70) {
        return {id, name, average, letterGrade: 'C'}
    } else if (score  >= 60) {
        return {id, name, average, letterGrade: 'D'}
    } else {
        return {id, name, average, letterGrade: 'F'}
    }
}


function addStatus (student) {
    let {average, name, id} = student
    return {
        id, 
        name, 
        average, 
        status: average >= 60 ? 'Pass' : 'Fail'
    }
}


const studentWithLetterGrade = processStudents(studentsWithAverage, addLetterGrade)
console.log(studentWithLetterGrade)

const studentWithStatus = processStudents(studentsWithAverage, addStatus)
console.log(studentWithStatus)
console.log(students);



/*
==================
    Question 5
==================
*/

const findStudentById = (students, id) => {
    return students.find(student => student.id === id) || null
}

const student = findStudentById(students, 1)
console.log(student);
