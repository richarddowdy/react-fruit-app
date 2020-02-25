function Tweet(props){
  let {username, name, message} = props
  const styling = {
    border: '5px solid red',
    margin: '5px'
  }
  const inline = {
    display: "inline"
  }
  return (
    <div style={styling}>
      <p style={inline}> username: {username} </p>
      <p style={inline}> name: {name} </p>
      <p> message: {message} </p>
    </div>
  )
}
