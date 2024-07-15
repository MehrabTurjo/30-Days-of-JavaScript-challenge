//Task 1
function checkNumber(num) {
    if (num > 0) {
      console.log(`${num} is positive`);
    } else if (num < 0) {
      console.log(`${num} is negative`);
    } else {
      console.log(`${num} is zero`);
    }
  }
  
  
  checkNumber(10);
  checkNumber(-5);
  checkNumber(0);

//Task 2
function checkVotingEligibility(age) {
    if (age >= 18) {
      console.log('Eligible to vote');
    } else {
      console.log('Not eligible to vote');
    }
  }
  
  
  checkVotingEligibility(20);
  checkVotingEligibility(16);

//Task 3
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
      console.log(`${a} is the largest`);
    } else if (b >= a && b >= c) {
      console.log(`${b} is the largest`);
    } else {
      console.log(`${c} is the largest`);
    }
  }
  
  
  findLargest(3, 7, 5);

//Task 4

function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
      case 1:
        dayName = 'Sunday';
        break;
      case 2:
        dayName = 'Monday';
        break;
      case 3:
        dayName = 'Tuesday';
        break;
      case 4:
        dayName = 'Wednesday';
        break;
      case 5:
        dayName = 'Thursday';
        break;
      case 6:
        dayName = 'Friday';
        break;
      case 7:
        dayName = 'Saturday';
        break;
      default:
        dayName = 'Invalid day';
    }
    console.log(dayName);
  }
  
  
  getDayName(3);
  getDayName(8);

//Task 5
function getGrade(score) {
    let grade;
    switch (true) {
      case (score >= 90):
        grade = 'A';
        break;
      case (score >= 80):
        grade = 'B';
        break;
      case (score >= 70):
        grade = 'C';
        break;
      case (score >= 60):
        grade = 'D';
        break;
      case (score >= 50):
        grade = 'E';
        break;
      default:
        grade = 'F';
    }
    console.log(`Score: ${score}, Grade: ${grade}`);
  }
  
  e
  getGrade(85);
  getGrade(45);

//Task 6
function checkEvenOdd(num) {
    const result = (num % 2 === 0) ? 'Even' : 'Odd';
    console.log(result);
  }
  
  
  checkEvenOdd(10);
  checkEvenOdd(7);

//Task 7
function isLeapYear(year) {
    const result = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 'Leap year' : 'Not a leap year';
    console.log(result);
  }
  

  isLeapYear(2020);
  isLeapYear(1900);
  isLeapYear(2000);
  