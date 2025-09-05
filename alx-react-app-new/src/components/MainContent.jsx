import React from "react";

function MainContent() {
    return (
        <main style={{
            padding: '20px',
            margin: '0 auto',
            maxWidth: '800px',
            lineHeight: '1.6',
            color: '#333',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,05)'
        }}>
            <h2 style={{color: 'darkgreen', marginBottom: '15px' }}>Welcome to the Main Section</h2>
            <p>This is the main content area of our application. We can put various information here, such as articles,
                images, or interactive elements.</p>
            <p>Inline styling allows us to quickly apply styles directly to elements without creating separate CSS files.
                While convenient for small changes, for larger projects, external CSS or CSS modules are often preferred for better
                organization and maintainability.
            </p>
        </main>
    );
}

export default MainContent;