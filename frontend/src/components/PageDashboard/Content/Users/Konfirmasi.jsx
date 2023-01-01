import React from 'react';

export default function Konfirmasi({ message, konfirmasi, setIsKonfirmasi }) {
    const handleYa = () => {
        konfirmasi(true);
    };

    const handleTidak = () => {
        konfirmasi(false);
    };

    return (
        <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-30">
            <div className="absolute h-52 w-96 bg-white border-[3px] border-primary rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center mt-4">
                    <h3 className={`text-2xl font-bold mb-4`}>Konfirmasi</h3>
                    <p className="text-lg font-light px-5">{message}</p>
                </div>
                <div className="mt-7 text-center flex gap-5 justify-center">
                    <button
                        onClick={() => {
                            setIsKonfirmasi(false);
                            handleYa();
                        }}
                        className="py-2 px-5 bg-red-error text-white rounded-lg hover:bg-red-400 transition duration-300"
                    >
                        Ya
                    </button>
                    <button
                        onClick={() => {
                            handleTidak();
                            setIsKonfirmasi(false);
                        }}
                        className="py-2 px-5 bg-primary text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Tidak
                    </button>
                </div>
            </div>
        </div>
    );
}
