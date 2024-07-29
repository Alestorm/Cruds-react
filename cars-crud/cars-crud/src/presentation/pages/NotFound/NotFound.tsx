import notFound from '../../../assets/images/metal-slug.png';

const NotFound = () => {
  return (
    <div>
        <h1>Looks like you didn't find a car</h1>
      <img src={notFound}/>
    </div>
  )
}

export default NotFound
