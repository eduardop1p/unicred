'use client';

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50 flex items-center justify-center bg-00000099">
      <div className="relative flex flex-col items-center bg-white gap-2 p-5 shadow-lg rounded-xl w-[225px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={72}
          height={72}
          viewBox="0 0 72 72"
          fill="none"
          className="animate-spin"
        >
          <path
            d="M68 36c0 17.673-14.327 32-32 32C18.327 68 4 53.673 4 36 4 18.327 18.327 4 36 4c17.673 0 32 14.327 32 32zm-54.305 0c0 12.319 9.986 22.305 22.305 22.305 12.319 0 22.305-9.986 22.305-22.305 0-12.319-9.986-22.305-22.305-22.305-12.319 0-22.305 9.986-22.305 22.305z"
            fill="#E3E3E3"
          />
          <path
            d="M59.145 21.803c2.282-1.4 3.023-4.415 1.295-6.46A32.001 32.001 0 005.983 47.09a32 32 0 0017.95 18.548c2.479 1.01 5.116-.629 5.74-3.232.624-2.603-1.018-5.174-3.425-6.345A22.305 22.305 0 1152.05 20.512c1.86 1.927 4.812 2.69 7.094 1.29z"
            fill="#256136"
          />
        </svg>
        <h2 className="text-sm font-normal text-242a1e text-center">
          Carregando...
        </h2>
      </div>
    </div>
  );
}
