// eslint-disable-next-line react/prop-types
function HeaderItem({ name, Icon }) {
  console.log(name);
  return (
    <div className=" flex items-center gap-3 font-semibold text-[16px] hover:underline underline-offset-4 text-primaryLight cursor-pointer mb-2">
      <Icon />
      <h2 className=" hidden md:block">{name}</h2>
    </div>
  );
}

export default HeaderItem;
