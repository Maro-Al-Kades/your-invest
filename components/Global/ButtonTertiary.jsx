const ButtonTertiary = ({ btnText }) => {
  return (
    <button
      className="relative min-w-[186px] inline-flex items-center justify-center px-6 py-[12px] 
overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-2xl shadow-accent group 
bg-[#0e1135] hover:bg-[#151a41] text-white tracking-[1px] text-lg"
    >
      {btnText}
    </button>
  );
};

export default ButtonTertiary;
