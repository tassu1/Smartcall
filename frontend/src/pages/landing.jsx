import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Smart Video Call</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => router('/meeting')}>Join as Guest</p>
                    <p
                        onClick={() =>
                            router('/auth', { state: { formState: 1 } }) 
                        }
                    >
                        Register
                    </p>
                    <div
                        onClick={() =>
                            router('/auth', { state: { formState: 0 } }) 
                        }
                        role='button'
                    >
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h2>
                        <span style={{ color: '#FF9839' }}>Connect</span> with your loved Ones
                    </h2>
                    <p>Cover a distance by Smart Video Call</p>
                    <div role='button'>
                        <Link to="/auth">Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>
        </div>
    );
}