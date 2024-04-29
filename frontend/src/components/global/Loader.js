const Loader = ({ isSmall }) => <div className="flex justify-center items-center h-1/2"><div className={`loader ${isSmall ? 'small' : ''}`} /> </div>

export default Loader;