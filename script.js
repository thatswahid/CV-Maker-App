let object={};


function onFinalSubmission(){
const name= document.getElementById("name").value;
const profession= document.getElementById("profession").value;
const email= document.getElementById("email").value;
const number= document.getElementById("number").value;
const website= document.getElementById("website").value;
const objective= document.getElementById("objective").value;
const declaration= document.getElementById("declaration").value;
const skills= document.getElementById("skills").value;
const experience= document.getElementById("experience").value;
const projects= document.getElementById("projects").value;
const university= document.getElementById("university").value;
const course= document.getElementById("course").value;
const year= document.getElementById("year").value;
const hobbies= document.getElementById("hobbies").value;
if(validateTextFields(name , profession, email, number, website, skills, projects,experience,hobbies,declaration)===true){


   object={
    uName: name,
    uProfession: profession,
    uEmail: email,
    uNumber: number,
    uWebsite: website,
    uObjective: objective,
    uSkills: skills,
    uProjects: projects,
    uUniversity: university,
    uCourse: course,
    uYear: year,
    uExperience: experience,
    uHobbies: hobbies,
    uDeclaration:declaration
}
FetchTheValuesOnUI();
}
}



function validateTextFields(name , profession, email, number, website, skills, projects,experience,hobbies,declaration ){
    if(name.trim()==""){
    alert("plz enter your name");
    return false;
    }

    else if(profession.trim()==""){
        alert("plz enter your profession");
        return false;
    }


    else if(email.trim()==""){
        alert("plz enter your Email");
        return false;
    }

    
    else if(number.trim()==""){
        alert("plz enter your Number");
        return false;
    }

    else if(website.trim()==""){
        alert("plz enter your Website");
        return false;
    }

    else if(skills.trim()==""){
        alert("plz enter your Skills");
        return false;
    }

    else if(projects.trim()==""){
        alert("plz enter your Projects");
        return false;
    }

    else if(experience.trim()==""){
        alert("plz enter your Experience");
        return false;
    }

    else if(hobbies.trim()==""){
        alert("plz enter your Hobbies");
        return false;
    } 
        else if(declaration.trim()==""){
            alert("plz enter your Declaration");
            return false;
    }
    return true;
}

function FetchTheValuesOnUI(){
    document.getElementById("main-page").innerHTML = `
    <h1 class="he">`+ object.uName +`</h1>
    <h5>`+ object.uProfession +` </h5> <br>

    <div class="row mt-3">
    <div class="col-md-4">
    <a href="`+ object.uWebsite +`"><i class="mr-3 fa fa-globe"></i>`+ object.uWebsite  +` </a>
    </div>

    <div class="col-md-4">
    <a><i class="mr-3 fa fa-envelope"></i>`+ object.uEmail +`</a>
    </div>

    <div class="col-md-4">
   <a><i class="mr-3 fa fa-phone"></i>`+ object.uNumber  +` </a>
    </div> 
</div>

<hr>
    <div class="obj">
    <h1>OBJECTIVE</h1>
    <p>`+ object.uObjective+`</p> 
    </div><br>

    <hr>
    <div class="skillss">
    <h1>SKILLS</h1>
    `+ splitTheValues(object.uSkills,  '<i class="fa fa-code"></i>')+`
    </div><br>

    <hr>
    <div class="exp">
    <h1>EXPERIENCE</h1>
    `+ object.uExperience +`
    </div><br>

    
    <hr>
    <div class="pro">
    <h1>PROJECTS</h1>
    `+ splitTheValues(object.uProjects, '<i class="fa fa-code"></i>')+`
    </div><br>

    <hr>
    <div>
    <h1>EDUCATION</h1>
    <h4>`+ object.uUniversity+`</h4>
    </div>

    <div>
    <h5>`+ object.uCourse+`</h5>
    </div>

    <div>
    <h6>`+ object.uYear+`</h6>
    </div>


    <hr>
    <div class="hob">
    <h1>HOBBIES</h1>
   <p> `+splitTheValues (object.uHobbies, '')+`</p>
    </div>

<hr>
    <div class="dec">
    <h1>DECLARATION</h1>
    <p>`+ object.uDeclaration+`</p> 
    </div><br>
    `;
}





function splitTheValues(val, icon) {
    let split = val.split(',');
    let elements = "<ul style='padding: 0px;'>";
    split.forEach((el) => {
        elements += "<li> "+icon+ el +" </li>";
    });
    elements += "<ul>"
    return elements;
}



 