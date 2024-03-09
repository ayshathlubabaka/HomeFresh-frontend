import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import { Box, IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const useStyles = styled({
    table: {
      minWidth: 650,
    },
    chatSection: {
      width: "100%",
      height: "80vh",
    },
    headBG: {
      backgroundColor: "#e0e0e0",
    },
    borderRight500: {
      borderRight: "1px solid #e0e0e0",
    },
    messageArea: {
      height: "70vh",
      overflowY: "auto",
    },
  });
  
  const leftChatBox = {
    backgroundColor: "#fcf1496e",
    padding: 2,
  };
  
  const rightChatBox = {
    backgroundColor: "#498dfc6e",
    padding: 2,
  };

function Chat() {

  const { userId, productId } = useParams();
  const navigate = useNavigate("");

  const [userChatHistory, setUserChatHistory] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);

  const [socket, setSocket] = useState(null);
  const classes = useStyles("div");
  const [productData, setProductData] = useState([]);

  const handleCloseChat = () => {
    // navigate to previous page
  };

  useEffect(() => {
    if (userId) {
      let access_token = localStorage.getItem("access_token");
      if (!access_token) {
        localStorage.setItem("redirect_url", window.location.href);
        navigate("/login/");
      }
      console.log("inside chat", access_token);

      const path = `ws://127.0.0.1:8000/ws/chat/${userId}/${productId}/?token=${access_token}`;
      const socket = new WebSocket(path);

      socket.onopen = () => {
        console.log("WebSocket open");
        setSocket(socket);
      };

      socket.onmessage = (e) => {
        const data = JSON.parse(e.data);

        setChatMessages((prevChatMessages) => [...prevChatMessages, data]);
      };

      socket.onerror = (e) => {
        console.error(e);
      };

      socket.onclose = () => {
        console.log("WebSocket closed let's reopen");
      };
    }

    return () => {
      socket?.close();
      setChatMessages([]);
    };
  }, [userId, productId]);

  const fetchProductData = async () => {
    try {
    const response = await AxiosfetchActiveProducts();
      const result = response.data;
      const selectedObject = result.find(
        (product) => product.id === parseInt(productId)
      );
      setProductData(selectedObject);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const getUserChatHistory = async (group_name = "", page = 1) => {
    try {
      const response = await AxiosChatHistory(group_name, page);

      if (response.status >= 200 && response.status < 300) {
        const responseData = response.data;

        if (responseData) {
          const reversedChatHistory = responseData.slice().reverse();
          console.log("Reversed Chat History:", reversedChatHistory);
          setUserChatHistory(reversedChatHistory);
          console.log("Updated userChatHistory:", userChatHistory);
        } else {
          console.error("Invalid chat history response:", responseData);
        }
      } else {
        console.error("Error fetching chat history:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching chat history:", error);

      if (error.response?.status === 401) {
        console.log(error);
        return;
      }
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    if (userId) {
      let group_name = `chat_${userId}-${productId}`;
      getUserChatHistory((group_name = group_name));
    }
  }, [productId]);

  const [message, setMessage] = useState("");
  const sendMessage = () => {
    if (socket && message.trim() !== "") {
      socket.send(
        JSON.stringify({
          message: message,
          current_user_id: userId,
          from_user: true,
        })
      );
      setMessage("");
    }
  };
  return (
    <div>
      {userId ? (
        <div
          className="container-fluid, border border-dark"
          style={{ maxWidth: "60%", margin: "100px", marginLeft: "300px" }}
        >
          <button className="btn btn-danger mt-2" onClick={handleCloseChat}>
            <FaTimes />
          </button>
          <ListItemText primary={productData.product_name}>
            {productData.product_name}
          </ListItemText>

          <Divider />
          <List
            className={classes.messageArea}
            sx={{ overflowY: "scroll", height: "50vh" }}
          >
            {userChatHistory.map((message, index) => (
              <ListItem key={index}>
                <Grid container>
                  <Grid item xs={12}>
                    <ListItemText
                      align={!message.from_user ? "right" : "left"}
                      primary={message.message}
                      sx={!message.from_user ? leftChatBox : rightChatBox}
                    ></ListItemText>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText
                      align={!message.from_user ? "right" : "left"}
                      secondary={message.timestamp}
                    ></ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
            ))}

            {chatMessages.map((message, index) => (
              <ListItem key={index}>
                <Grid container>
                  <Grid item xs={12}>
                    <ListItemText
                      align={!message.from_user ? "right" : "left"}
                      primary={message.message}
                      sx={!message.from_user ? leftChatBox : rightChatBox}
                    ></ListItemText>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText
                      align={!message.from_user ? "right" : "left"}
                      secondary={message.timestamp}
                    ></ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item xs={1} align="right">
              <IconButton
                color="primary"
                aria-label="add"
                onClick={sendMessage}
              >
                <SendIcon />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      ) : (
        <Box justifyContent={"center"}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR51aVXwnmZhzP_PZzW9IVQRMok5e5z4tUBQHfVPS0--Z_ADwV7NI2zB_f-QkPrpBKAJpE&usqp=CAU"
            alt=""
            style={{ maxWidth: "75%" }}
          />
        </Box>
      )}
    </div>
  )
}

export default Chat
