//  Getting Element Begins
const buttonEl = document.querySelector('button.submit');
const firstNameEl = document.getElementById('FirstName');
const lastNameEl = document.getElementById('lastName')
const identity = document.getElementById('uniqueId');
const message = document.querySelector('.message');
const selectOptionEl = document.getElementById('selectSubject');
const PhysicsEl = document.getElementById('Physics');
const ChemistryEl = document.getElementById('Chemistry');
const BiologyEl = document.getElementById('Biology');
const MathematicsEl = document.getElementById('Mathematics')
const EnglishEl = document.getElementById('English');
//  Getting Element Ends;

//  Setting Date for These Subjects Begins
// const date = new Date();
// const actualDate = new Date('2025-06-05T16:17');
// if (date.getDate() === actualDate.getDate()){
//   ChemistryEl.disabled = false;
//   PhysicsEl.disabled = true;
// }
// else if (date.getDate() === actualDate.getDate() + 2){
//   ChemistryEl.disabled = true;
//   PhysicsEl.disabled = true;
//   BiologyEl.disabled = false;
// }
// The date of the examination


//  Setting Date for these Subject Ends


// Tergetting the input value begins
   let firstNameElValue = firstNameEl.value;
   let lastNameValue = lastNameEl.value;
   let identityValue = identity.value;
//Tergetting the input value Ends


 buttonEl.addEventListener('click', ()=>{    //Adding the addEvent listener to the clicked button
  let result2 =  localStorage.getItem('studentsData');  // Retrieve data from the storage
   objectParsed =  JSON.parse(result2);
//    Terget The input data
      let firstNameElValue = firstNameEl.value;
       let lastNameValue = lastNameEl.value;
      let identityValue = identity.value;
    //   Terget the input data

    // Initialization of the Array Begins
      const checkFirstName = [];
      const checkLastName = [];
      const checkId = [];
     
      
    //    // Initialization of the Array Ends


      
    //   Function to change User input to capitilization in other to meet the student details
      function capitalLetter(validateInput){
      let result3 =    validateInput.trim().charAt(0).toUpperCase() + validateInput.trim().slice(1).toLowerCase();
          return result3;
      }
      validateFirstValue = capitalLetter(firstNameElValue);
      validateSecondValue = capitalLetter(lastNameValue);
      validateThirdValue = identityValue.toUpperCase()  //Calling the function
 //   Function to change User input to capitilization in other to meet the student details Ends
 const userInputValue = [validateFirstValue, validateSecondValue, validateThirdValue];
//  Returning the index position of the userInput Begins that is for function
    function toCheckArrayIndex(inputValue,arr){
        let message = 0;
          if(arr.includes(inputValue)){
           message += arr.indexOf(inputValue);
          }
          else{
            message = -1;
          }
          return message;
    }
// Returning the index position of the user input Ends that is for function

//Updating the empty Array from the stored value Begins
   for(let i = 0; i <= objectParsed.length -1; i++){
    const firstName = (objectParsed[i][1].firstName);
    const lastName = (objectParsed[i][1].lastName);
    const identity = (objectParsed[i][1].id);
    checkFirstName.push(firstName);
    checkLastName.push(lastName);
    checkId.push(identity);
    }
   const firstNameIndex =  toCheckArrayIndex(validateFirstValue, checkFirstName);
    const checkSecondIndex = toCheckArrayIndex(validateSecondValue,checkLastName);
    const checkthrdindex = toCheckArrayIndex(validateThirdValue,checkId);
   //  Updating the empty Array from the stored Value Ends

// Checking whether to accept user unput or not
    if(!checkFirstName.includes(validateFirstValue) && !checkLastName.includes(validateSecondValue) && !checkId.includes(validateThirdValue)){
      message.textContent = 'Invalid Credentials Please retype!!!';  
      message.classList.remove('message2', 'message3');
  message.classList.add('message1');
    }
    else if (
    firstNameIndex !== checkSecondIndex ||
    checkSecondIndex !== checkthrdindex
){
            message.textContent = 'Your Crediential details does not match';  
      message.classList.remove('message1', 'message3');
  message.classList.add('message2'); 
    }
    else {
       message.textContent = 'Your Credential details is correct. You have successfully logged in';
       message.classList.remove('message2', 'message1');
  message.classList.add('message3');
  buttonEl.textContent = 'Please wait...';
  localStorage.setItem('studentInformation', JSON.stringify(userInputValue));
 
  setTimeout(()=>{
    switch(true){
  case !PhysicsEl.disabled:
   location.href = 'Physics pastquestion.html';
    break;
    case !ChemistryEl.disabled:
      location.href = 'Chemistry.html';
      break;
      case !BiologyEl.disabled:
        location.href = 'Biology.html';
        break;
        case !EnglishEl.disabled:
          location.href = 'English.html';
          break;
          case !MathematicsEl.disabled:
            location.href = 'Mathematics.html';
            break;
            default:
              alert('You have no Examination to do today')
}
  }, 5000)
       firstNameEl.value = ''
       lastNameEl.value = ''
       identity.value = '' 
    }
    // Checking whether the user accept input Ends
 })
