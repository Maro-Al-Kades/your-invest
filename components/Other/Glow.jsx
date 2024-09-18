import clsx from "clsx";

const Glow = ({ className }) => {
  return (
    <div className="relative">
      <div
        className={clsx(
          "absolute w-[400px] h-[400px] blur-3xl animate-pulse rounded-full bg-accent",
          className
        )}
      />
    </div>
  );
};

export default Glow;
