const Home = () => {
    return (
        <>
            <div className="flex flex-col items-center h-full m-4">
                <div className="flex w-3/5 bg-white bg-white-300 rounded-2xl h-5/6">
                    <div className="w-1/4 h-full p-7">
                        <form action="" className="flex flex-col justify-center h-full ">

                            <img src="./src/assets/perfil-icono.png" className="self-center w-20 h-20 " alt="perfil" />

                            <label htmlFor="correo" className="font-bold">Correo Electronico</label>
                            <input type="text" className="border-2 rounded-md " placeholder="Correo electronico" name="correo" id="correo" />


                            <label htmlFor="contrasena" className="mt-8 font-bold">Contraseña</label>
                            <input type="password" className="border-2 rounded-md" placeholder="Contraseña" name="contrasena" id="contrasena" />
                            <p className="my-4 text-end">¿Olvidaste tu contraseña?</p>
                            <button className="border-2 bg-[#284B63] text-white rounded-md h-9 " type="submit">Ingresar</button>
                            <p className="text-center">O</p>
                        </form>
                    </div>
                    <div className="flex items-end justify-end w-3/4 h-full">
                        <img src="./src/assets/medicosImage.png" className="h-full rounded-r-2xl" alt="Medicos jsjsjsjs" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
