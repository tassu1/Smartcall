import React from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';
import '../styles/about.css'; // Ensure this CSS file is updated
import Navbar from '../components/navbar';

const About = () => {
    return (
        <>
            <Navbar />
            <Box className="about-page">
                <Container>
                    {/* Page Header */}
                    <Typography variant="h4" align="center" gutterBottom className="page-title">
                        About Smart Call
                    </Typography>

                    {/* Application Description */}
                    <Typography variant="body1" align="center" paragraph className="description">
                        Smart Call is a modern video conferencing app designed to make communication simple, fast, and
                        reliable. Whether for work, education, or personal connections, Smart Call ensures a seamless
                        experience for everyone.
                    </Typography>

                    {/* Features Section */}
                    <Typography variant="h5" align="center" gutterBottom className="section-title">
                        Features
                    </Typography>
                    <Box className="features-container">
                        <Box className="feature-card">
                            <Typography variant="subtitle1" align="center" gutterBottom>
                                High-Quality Video
                            </Typography>
                            <Typography variant="body2" align="center">
                                Crystal-clear video calls with minimal lag.
                            </Typography>
                        </Box>
                        <Box className="feature-card">
                            <Typography variant="subtitle1" align="center" gutterBottom>
                                Screen Sharing
                            </Typography>
                            <Typography variant="body2" align="center">
                                Share your screen for presentations or collaboration.
                            </Typography>
                        </Box>
                        <Box className="feature-card">
                            <Typography variant="subtitle1" align="center" gutterBottom>
                                Secure & Private
                            </Typography>
                            <Typography variant="body2" align="center">
                                End-to-end encryption keeps your data safe.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Developer Section */}
                    <Typography variant="h5" align="center" gutterBottom className="section-title">
                        About Me
                    </Typography>
                    <Box className="developer-card">
                        <Avatar
                            alt="Md Tahseen"
                            src="/images/tahseen.jpg" // Replace with your photo
                            className="developer-avatar"
                        />
                        <Typography variant="subtitle1" align="center" gutterBottom>
                            Md Tahseen
                        </Typography>
                        <Typography variant="body2" align="center" paragraph>
                            Hi, I'm Md Tahseen, the creator of Smart Call. I built this app to provide a simple and
                            effective solution for video conferencing. With a passion for technology and problem-solving,
                            I aim to create tools that make communication easier and more accessible for everyone.
                        </Typography>
                        <Typography variant="body2" align="center">
                            Connect with me:
                            <br />
                            <a href="" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>{' '}
                            |{' '}
                            <a href="" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default About;