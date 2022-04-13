import "../style.css";
import "../style2.css";
import "../style3.css";

export default function Profile() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Profile</h2>
        <label for ="FirstName">First Name</label> <br></br>
        <input type="text" id="FirstName" name="fname" placeholder="First Name"></input><br></br><br></br>
        <label for ="MiddleName">Middle Name (Optional)</label> <br></br>
        <input type="text" id="MiddleName" name="mname" placeholder="Middle Name"></input><br></br><br></br>
        <label for ="LastName">Last Name</label> <br></br>
        <input type="text" id="LastName" name="lname" placeholder="Last Name"></input><br></br><br></br>
        <label for ="email">Email </label> <br></br>
        <input type="text" id="email" name="email" placeholder="Email"></input><br></br><br></br>
        <label for ="nickname">Nickname </label> <br></br>
        <input type="text" id="nickname" name="nickname" placeholder="Nickname"></input><br></br><br></br>
        <label for ="address">Personal Address </label> <br></br>
        <input type="text" id="address" name="personalAddress" placeholder="Personal Address"></input><br></br><br></br>
        <label for ="company">Company Name </label> <br></br>
        <input type="text" id="company" name="companyName" placeholder="Company Name"></input><br></br><br></br>
        <label for ="job">Job Title </label> <br></br>
        <input type="text" id="job" name="jobTitle" placeholder="Job Title"></input><br></br><br></br>
        <label for ="compaddy">Company Address </label> <br></br>
        <input type="text" id="compaddy" name="companyAddress" placeholder="Company Address"></input><br></br><br></br>
        <label for ="phoneNumber">PhoneNumber </label> <br></br>
        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number"></input><br></br><br></br>
      </main>
    );
  }

  