import Card from './Card';

const Cards = ({ characters }) => {
   return (
      <div>
         {characters.map(({ name, status, species, gender, origin = { name }, image, id}) => {
            return <Card
               key={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin}
               image={image}
               onClose={() => alert('Emulamos que se cierra la card')}
            />
         })}
      </div>
   )
}

export default Cards