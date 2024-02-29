

export const Page = ({ value, srcs }) => {
  return (
    <article
      className="absolute duration-[0.7s] h-full left-0 origin-left rotate-y-0 text-black top-0 transform-style-3d  w-full"
      id={`p${value}`}
    >
      <div className="absolute backface-hidden h-full left-0 rotate-y-180 rounded-l-xl top-0 w-full z-[99]">
        <img src={srcs[1]} className="h-full rounded-l-xl selection:not-sr-only w-full" />
        <label
          className="absolute bottom-3 cursor-pointer duration-300 hover:text-white-add right-3 text-skyblue transition-colors"
          htmlFor={`c${value}`}
        >
          <p className="aspect-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-big-left-filled"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
          </p>
        </label>
      </div>
      <div className="absolute box-border h-full left-0 rounded-r-xl shadow-[inset 20px 0 50px rgba(0,0,0,0.5) 0 2px 5px rgba(0,0,0,.5)] top-0  w-full z-50">
        <img src={srcs[0]} className="h-full rounded-r-xl selection:not-sr-only w-full" />
        <label
          className="absolute cursor-pointer duration-300 hover:text-white-add bottom-3 right-3 text-skyblue transition-colors"
          htmlFor={`c${value}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-big-right-filled"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
              strokeWidth="0"
              fill="currentColor"
            />
          </svg>
        </label>
      </div>
    </article>
  );
};
