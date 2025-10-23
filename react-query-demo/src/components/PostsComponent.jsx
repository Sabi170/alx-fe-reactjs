import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const PostsComponent = () => {
    const { data, isLoading, isError, error, refetch, isFetching } = useQuery('posts', fetchPosts,
        {
            staleTime: 5 * 60 * 1000,
            cacheTime: 10 * 60 * 1000,
            refetchOnWindowFocus: true,
            keepPreviousData: false,
        });

    if (isLoading) {
        return <div style={{ padding: '20px', textAlign: 'center' }}>Loading posts...</div>
    }

    if (isError) {
        return (
            <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>
                Error: {error.message}
                <button onClick={() => refetch()} style={{ marginLeft: '10px', padding: '8px 15px',
                    backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor:
                    'pointer' }}>
                        Try Again
                    </button>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Posts from JSONPlaceholder</h2>
            <button
            onClick={() => refetch()}
            disabled={isFetching}
            style={{
                display: 'block',
                margin: '0 auto 20px auto',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: isFetching ? 'not-allowed' : 'pointer',
                opacity: isFetching ? 0.7 : 1,
            }}
            >
                {isFetching ? 'Refreshing...' : 'Refetch Posts'}
            </button>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {data.map((post) => (
                <li key={post.id} style={{
            marginBottom: '15px',
            padding: '15px',
            border: '1px solid #eee',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{post.title}</h3>
            <p style={{ margin: 0, color: '#555' }}>{post.body}</p>
          </li>
        ))}
            </ul>
        </div>
    );
};

export default PostsComponent;