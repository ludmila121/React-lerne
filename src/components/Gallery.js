//import { getImageURL } from "./utils"
 
 /*    function Profile({
      imageId,
      name,
      profession,
      awards,
      discovery, 
      imageSize = 70
}){
      return(
       <section className="profile">
            <h2>{name}</h2>
            <img
            className="avatar"
            src={getImageURL(imageId)}
            alt={name}
            width={imageSize}
            height={imageSize}
            />
        <ul>
          <li><b>Profession:</b>{profession}</li>
            <li>
            <b>Awards:{awards.length}</b>
            ({awards.join(',')})
          </li>
          <li>
            <b> Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>
      );
    } */
      
    /* export default function Gallery() {
        return (
          <div>
            <h1>Notable Scientists</h1>
            <Profile
            imgageId="szV5sd"
            name="Maria Skłodowska-Curie"
            profession="physicist and chemist"
            discovery="polonium (element)"
            awards={[
           'Nobel Prize in Physics', 
           'Nobel Prize in Chemistry', 
           'Davy Medal',
            'Matteucci Medal'
            ]}
            />
            <Profile
             imgageId='YfeOqp2'
             name='Katsuko Saruhashi'
             profession='geochemist'
             discovery='a method for measuring carbon dioxide in seawater'
             awards={[
              'Miyake Prize for geochemistry', 
              'Tanaka Prize'

             ]}
              />
          </div>
        );
      }
       */
/* function Profile ({person, imageSize =70}) {
  const imageSrc = getImageURL(person)
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
      className="avatar"
      src={imageSrc}
      alt={person.name}
      width={imageSize}
      height={imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b>{person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length}</b>
          ({person.awards.join(',')})
        </li>
        <li>
          <b>Discovered:</b>
          {person.discovery}
        </li>
      </ul>
    </section>
  )
}
export default function Gallery(){
  return(
    <div>
     <h1>Notable Scientists</h1>
      <Profile person={{
        imageId: 'szV5sdG',
        name: 'Maria Skłodowska-Curie',
        profession: 'physicist and chemist',
        discovery: 'polonium (chemical element)',
        awards: [
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ],
      }} /> 
       <Profile person={{
         imgageId:'YfeOqp2',
         name: 'Katsuko Saruhashi',
         profession:'geochemist',
         discovery: 'a method for measuring carbon dioxide in seawater',
         awards: [
          'Miyake Prize for geochemistry', 
          'Tanaka Prize'
        ],

       }} />
     </div>
  );
} 


 */
/* const ratio = window.devicePixelRatio;

function Avatar({ person, size }) {
let thumbnailSize = 's';
if(size * ratio > 90 ) {
  thumbnailSize ='b';
}

  return (
    <img
      className="avatar"
      src={getImageURL(person, 'thumbnailSize')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
    <Avatar
      size={70}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
     <Avatar
      size={120}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
    </>
  );
} */
/* function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card>
        <h1>About</h1>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}*/
function Card({ children, title }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}
 

export default function Profile() {
  return (
    <div>
      <Card title="Photo">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card title="About">
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}
