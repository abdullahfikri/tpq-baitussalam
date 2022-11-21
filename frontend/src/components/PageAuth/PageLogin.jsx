import rocket from '../../assets/login-rocket.png';
import FormAuth from './FormAuth';
export default function PageLogin() {
    return (
        <div>
            <div>
                <h1 className="font-bold text-4xl text-primary text-center my-[75px]">
                    TPQ BAITUSSALAM
                </h1>
            </div>
            <div className="w-[1024px] mx-auto flex justify-between">
                <div>
                    <h2 className="font-light text-primary text-2xl">
                        Sign In
                    </h2>
                    {/* <FormLogin /> */}
                    <FormAuth />
                </div>
                <div>
                    <img src={rocket} />
                </div>
            </div>
        </div>
    );
}
