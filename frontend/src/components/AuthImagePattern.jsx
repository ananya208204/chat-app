const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">

        {/* Pattern Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl
              bg-gradient-to-br from-indigo-200/80 to-indigo-300/60
              dark:from-indigo-400/30 dark:to-indigo-500/20
              border border-indigo-300/40
              shadow-sm
              transition-all duration-700
              ${i % 2 === 0 ? "animate-pulse scale-105" : ""}
              hover:scale-110`}
            />
          ))}
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/70">{subtitle}</p>

      </div>
    </div>
  );
};

export default AuthImagePattern;