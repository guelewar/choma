//import Thumbnail from '../assets/thumbnail.png';

export default function VideoDetail() {
  return (
    <div className="flex justify-between flex-col md:flex-row md:w-[980px] mx-auto pt-8">
      <div className="flex md:items-center flex-col md:flex-row gap-4">
        <div>
          <img
            src="https://img.freepik.com/free-photo/psychedelic-paper-shapes-with-copy-space_23-2149378246.jpg?w=900&t=st=1713725331~exp=1713725931~hmac=447b7afdd83e5ed294c6e9c629322ad32232b335fdd452091c5699d62c47f831"
            className="max-w-full min-h-48 md:min-h-0 md:w-[156px] md:h-[96px] rounded-xl border border-violet-600"
            alt="Thumbnail"
          />
        </div>
        <div className="">
          <h2 className="font-bold text-xl">Video title</h2>
          <div className="py-4 md:py-0">
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, commodi. <br />{' '}
              Ipsam, minus quos iste eveniet ut a ipsum laborum veritatis molestias atque?
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-violet-600">
        <select className="ring-1 ring-violet-600 rounded w-[110px] h-[31] p-1">
          <option value="">Video</option>
        </select>
        <select className="ring-1 ring-violet-600 rounded w-[110px] h-[31] p-1">
          <option value="">1080p</option>
        </select>
        <button
          className="flex justify-center items-center gap-x-1 ring-1 ring-violet-600 text-violet-600 rounded w-[110px] h-[29px] p-1"
          type="button"
        >
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8608 3.92914C11.5549 1.71643 9.492 0 7 0C5.0708 0 3.395 1.035 2.6299 2.66721C1.1263 3.08057 0 4.38429 0 5.78571C0 7.49379 1.4623 8.88107 3.2956 8.98136V9H11.193V8.99807L11.2 9C12.7442 9 14 7.84671 14 6.42857C13.9992 5.85226 13.788 5.29285 13.4002 4.83975C13.0124 4.38665 12.4704 4.06603 11.8608 3.92914ZM4.2 4.5H6.3V2.57143H7.7V4.5H9.8L7 7.71429L4.2 4.5Z"
              fill="#6E41E2"
            />
          </svg>
          download
        </button>
      </div>
    </div>
  );
}
