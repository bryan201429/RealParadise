import './DetailBox.css'

export default function DetailBox(){

    return(
        <div id='DetailBoxContainer' className='DetailBoxContainer'>
            <div id='Servicios'>
                <h1>Servicios:</h1>
                <hr className="linea-horizontal"></hr>
                <h2>Cámaras de vapor</h2>
                <h2>Cámaras de Seco</h2>
                <h2>Piscina Temperada</h2>
                <h2>Piscina de Niños</h2>
                <h2>Jacuzzi</h2>
                <h2>Masajes</h2>
                <h2>Sala de Descanso</h2>
                <h2>Estacionamiento</h2>
            </div>
            <div id='Horarios'>
                <h1>Horarios:</h1>
                <hr className="linea-horizontal2"></hr>
                <div className='horariosContainer'>
                    <div className='horariosDias'>
                        <h2>Lunes</h2>
                        <h2>Martes</h2>
                        <h2>Miercoles</h2>
                        <h2>Jueves</h2>
                        <h2>Viernes</h2>
                        <h2>Sábado</h2>
                        <h2>Domingo</h2>
                        <h2>Feriados</h2>
                    </div>
                    <div className='horariosHoras'>
                        <h2>9:00 AM - 9:00 PM</h2>
                        <h2>NO HAY ATENCION</h2>
                        <h2>9:00 AM - 9:00 PM</h2>
                        <h2>9:00 AM - 9:00 PM</h2>
                        <h2>9:00 AM - 9:00 PM</h2>
                        <h2>9:00 AM - 9:00 PM</h2>
                        <h2>9:00 AM - 9:00 PM</h2>
                        <h2>9:00 AM - 9:00 PM</h2>
                    </div>

                    </div>



            </div>
        </div>
    )
}