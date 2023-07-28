import StandardLayout from '../components/StandardLayout/StandardLayout'
import Banner from '../components/banner'

function Home() {
  return (
    <>
      <StandardLayout>
        <Banner />
        <div className="mx-auto">
          <div className="flex flex-row-reverse items-center py-12 md:py-16">
            <div className="px-10">
              <div>
                <h1 className="text-4xl font-bold">Frentes do Grupo</h1>
                <p className="my-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias dolores impedit saepe quibusdam facere omnis ex
                  provident cupiditate, cum aperiam culpa amet assumenda,
                  suscipit, voluptates necessitatibus nemo repudiandae officia
                  repellat.
                </p>
                <p className="mt-8 md:hidden">
                  <a className="btn" href="/Frentes">
                    VER FRENTES
                  </a>
                </p>
              </div>
              <div className="mt-4">
                <h1 className="text-4xl font-bold">Atividades do Grupo</h1>
                <p className="my-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias dolores impedit saepe quibusdam facere omnis ex
                  provident cupiditate, cum aperiam culpa amet assumenda,
                  suscipit, voluptates necessitatibus nemo repudiandae officia
                  repellat.{" "}
                </p>
                <p className="mt-8">
                  <a
                    className="btn hidden md:inline-block mr-8"
                    href="/Frentes"
                  >
                    VER FRENTES
                  </a>
                  <a className="btn" href="/Atividades">
                    VER ATIVIDADES
                  </a>
                </p>
              </div>
            </div>
            <div className='Home_Activities_Card px-8'>
              <div className='bg-white rounded-lg shadow-lg w-full flex flex-col'>
                <img className='border-gray-700 border-4' src="https://picsum.photos/312/312" alt="" />
                <div className='p-4 my-2 flex-grow'>
                  <h4 className='font-bold'>LatinoWare</h4>
                  <p className='text-gray-600'>29/30 de Outubro</p>
                  <p className='mt-2 flex-grow'>...</p>
                  <a href="#">Saiba Mais</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="py-16 bg-[#F5F5F5]">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img
                  src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                  Sobre o Grupo
                </h2>
                <p className="mt-6 text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  omnis voluptatem accusantium nemo perspiciatis delectus atque
                  autem! Voluptatum tenetur beatae unde aperiam, repellat
                  expedita consequatur! Officiis id consequatur atque
                  doloremque!
                </p>
                <p className="mt-4 text-gray-600">
                  {" "}
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat
                  iure expedita at? Asperiores nemo possimus nesciunt dicta
                  veniam aspernatur quam mollitia.
                </p>
                <p className="mt-8">
                  <a className="btn" href="/SobreNos">
                    SAIBA MAIS
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </StandardLayout>
    </>
  );
}

export default Home