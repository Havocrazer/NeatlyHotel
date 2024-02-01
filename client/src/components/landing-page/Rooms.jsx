export default function Rooms({ src, alt, title, height, width }) {
  return (
    <div className="relative max-w-full h-full" style={{ overflow: "hidden" }}>
      <img
        src={src}
        alt={alt}
        className={`m-auto w-full h-full relative object-cover object-bottom`}
      />
      <div className="absolute bottom-20 left-16">
        <h2 className="text-[2.75rem] text-white font-noto-serif">{title}</h2>
        <div className="flex items-center gap-2">
          <p className="text-white font-semibold">Explore Room</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.5 7.99998C2.5 7.86737 2.55268 7.74019 2.64645 7.64643C2.74021 7.55266 2.86739 7.49998 3 7.49998H11.7933L8.14667 3.85331C8.05835 3.75853 8.01026 3.63316 8.01255 3.50363C8.01484 3.3741 8.06731 3.25051 8.15892 3.1589C8.25053 3.06729 8.37412 3.01481 8.50365 3.01253C8.63319 3.01024 8.75855 3.05833 8.85333 3.14665L13.3533 7.64665C13.447 7.7404 13.4996 7.86748 13.4996 7.99998C13.4996 8.13248 13.447 8.25956 13.3533 8.35331L8.85333 12.8533C8.80756 12.9024 8.75236 12.9418 8.69103 12.9692C8.62969 12.9965 8.56348 13.0112 8.49635 13.0124C8.42921 13.0136 8.36253 13.0012 8.30027 12.9761C8.23801 12.9509 8.18145 12.9135 8.13398 12.866C8.0865 12.8185 8.04907 12.762 8.02392 12.6997C7.99877 12.6375 7.98642 12.5708 7.98761 12.5036C7.98879 12.4365 8.00348 12.3703 8.03081 12.309C8.05814 12.2476 8.09754 12.1924 8.14667 12.1466L11.7933 8.49998H3C2.86739 8.49998 2.74021 8.4473 2.64645 8.35353C2.55268 8.25976 2.5 8.13259 2.5 7.99998Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
