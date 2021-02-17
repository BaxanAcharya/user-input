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
import React, { FormEvent, useEffect, useState } from "react";
import UserTable from "../../component/UserTable";
import { IUser } from "../../interfaces/IUser";
import HttpClient from "../../services/api/Request";
import { v4 as uuidv4 } from "uuid";

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
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
}));

const Home = (props: IProps) => {
  const classes = useStyles();
  const httpClient = new HttpClient();
  const [countries, setCountries] = useState<string[]>();
  const [users, setUsers] = useState<IUser[]>([]);
  const [open,setOpen]=useState<boolean>(false);
  const [creaeUser, setCreateUser] = useState<IUser>({
    id: uuidv4(),
    name: "",
    email: "",
    phone: "",
    dob: "",
    city: "",
    district: "",
    province: 0,
    country: "",
  });

  const addUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(creaeUser.phone.length<7){
      return alert('At least 7 digit required for phone')
    }
    setUsers([...users, creaeUser]);
    setCreateUser({
      id: uuidv4(),
      name: "",
      email: "",
      phone: "",
      dob: "",
      city: "",
      district: "",
      province:  0,
      country: "Nepal",
    });
  };

  const deleteUser=(id: string)=>{
    var filtered= users.filter(user=>{
      return user.id!==id;
    });
    setUsers(filtered);
  }

  const editUser=(id: string)=>{
    var filtered= users.filter(user=>{
      return user.id===id;
    });

    setCreateUser(filtered[0]);
    setOpen(true);
  }

  const getAllCountries = async () => {
    try {
      const response = await httpClient.get({
        endpoint: "/countries",
      });
      const countries = response?.data?.map((items: any) => items.country);
      setCountries(countries);
    } catch (err) {
      // setError(err);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCreateUser({ ...creaeUser, [name]: value });
  };

  const handleEdit = ()=>{
    //update  creauserdata
  }
  return (
    <>
      <Container maxWidth="lg" className="home__container">
        <CssBaseline />
        <div className={`${classes.paper} home__form`}>
          <Avatar className={`button ${classes.avatar}`}></Avatar>
          <Typography component="h1" variant="h5">
            Add User
          </Typography>
          <form onSubmit={addUser} className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              value={creaeUser.name}
              onChange={handleChange}
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
              value={creaeUser.email}
              onChange={handleChange}
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
              value={creaeUser.phone}
              onChange={handleChange}
              name="phone"
              label="Phone No."
              type="number"
              id="phone"
              
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleChange}
              value={creaeUser.dob}
              fullWidth
              name="dob"
              type="date"
              id="dob"
            />
            {/* ------------------------------------------------------ */}
            <div className="home__address">
              <InputLabel id="demo-customized-select-label">
                Country:
              </InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                defaultValue="Nepal"
                value={creaeUser.country}
                onChange={(e) =>
                  setCreateUser({
                    ...creaeUser,
                    country: e.target.value as string,
                  })
                }
                className={classes.input}
              >
                <MenuItem value="Default">
                  <em>Nepal</em>
                </MenuItem>
                {countries?.map((country, index) => (
                  <MenuItem key={index} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </Select>

              <InputLabel id="demo-customized-select-label">
                Province:
              </InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                defaultValue="Default"
                //   value={age}
                value={creaeUser.province}
                onChange={(e) =>
                  setCreateUser({
                    ...creaeUser,
                    province: e.target.value as number,
                  })
                }
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
              value={creaeUser.district}
              onChange={handleChange}
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
              onChange={handleChange}
              value={creaeUser.city}
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
              disabled={!creaeUser.name||!creaeUser.email || !creaeUser.phone || !creaeUser.dob ||  !creaeUser.country || !creaeUser.province || !creaeUser.district || !creaeUser.city  }
            >
              Add
            </Button>
          </form>
        </div>
        <div className="home__table">
          <UserTable deleteUser={deleteUser} users={users}  editUser={editUser}/>
        </div>
      </Container>
{/* 
      {
        open? <EditForm createUser={creaeUser} setCreateUser={setCreateUser} handleEdit={handleEdit}/>:null
      } */}
    </>
  );
};

export default Home;
