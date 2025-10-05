function UserCard(props) {
    return (
      <div style={{border: "1px solid #ccc", padding: 10, margin: 10}}>
        <h3>{props.name}</h3>
        <p>Tuổi: {props.age}</p>
        <p>{props.desc}</p>
        <img src="https://tse4.mm.bing.net/th/id/OIP.jMc9pfCh9x_NrNBSZEnU0AHaE7?pid=Api&P=0&h=220" alt="" />
      </div>
    );
  }

  export default UserCard;
