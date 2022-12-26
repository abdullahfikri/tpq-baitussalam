import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import InputAuth from './InputAuth';

import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

import { login } from '../../reducers/user';
import Cookies from 'js-cookie';
import * as api from '../../api';

export default function FormAuth() {
    const dispatch = useDispatch();

    const validate = Yup.object({
        username: Yup.string().required('Username tidak boleh kosong'),
        password: Yup.string().required('Password tidak boleh kosong'),
    });

    const handleSubmit = async (value, formik) => {
        // console.log(value);

        try {
            const { data } = await api.signin(value);
            console.log(data);
            dispatch(login(data));
            Cookies.set('user', JSON.stringify(data));
        } catch (error) {
            formik.setFieldError('username', error.response.data.message);
            formik.setFieldError('password', error.response.data.message);
            // formik.setFieldValue('password', '');

            // console.log(error.response.status);
        }
    };

    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            validationSchema={validate}
            onSubmit={handleSubmit}
        >
            {(formik) => {
                return (
                    <Form className="flex flex-col mt-[38px]">
                        <InputAuth
                            icon={
                                <FaUser
                                    className={` text-3xl absolute right-0 top-[14px] mr-4 input-icon transition duration-200`}
                                />
                            }
                            placeholder="Username"
                            label="Username"
                            name="username"
                            type="text"
                        />
                        <InputAuth
                            icon={
                                <RiLockPasswordFill
                                    className={`text-3xl absolute right-0 top-3 mr-4 input-icon transition duration-20`}
                                />
                            }
                            placeholder="Password"
                            label="password"
                            name="password"
                            type="password"
                        />
                        <button
                            type="submit"
                            className="bg-primary text-white h-[60px] w-[400px] rounded-xl"
                        >
                            Masuk
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
}
