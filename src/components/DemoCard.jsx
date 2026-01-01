export default function DemoCard() {
  return (
    <div className="w-64 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <h2 className="text-lg font-semibold">Test-Card</h2>
        <img
          src=".src/assets/MERN.png"
          className="w-full h-90 object-cover transition duration-300 hover:scale-105"
        />
    </div>
  );
}