import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
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
import Chip from "@mui/material/Chip";
//import DeleteIcon from '@mui/icons-material/Delete';
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "react-bootstrap/Modal";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { useHistory, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'


export function Users() {
  const [users, setUsers] = useState([]);
  const [userType, setUserType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [span, setSpan] = useState("");
  const history = createHistory();
  const userCollectionRef = collection(db, "users");
  

  const handleUserType = (event) => {
    setUserType(event.target.value);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    getUsers();
  };
  const edit = (id)=>{
    sessionStorage.setItem('id', id);
    getUsers();
    

  }
  const updateUser = async (id) => {
  
       const userDoc = doc(db, "users", id);
    console.log(users)
    let newFields = { name,
      email,
      phoneNumber: phone,
      userType,
      span, };
     await updateDoc(userDoc, newFields);
     sessionStorage.setItem('id',"")
     getUsers();
  };

  const handleUserName = (event) => {
    setName(event.target.value);
  };

  const handleUserEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUserPhone = (event) => {
    setPhone(event.target.value);
  };

  const handleSpan = (event) => {
    setSpan(event.target.value);
  };
  
  const clear = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPhone("");
  }

  const createUser = async () => {
    await addDoc(userCollectionRef, {
      name,
      email,
      phoneNumber: phone,
      userType,
      span,
    });
    getUsers();
  };

  const getUsers = async () => {
    let userData = await getDocs(userCollectionRef);
    console.log(userData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setUsers(userData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      
      <TableContainer component={Paper} style={{ marginTop: "200px" }} >
      <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" id="table-to-xls">
          <TableHead>
            <TableRow>
              <TableCell align="center">User Name</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">User Email</TableCell>
              <TableCell align="center">User Span</TableCell>
              <TableCell align="center">User Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.phoneNumber}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.span}</TableCell>
                <TableCell align="center">{user.userType}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "purple" }}
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete User
                  </Button>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "purple" }}
                    onClick={() => {
                      edit(user.id);
                    }}
                  >
                    Edit User
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Container
        style={{
          marginBottom: "20px",
          width: "500px",
          marginLeft: "350px",
          marginTop: "100px",
        }}
      >
    
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userType}
            label="Choose User type"
            color="secondary"
            onChange={handleUserType}
            style={{
              width: "150px",
              marginBottom: "20px",
              marginLeft: "350px",
            }}
            placeholder="Choose User Type"
            style={{ width: "300px", color: "purple" }}
          >
            <MenuItem value={"Health Practitioner for Ministry of Health"}>
              Health Practitioner for Ministry of Health
            </MenuItem>
            <MenuItem value={"Health Practitioner"}>
              Health Practitioner
            </MenuItem>
            <MenuItem value={"Student"}>Student</MenuItem>
          </Select>
          {users.map((user) => { 
          console.log(user)
          let userId = sessionStorage.getItem('id')
          console.log(userId)

          if (userId === user.id){
            console.log(user.name)
            
          
            return (
              <div>
          <TextField
            label="User Name"
            color="secondary"
            focused
            style={{ width: "300px", marginBottom: "20px", marginTop: "20px" }}
            onChange={handleUserName}
            placeholder={user.name}

            

          />
          <br />
          <TextField
            label="User Email"
            color="secondary"
            focused
            style={{ width: "300px", marginBottom: "20px" }}
            onChange={handleUserEmail}
            placeholder={user.email}
            
            
            

          />
          <TextField
            label="Phone Number"
            color="secondary"
            focused
            style={{ width: "300px", marginBottom: "20px" }}
            onChange={handleUserPhone}
            placeholder={user.phoneNumber}
            

          />
          <TextField
            label="span"
            color="secondary"
            focused
            style={{ width: "300px", marginBottom: "20px" }}
            onChange={handleSpan}
            placeholder={user.span}

          />
          </div>
            )
          }
        })
        }
        </FormControl>
      </Container>
    
      <Stack
        direction="row"
        spacing={2}
        style={{ marginLeft: "470px", marginTop: "70px" }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: "purple" }}
          onClick={createUser}
        >
          Add User
        </Button>
        <Button variant="contained" style={{ backgroundColor: "purple" }}  onClick={() => {
           let userId = sessionStorage.getItem('id')
                      updateUser(userId);
                    }}>
          Update User
        </Button>
      </Stack>
    </Container>
  );
}
