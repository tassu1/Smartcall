import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {

    let navigate = useNavigate();

    const [meetingCode, setMeetingCode] = useState("");
    const { addToUserHistory } = useContext(AuthContext);

  
    const handleJoinVideoCall = async () => {
    
        if (!meetingCode.trim()) {
            alert("Please enter a meeting code");
            return;
        }

        try {
 
            await addToUserHistory(meetingCode);

            
            navigate(`/${meetingCode}`);
        } catch (error) {
            console.error("Failed to add to history or navigate:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <>
    
            <div className="navBar">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h2>Smart Video Call</h2>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  
                    <IconButton onClick={() => navigate("/history")}>
                        <RestoreIcon />
                    </IconButton>
                    <p>History</p>

                    <Button
                        onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/auth");
                        }}
                    >
                        Logout
                    </Button>
                </div>
            </div>

          
            <div className="meetContainer">
              
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call Just Like U</h2>

                       
                        <div style={{ display: 'flex', gap: "10px" }}>
                            <TextField
                                value={meetingCode}
                                onChange={(e) => setMeetingCode(e.target.value)}
                                id="outlined-basic"
                                label="Meeting Code"
                                variant="outlined"
                            />
                            <Button onClick={handleJoinVideoCall} variant="contained">
                                Join
                            </Button>
                        </div>
                    </div>
                </div>

             
                <div className="rightPanel">
                    <img src="/logo3.png" alt="Smart Video Call Logo" />
                </div>
            </div>
        </>
    );
}


export default withAuth(HomeComponent);