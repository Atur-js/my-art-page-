import React , { Component }  from 'react';
import { Container } from 'react-bootstrap';
import "./SignUp.css";



const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};




class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
        
      <React.Fragment>  
      <Container className="bg" style={{zIndex:"200", width:"300px",height:"385px",position:"absolute",top:"50%",left:"50%",borderRadius:"20px"
     ,backdropFilter:"blur(50px)"}}>
  
      <div className="wrapper">
        <div className="form-wrapper">
          <h3 style={{padding:"20px",color:"white",}}>Log In</h3>

          <form className="form-group"  onSubmit={this.handleSubmit} noValidate>
            <div  className="form-group" className="firstName" style={{padding:"5px",color:"white",}}>
              
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
                style={{borderRadius:"5px",border:"none",padding:"3px"}}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage" style={{display:"inline-block",color:"red",float:"center"}} >{formErrors.firstName}</span>
              )}
            </div>
            <div   className="form-group" className="lastName"style={{padding:"5px",color:"white",}}>
              
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
                style={{borderRadius:"5px",border:"none",padding:"3px"}}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage"style={{display:"inline-block",color:"red",float:"center"}}>{formErrors.lastName}</span>
              )}
            </div>
            <div  className="form-group" className="email" style={{padding:"5px",color:"white",}}>
              
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
                style={{borderRadius:"5px",border:"none",padding:"3px"}}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage" style={{float:"center",color:"red",display:"inline-block"}}>{formErrors.email}</span>
              )}
            </div>
            <div  className="form-group" className="password" style={{padding:"5px",color:"white",}}>
              
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
                style={{borderRadius:"5px",border:"none",padding:"3px"}}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage" style={{float:"center",color:"red",display:"inline-block"}}>{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount" style={{float:"center",marginTop:"18px"}}>
              <button style={{borderRadius:"5px",border:"none",marginRight:"10px"}} type="submit">Log In</button>
              <small ><a href="./carousels" style={{color:"white"}}>Sign Up</a></small>
            </div>
          </form>
        </div>
      </div>
      </Container>
         </React.Fragment>
    );
  }
}

export default LogIn;
