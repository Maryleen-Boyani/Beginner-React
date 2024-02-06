export default function ListGroup(){
    const items = ["Nairobi", "Konza", "Kisii", "Kisumu"];
    
    return(
        <>
            <h1>List Group</h1>
            <ul>
                {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </>
    );
} 