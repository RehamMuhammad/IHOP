import React from "react";
import {
  Container,
  Box,
  Toolbar,
  Typography,
  List,
  ListItem,
  Drawer,
  AppBar,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import {UserType} from './usertype';
import {Users} from './users'
import { Events } from "./events";
import {Registartion} from './registrations';

//Sidebar Code

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRigh: theme.spacing(2),
  },
  title: {
    marginRight: "auto",
  },
  drawer: {
    width: 300,
    color: "#4c158d"
  },
  iconAlign: {
    marginRight: 5,

  },
  content: {
    padding: theme.spacing(9),
  },
}));

export function SideBar() {
  const classes = useStyles();
  const [opens, setOpens] = useState(false);
  const [showUserType, setShowUserType] = useState(false)
  const [showUsers, setShowUsers] = useState(false)
  const [showEvents, setShowEvents] = useState(false)
  const [showReg, setShowReg] = useState(false)




  return (
    <Container className={classes.root} >
      <Drawer open={opens} onClose={() => setOpens(false)}>
        <Box
          display="flex"
          p={4}
          justifyContent="space-between"
          fontWeight={550}
          color="#000"
          bgcolor="#ebebeb"
          borderBottom="2px solid gray"
        >
          <Typography>
            <Box mt={2} fontWeight="fontWeightBold">
              User Name
            </Box>
            <Box ml={1} fontSize={15}>
              Ahmad
            </Box>

          </Typography>
        </Box>
        <Box pl={1} typr="paragrapgh" bgcolor="#ebebeb" color="#000">
          <Typography style={{ padding: "20px" }}>
            <Box mt={2} fontWeight="fontWeightBold">
              User Email
            </Box>
            <Box mt={1} fontSize={15}>
              Ahmad@gmail.com
            </Box>
          </Typography>
        </Box>

        <List className={classes.drawer}>
          <ListItem  button bgcolor="#ebebeb" color="#4c158d" onClick={() => {setShowUsers(true); setShowUserType(false); setShowEvents(false); setShowReg(false)}}>
         <Typography fontSize={10} >
            <PersonIcon  className={classes.iconAlign} />
                Users
              </Typography>
          </ListItem>

          <ListItem button  onClick={() => {setShowUserType(false); setShowEvents(true); setShowUsers(false); setShowReg(false)}} bgcolor="#ebebeb" color="#4c158d">
         <Typography fontSize={10} >
            <HomeIcon  className={classes.iconAlign} />
                Events
              </Typography>
          </ListItem>

          <ListItem onClick={() => {setShowUserType(true); setShowUsers(false); setShowEvents(false); setShowReg(false)}}  button bgcolor="#ebebeb" color="#4c158d">
         <Typography fontSize={10} >
            <PersonIcon className={classes.iconAlign} />
                User Type
              </Typography>
          </ListItem>

          <ListItem button onClick={() => {setShowUserType(false); setShowEvents(false); setShowUsers(false); setShowReg(true)}} bgcolor="#ebebeb" color="#4c158d">
         <Typography fontSize={10}  >
            <HomeIcon className={classes.iconAlign}  />
                Registeration
              </Typography>
          </ListItem>

        </List>
      </Drawer>
      <AppBar style={{ background: "#311256" }}>
        <Toolbar>
          <Typography variant="h4" type="title" color="inherit"  style={{ flex: 1 , marginRight: "900px"}} fontWeight="fontWeightBold">
            IHOP2021
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => setOpens(true)}
          >
            <Typography color="inherit"  style={{ flex: 1 , marginRight: "100px"}} fontWeight="fontWeightBold">
            Sign Out
          </Typography>
          <DehazeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {showUserType? <UserType />: null}
      {showUsers? <Users />: null}
      {showEvents? <Events/> : null}
      {showReg? <Registartion/> : null}

    </Container>
  );
}
