export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
          Welcome to the ERP System
        </h1>
        <p className="text-slate-500 mt-2">
          Start building your modules directly.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card-pastel glassmorphism">
          <h2 className="text-xl font-semibold mb-2 text-slate-800">Mock Mode Active</h2>
          <p className="text-slate-600 text-sm">
            You can use Zustand to prototype without a database. Check the README for details!
          </p>
        </div>
        
        <div className="card-pastel">
          <h2 className="text-xl font-semibold mb-2 text-slate-800">Ready to Code</h2>
          <p className="text-slate-600 text-sm">
            UI hooks, layout boilerplate, and Framer Motion are already configured.
          </p>
        </div>
      </div>
    </div>
  );
}
