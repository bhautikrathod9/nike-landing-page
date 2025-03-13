const Button = ({label, iconURL}) => {
  return ( 
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red rounded-full hover:bg-red-500 cursor-pointer hover:scale-105 hover:shadow-xl cursor-pointer transition-transform transform duration-300'>
        {label}
        <img 
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 rounded-full bg-white w-5 h-5'
        />
    </button>
  )
}

export default Button;
