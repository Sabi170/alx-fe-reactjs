import React from "react";

function UserProfile(props) {
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '20px',
            margin: '20px auto',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            maxWidth: '400px',
            backgroundColor: '#f9f9f9'
        }}>
            <h2 style={{ color: 'blue', fontSize: '2em', marginBottom: '10px' }}>{props.name}</h2>
            <p style={{ fontSize: '1.1em', color: '#555'}}>Age: <span style={{ fontWeight: 'bold', color: '#007bff' }}>
                {props.age}</span></p>
                <p style={{ fontSize: '1.1em', color: '#555' }}>Bio: <span style={{ fontStyle: 'italic' }}>{props.bio}</span>
                </p>
        </div>
    );
}

export default UserProfile;