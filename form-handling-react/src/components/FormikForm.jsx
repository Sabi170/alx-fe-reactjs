import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
    const initialValues = {
        username: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        try {

            const response = await new Promise((resolve) => setTimeout(() => {
                console.log('Submitting values (Formik):', values);

                const isSuccess = Math.random() > 0.2;
                if (isSuccess) {
                    resolve({ success: true, message: 'Registration successful!' });
                } else {
                    throw new Error('API registration failed. Please try again.');
                }
            }, 1500));

            setStatus({ success: response.message, type: 'success' });
            resetForm();
        } catch (error) {
            console.error('API Error:', error);
            setStatus({ error: error.message || 'Something went wrong.', type: 'error' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, status }) => (
                <Form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin:
                    '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                        <h2>Register (Formik)</h2>
                        {status && status.success && (
                            <p style={{ color: 'green', marginBottom: '10px' }}>{status.success}</p>
                        )}
                        {status && status.error && ( 
                            <p style={{ color: 'green', marginBottom: '10px' }}>{status.error}</p>
                        )}

                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="usernameF">Username:</label>
                            <Field
                                type="text"
                                id="usernameF"
                                name="username"
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                                />
                                <ErrorMessage name="username" component="p" style={{ color: 'red', fontSize: '0.8em' }}
                                />
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="emailF">Email:</label>
                            <Field
                                type="email"
                                id="emailF"
                                name="email"
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                                />
                                <ErrorMessage name="email" component="p" style={{ color: 'red', fontSize: '0.8em' }}
                                />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="passwordF">Password:</label>
                            <Field
                                type="password"
                                id="passwordF"
                                name="password"
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                            />
                            <ErrorMessage name="password" component="p" style={{ color: 'red', fontSize: '0.8em'}}
                            />
                        </div>

                        <button type="submit" disabled={isSubmitting} style={{ padding: '10px 15px',
                            backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 
                            isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}>

                            </button>
                    </Form>
            )}
        </Formik>
    );
    };

    export default FormikForm;