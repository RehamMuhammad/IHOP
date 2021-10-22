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

export function Registartion() {
  const [regs, setRegs] = useState([]);
//   const [userType, setUserType] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [span, setSpan] = useState("");

//   const handleUserType = (event) => {
//     setUserType(event.target.value);
//   };

  // const deleteReg = async (id) => {
  //   const regDoc = doc(db, "registrations", id);
  //   await deleteDoc(regDoc);
  //   getRegs();
  // };

  // const updateReg = async (id) => {
  //   const regDoc = doc(db, "registrations", id);
  //    let newFields = { name,
  //      email,
  //      phoneNumber: phone,
  //      userType,
  //      span, };
  //    await updateDoc(regDoc);
  //    getRegs();
  // };

//   const handleUserName = (event) => {
//     setName(event.target.value);
//   };

//   const handleUserEmail = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleUserPhone = (event) => {
//     setPhone(event.target.value);
//   };

//   const handleSpan = (event) => {
//     setSpan(event.target.value);
//   };
  
//   const clear = () => {
//     setName("");
//     setEmail("");
//     setPhone("");
//     setPhone("");
//   }
  const regCollectionRef = collection(db, "registrations");

//   const createReg = async () => {
//     await addDoc(regCollectionRef, {
//       name,
//       email,
//       phoneNumber: phone,
//       userType,
//       span,
//     });
//     getRegs();
//   };

  const getRegs = async () => {
    let regData = await getDocs(regCollectionRef);
    console.log(regData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // setRegs(regData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getRegs();
  }, []);

  return (
    <Container>
      <TableContainer component={Paper} style={{ marginTop: "200px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">amount</TableCell>
              <TableCell align="center">Payment Date</TableCell>
              <TableCell align="center">Payment Status</TableCell>
              <TableCell align="center">Registration Type</TableCell>
              <TableCell align="center">Registration Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {regs.map((reg) => {
              return(
              <TableRow key={reg.id}>
                <TableCell align="center">{reg.amount}</TableCell>
                <TableCell align="center">{reg.paymentDate}</TableCell>
                <TableCell align="center">{reg.paymentStatus}</TableCell>
                <TableCell align="center">{reg.registerType}</TableCell>
                <TableCell align="center">{reg.registrationDate}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "purple" }}
                  //  onClick={() => deleteReg(reg.id)}
                  >
                    Delete Registeration
                  </Button>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "purple" }}
                    // onClick={() => {
                    //   updateReg(reg.id);
                    // }}
                  >
                    Update Registeration
                  </Button>
                </TableCell>
              </TableRow>
              )  })}
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
            value={5}
            label="Choose User type"
            color="secondary"
            //onChange={handleUserType}
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

          <TextField
            label="User Name"
            color="secondary"
            focused
            style={{ width: "300px", marginBottom: "20px", marginTop: "20px" }}
            //onChange={handleUserName}
          />
          <br />
          <TextField
            label="User Email"
            color="secondary"
            focused
            style={{ width: "300px", marginBottom: "20px" }}
            //onChange={handleUserEmail}
          />
          <TextField
            label="Phone Number"
            color="secondary"
            focused
            style={{ width: "300px", marginBottom: "20px" }}
            //onChange={handleUserPhone}
          />
          <TextField
            label="span"
            color="secondary"
            focused
            style={{ width: "300px", marginBottom: "20px" }}
            //onChange={handleSpan}
          />
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
          //onClick={createReg}
        >
          Add User
        </Button>
        <Button variant="contained" style={{ backgroundColor: "purple" }}>
          Update User
        </Button>
      </Stack>
    </Container>
  );
}
