import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputAuth from './InputAuth';

import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

export default function FormAuth() {
    const validate = Yup.object({
        username: Yup.string().required('Username tidak boleh kosong'),
        password: Yup.string().required('Password tidak boleh kosong'),
    });

    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            validationSchema={validate}
            onSubmit={(value, formik) => {
                // formik.setTouched({ username: true, password: true });
                formik.setErrors({
                    username: 'username dan password salah',
                    password: 'username dan password salah',
                });
            }}
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
