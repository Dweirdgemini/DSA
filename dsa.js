const studentsDatabase = ['jonathan', 'jake', 'chukwuma', 'mandy'];

const findStudent = (allStudents, studentName) => {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i] === studentName) {
            console.log(`found ${studentName}`);
            return; // Exit the loop once the student is found
        }
    }
    console.log(`${studentName} not found`); // Optional: handle the case where the student isn't found
};

findStudent(studentsDatabase, 'mandy');
