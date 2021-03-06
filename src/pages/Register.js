import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from "../assets/register.png";
import {useState} from "react";
import { createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";
// import { auth} from "../helper/firebase";
import { useNavigate } from "react-router-dom";
import { successNote } from '../helper/toastNotify';
import SearchBar from '../components/SearchBar';


const theme = createTheme();

export default function SignUp() {

const navigate = useNavigate();
const [firstName, setFirstName]=useState();
const [lastName, setLastName]=useState();
const [email, setEmail]=useState();
const [password, setPassword]= useState();

const handleSubmit = async ()=>{
  const displayName = firstName+" "+lastName;
//   try{
//     await createUserWithEmailAndPassword(auth,email, password);
//     await updateProfile(auth.user, {displayName:displayName});
//     navigate("/");
//     successNote("Register Successfully performed!")
//   }catch(err){
//     alert(err.message);
//   }
// };

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    updateProfile(auth.user, {displayName:displayName});
    navigate("/");
    successNote("Register Successfully performed!")
    // const user = userCredential.user;
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });}
 

  return (
    <>
    <SearchBar/>
      <div style={{backgroundImage:`url(${img})`,
    backgroundRepeat:" no-repeat",
    backgroundSize: "100% 120%",
     height:"75vh"}}>
    <ThemeProvider theme={theme} >
      <Container style={{marginTop:0, paddingTop:40}} component="main" maxWidth="xs" >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,bgcolor:"secondary.main"}}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
    </>
  );
}