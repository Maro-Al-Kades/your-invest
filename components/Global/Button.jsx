const Button = ({ btnText }) => {
  return (
    <button
      className="relative min-w-[186px] inline-flex items-center justify-center px-6 py-[12px] 
    overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-lg shadow-accent group "
    >
      <span
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-accent via-accent_secondary
      to-accent"
      />
      <span className="relative font-medium text-white text-lg uppercase ">
        {btnText}
      </span>
      <span
        className="absolute bottom-0 right-0 block w-72 h-72 mb-32 mr-4 transition duration-500
      origin-bottom-left transform rotate-45 translate-x-24 bg-[#cb52ff] rounded-full 
      opacity-30 group-hover:rotate-90 ease"
      />
    </button>
  );
};

export default Button;
