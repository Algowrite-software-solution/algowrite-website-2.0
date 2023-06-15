export default function HeroCard({ className, innerContent, imageUrl }) {
  return (
    <div
      className={`absolute bg-cover shadow-2xl shadow-[#00000089] rounded-3xl w-[300px] h-[200px] bg-blue-400 duration-500  ${className}`}
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      {innerContent}
    </div>
  );
}
