import React , {Component} from 'react';
import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

class FormikApp extends Component {
    render() {
        return (
            <div className='App'>
                Formik App
                <FormikForm />
            </div>
        );
    };
};

const FormikForm = () => {
    const initialValues = {
        name : '', 
        password : '',
        passwordMatch : '',
        email : '',
        acceptTAC : false
    };
    return (
        <div>
            <Formik 
                initialValues={initialValues}
                validateOnChange={false}
                validateSchema={RegisterSchema}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(()=>{
                        setSubmitting=false
                    }, 200);
                }}>
                {({handleSubmit, handleChange}) => {
                    return (
                        <form 
                            onSubmit={handleSubmit}>
                            <label>Name : </label><br />
                            <Field type='text' name='name' onChange={handleChange} />
                            <ErrorMessage name='name' />
                            <br />
                            <label>Password : </label><br />
                            <Field type='text' name='password' onChange={handleChange} /><br />
                            <label>Password Match : </label><br />
                            <Field type='text' name='passwordMatch' onChange={handleChange} /><br />
                            <label>Email : </label><br />
                            <Field type='text' name='email' onChange={handleChange} /><br />
                            <label>Accept Terms and Conditions : </label><br />
                            <Field type='checkbox' name='acceptTAC' onChange={handleChange} /><br />
                            <input type='submit' value='Register'/>
                        </form>
                )}}
            </Formik>
        </div>
    );
};

const RegisterSchema = Yup.object().shape({
    name : Yup.string().min(6, "Username too short").max(24, "Username too long").required('Required'),
    password : Yup.string().min(8, "Password too short").required('Required').matches(/(?=.*[A-Z])(?=.*\d)/, "At least one lowercase, one uppercase and a digit is required"),
    email : Yup.string().email('Valid email required').required('Required'),
    acceptTAC : Yup.boolean().test('TAC accepted', 'TAC needs to be accepted', (value) => !!value)
});


export default FormikApp;