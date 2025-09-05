import React from "react";

function Footer() {
    return (
        <footer style={{
            backgroundColor: '#333',
            color: 'white',
            textAlign: 'center',
            padding: '15px',
            position: 'relative',
            bottom: '0',
            width: '100%',
            marginTop: '30px',
        }}>
            <p>&copy; 2023 My React App. All rights reserved.</p>
        </footer>
        
    );
}

export default Footer;