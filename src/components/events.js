import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  listCollections,
  query, where,
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

export function Events() {
  const [evts, setEvents] = useState([]);
//   const [userType, setUserType] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [span, setSpan] = useState("");

//   const handleUserType = (event) => {
//     setUserType(event.target.value);
//   };

  const deleteEvent = async (id) => {
    const evtDoc = doc(db, "events", id);
    await deleteDoc(evtDoc);
    getEvents();
  };

  const updateEvent = async (id) => {
    const evtDoc = doc(db, "events", id);
    // let newFields = { name,
    //   email,
    //   phoneNumber: phone,
    //   userType,
    //   span, };
     //await updateDoc(userDoc, newFields);
    getEvents();
  };

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
  const eventCollectionRef = collection(db, "events");
  //const q = query(eventCollectionRef, where("lectures", "==", "UBZIkTVrWyGijWjuoX2k"));

//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });

//   const createUser = async () => {
//     await addDoc(userCollectionRef, {
//       name,
//       email,
//       phoneNumber: phone,
//       userType,
//       span,
//     });
//     getEvents();
//   };

  const getEvents = async () => {
    let eventData = await getDocs(eventCollectionRef);
    console.log(eventData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setEvents(eventData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
     
    <Container>
  <TableContainer component={Paper} style={{ marginTop: "200px" }}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Event Title</TableCell>
          <TableCell align="center">Date</TableCell>
          <TableCell align="center">description</TableCell>
          <TableCell align="center">Duration</TableCell>
          <TableCell align="center">location</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {evts.map((evt) => (
          <TableRow key={evt.id}>
            <TableCell align="center">{evt.title}</TableCell>
            {/* <TableCell align="center">{`${evt.categoryIds[1]},${evt.categoryIds[2]}` }</TableCell> */}
            <TableCell align="center">{evt.date}</TableCell>
            <TableCell align="center">{evt.description}</TableCell>
            <TableCell align="center">{evt.duration}</TableCell>
            <TableCell align="center">{evt.location}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ backgroundColor: "purple" }}
                onClick={() => deleteEvent(evt.id)}
              >
                Delete Event
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "purple" }}
                onClick={() => {
                  updateEvent(evt.id);
                }}
              >
                Update Event
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </Container>
  );
}
      {/* <Container
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

          <TextField
            label="User Name"
            color="secondary"
            focused
            style={{ width: "300px", marginBottom: "20px", marginTop: "20px" }}
            onChange={handleUserName}
          />
          <br />
          <TextField
            label="User Email"
            color="secondary"
            focused
            style={{ width: "300px", marginBottom: "20px" }}
            onChange={handleUserEmail}
          />
          <TextField
            label="Phone Number"
            color="secondary"
            focused
            style={{ width: "300px", marginBottom: "20px" }}
            onChange={handleUserPhone}
          />
          <TextField
            label="span"
            color="secondary"
            focused
            style={{ width: "300px", marginBottom: "20px" }}
            onChange={handleSpan}
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
          onClick={createUser}
        >
          Add User
        </Button>
        <Button variant="contained" style={{ backgroundColor: "purple" }}>
          Update User
        </Button>
      </Stack>
      </Container> */}
    

