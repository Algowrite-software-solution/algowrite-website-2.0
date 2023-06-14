export default function HeroCard({ className, innerContent }) {
  return (
    <div
      className={`absolute shadow-2xl shadow-[#00000089] rounded-3xl w-80 h-[200px] bg-secondary duration-300 hover:-mt-3 ${className}`}
    >
      {innerContent}
    </div>
  );
}
