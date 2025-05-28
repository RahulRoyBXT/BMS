import style from  './Loader.module.css'

// Basic Loader for now
const Loader = () => {
  return (
    <div className={style.LoaderPage}>
      <div className={style.loader}></div>
      <p> Loading...</p>
    </div>
  )
}

export default Loader
