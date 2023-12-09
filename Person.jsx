function Person(props){
    return (
      <>

      <p style={{fontSize:'30px ',color:'red'}}>
        {props.name}  is {props.age} year old 
      </p>
      </>
    )
}
export default Person