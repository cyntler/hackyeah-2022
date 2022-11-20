import Image from 'next/image';
import Link from 'next/link';
import { FC, FormEvent } from 'react';
import { APP_NAME } from '../models';

const HomePage: FC = () => {
  const handleLoginFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'GET',
    });

    console.log(response);
  };

  return (
    <section className="h-full gradient-form bg-gray-200 flex justify-center">
      <div className="container px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-screen g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-8/12 px-4 py-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <Image
                      src="/logo.svg"
                      alt={APP_NAME}
                      width={257}
                      height={64}
                    />
                    <form className="mt-6" onSubmit={handleLoginFormSubmit}>
                      <p className="mb-4">Zaloguj się na konto nauczyciela</p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Adres e-mail"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Hasło"
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="submit"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          style={{
                            background:
                              'linear-gradient(to right, #282828, #454545)',
                          }}
                        >
                          Zaloguj się
                        </button>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Nie masz jeszcze konta?</p>
                        <button
                          disabled
                          type="button"
                          className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out disabled:opacity-50"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Przejdź do rejestracji
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="lg:w-4/12 relative flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none overflow-hidden bg-black">
                  <div className="w-full z-0 h-full absolute top-0 left-0 bg-cover bg-center grayscale bg-[url('/warsaw-city.jpg')]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
