import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import UserTable from "../../component/UserTable";

interface IProps {}




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    // color:"black",
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    // '&:focus': {
    //   borderRadius: 4,
    //   borderColor: '#80bdff',
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    // },
},
}));

const Home = (props: IProps) => {
  const classes = useStyles();

  const handleChange=()=>{

  }
  return (
    <>
    <Container maxWidth="lg" className="home__container">
      <CssBaseline />
      <div className={`${classes.paper} home__form`} >
        <Avatar className={`button ${classes.avatar}`}></Avatar>
        <Typography component="h1" variant="h5">
          Add User
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            type="text"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone No."
            type="number"
            id="phone"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="date"
            type="date"
            id="dob"
          />
          {/* ------------------------------------------------------ */}
          <div className="home__address">
          <InputLabel id="demo-customized-select-label">Country:</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            defaultValue="Default"
            //   value={age}
              onChange={handleChange}
            className={classes.input}
          >
            <MenuItem value="Default">
              <em>Choose Here</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>


          <InputLabel id="demo-customized-select-label">Province:</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            defaultValue="Default"
            //   value={age}
              onChange={handleChange}
            className={classes.input}
          >
            <MenuItem value="Default">
              <em>Choose Here</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
          </Select>
          </div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="District"
            name="district"
            type="text"
            id="district"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="City"
            name="city"
            type="text"
            id="city"
          />

          {/* ------------------------------------------- */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={` button ${classes.submit}`}
          >
            Sign In
          </Button>
        </form>
      </div>
      <div className="home__table">
      <UserTable/> 
      </div>

      
    </Container>
 
</>
  );
};

export default Home;
