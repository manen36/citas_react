const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
              <span className="font-normal normal-case">Miñoco</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
              <span className="font-normal normal-case">Manuel</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
              <span className="font-normal normal-case">correo@correo.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
              <span className="font-normal normal-case">7 Julio 1777</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
              <span className="font-normal normal-case">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet, inventore dolorem sequi veritatis laudantium temporibus rerum atque perferendis aliquid neque illo doloremque quas.</span>
            </p>
        </div>
  )
}

export default Paciente
