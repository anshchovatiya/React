const person = {
    name: 'Gregorio Y. Zara',
    link : "https://i.imgur.com/7vQD0fPs.jpg",
    alt:"Gregorio Y. Zara",
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export default function Problem2() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src={person.link}
          alt={person.alt}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  