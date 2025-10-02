import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500">
      <div className="text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-4">About Page</h1>
        <p className="text-xl mb-8">Learn more about this React application</p>
        <div className="space-y-4 mb-8">
          <p>Built with React 19 + Vite + Tailwind CSS</p>
          <p>Using React Router DOM for navigation</p>
        </div>
        <Link
          to="/"
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default About
