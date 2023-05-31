
function classifier(input) {

    // copy using spread
    const inputArr = [...input];
    const output = {};

    //   Check empty input
    if (!inputArr.length) {
        output.noOfGroups = 0;
        return output;
    }
    // Use map function to run method that calculates student age
    const ageArr = inputArr.map(student => {
        student.age = 2019 - new Date(student.dob).getFullYear();
        return student

        // Sort student age
    }).sort((a, b) => {
        return a.age - b.age;
    })

    const membersArray = [];
    let members = [];

    members.push(ageArr[0]);
        //  loop through the students age and compare them to find age difference less than 5 years
    for (let i = 1; i < ageArr.length; i++) {
        if (ageArr[i].age - members[0].age <= 5 && members.length < 3) {
            members.push(ageArr[i]);
        } else {
            membersArray.push(members);
            members = [];
            members.push(ageArr[i]);
        }
    }

    if (members.length > 0) {
        membersArray.push(members);
    }
    
    output.noOfGroups = membersArray.length;
    // loops through the student info and puts the result in output
    for (let i = 0; i < membersArray.length; i++) {
        output[`group${i + 1}`] = {
            members: membersArray[i],
            oldest: membersArray[i][membersArray[i].length - 1].age,
            sum: membersArray[i].reduce((acc, current) => {
                return acc += current.age;
            }, 0),
            regNos: membersArray[i].map(student => {
                return Number(student.regNo);
            }).sort((a, b) => {
                return a - b;
            })
        }
    }
    return output
}

export default classifier;