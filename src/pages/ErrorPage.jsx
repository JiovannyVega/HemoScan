import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen max-w-5xl m-2 mx-auto text-center rounded-lg bg-background dark:bg-background-dark text-text dark:text-text-dark">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-9xl text-primary dark:text-text-dark">404</h1>
          <h2 className="my-5 text-4xl">Página no encontrada</h2>
          <p className="mb-8 text-lg">
            Lo sentimos, la página que estás buscando no existe o ha ocurrido un error inesperado.
          </p>
          <Link to="//" className="text-lg font-semibold no-underline text-primary dark:text-text-dark hover:underline">
            Volver a la página principal
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;