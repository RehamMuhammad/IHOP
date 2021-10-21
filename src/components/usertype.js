import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@material-ui/core";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Chip from '@mui/material/Chip';
//import DeleteIcon from '@mui/icons-material/Delete';
import DeleteIcon from "@material-ui/icons/Delete";


export function UserType() {
  const [UserType, setuserType] = useState("");
  let amount, typeNumber;
  switch (UserType) {
    case "Health Practitioner for Ministry of Health":
      amount = 150;
      typeNumber = 2;
      break;
    case "Health Practitioner":
      amount = 200;
      typeNumber = 3;
      break;
    case "Student":
      amount = 100;
      typeNumber = 1;
      break;
    default:
      amount = 0;
      typeNumber = 4;
  }

  const handleChange = (event) => {
    setuserType(event.target.value);
  };

  const deleteUser = async (id) => {
       
  }

  const [userTypes, setUserType] = useState([]);
  const userTypeCollectionRef = collection(db, "userType");

  const createUser = async () => {
    await addDoc(userTypeCollectionRef, {
      name: UserType,
      price: {
        amount,
        currncy: "SAR",
      },
      typeNumber,
    });
  };

  useEffect(() => {
    const getUserType = async () => {
      let userTypeData = await getDocs(userTypeCollectionRef);
      console.log(
        userTypeData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setUserType(
        userTypeData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      console.log(userTypes);
    };

    getUserType();
  }, []);

  return (
    <Container>
      <TableContainer component={Paper} style={{ marginTop: "200px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Currncy</TableCell>
              <TableCell align="center">Type Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userTypes.map((userType) => (
              <TableRow key={userType.id}>
                <TableCell align="center">{userType.name}</TableCell>
                <TableCell align="center">{userType.price.amount}</TableCell>
                <TableCell align="center">{userType.price.currncy}</TableCell>
                <TableCell align="center">{userType.typeNumber}</TableCell>
                <Chip
        label="Custom delete icon"
        onDelete={console.log(userType.id)}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Container style={{  marginBottom: "20px", width:"500px", marginLeft: "30px" , marginTop: "20px"}}> */}

      <FormControl>
        <Stack direction="row" spacing={2} style={{ marginTop: "20px" }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={UserType}
            label="User type"
            onChange={handleChange}
            style={{ width: "150px" }}
          >
            <MenuItem value={"Health Practitioner for Ministry of Health"}>
              Health Practitioner for Ministry of Health
            </MenuItem>
            <MenuItem value={"Health Practitioner"}>Health Practitioner</MenuItem>
            <MenuItem value={"Student"}>Student</MenuItem>
          </Select>

          {/* <TextField label="Amount" color="secondary" focused style={{  width: "100px"}} />
    <TextField label="Currency" color="secondary" focused style={{  width: "100px"}} />
    <TextField label="Type Number" color="secondary" focused style={{  width: "100px"}} /> */}
        </Stack>
      </FormControl>

      <Stack
        direction="row"
        spacing={2}
        style={{ marginLeft: "300px", marginTop: "70px" }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: "purple" }}
          onClick={createUser}
        >
          Add User Type
        </Button>
        <Button variant="contained" style={{ backgroundColor: "purple" }}>
          Delete User Type
        </Button>
        <Button variant="contained" style={{ backgroundColor: "purple" }}>
          Update User Type
        </Button>
      </Stack>
    </Container>
  );
}
