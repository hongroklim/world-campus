const Map = ({ link }) => {
  return (
    <div>
      <h3>Location</h3>
      <iframe src={link} title='map' loading='lazy'
        style={{"width": '100%', "height": '300px'}}/>
    </div>
  )
}

export default Map;
