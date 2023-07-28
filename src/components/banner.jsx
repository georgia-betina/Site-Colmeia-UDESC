import logo from "../../images/logo.png"

export default function Banner() {
  return (
    <>
      <div className="h-screen bg-cover bg-no-repeat p-12 text-center" id="jumbotron">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-fixed">
          <div className="mx-auto flex flex-col items-center justify-center h-full p-4">
            <div className="text-white">
              <img src={logo} className="w-12 mx-auto"/>
              <h4 className="mb-6 text-xl font-semibold">Grupo de extensão em Software e Hardware Livre</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
