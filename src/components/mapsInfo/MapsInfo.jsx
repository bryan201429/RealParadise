import './MapsInfo.css'

export default function MapsInfo(){
    return(
        <div id='MapsContainer'>
            
            <div className='info'>
                <h1 className='Como'>¿Cómo llegar?</h1>
                <div className='ubicationInfo'>
                    <h1 className='h'>Ubicación:</h1>
                    <hr className='line'></hr>
                    <h2>Av. Dolores 132, Urb. El Carmen, Arequipa, Arequipa</h2>

  
                </div>
                <div className='ubicationInfo'>
                    <h1 className='h'>Teléfono: </h1>
                    <hr className='line'></hr>
                    <h2> (054)323662</h2>
                </div>
            </div>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4453.887652547352!2d-71.53181726773128!3d-16.411181594216323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424afc389f08c3%3A0x9928e9a7c57c6323!2sReal%20Paradise!5e0!3m2!1ses!2spe!4v1694539733288!5m2!1ses!2spe" 
            style={{ border: "0" }}
            allowfullscreen="true" 
            loading="lazy" 
            // referrerpolicy="no-referrer-when-downgrade"
            className='map'>
            </iframe>

        </div>
    )
}