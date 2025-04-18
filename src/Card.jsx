function Card({ tag, tag_bg, title, description, image }) {
  return (
    <div className="flex flex-col gap-4 bg-[#212936] p-8 rounded-2xl w-[400px] h-auto ">
      <span
        className="inline-flex w-10 h-10 p-7 items-center justify-center rounded-full text-[30px] text-[#E5E7EB]"
        style={{ backgroundColor: tag_bg }}
      >
        {tag}
      </span>
      <h1 className="text-[20px] font-bold text-[#E5E7EB]">{title}</h1>
      <p className="text-[16px] text-[#D2D5DA] text-left w-[80%]">
        {description}
      </p>
      <img
        className="w-[100%] h-[60%] object-cover rounded-2xl"
        src={image}
        alt=""
      />
    </div>
  );
}
export default Card;
