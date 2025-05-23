import { Link } from 'react-router-dom';

const NoContentFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gaming-purple to-gaming-blue p-4 my-10 ">
      <div className="max-w-md w-full bg-white dark:bg-gaming-dark rounded-lg shadow-xl overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-9xl font-bold text-gaming-purple dark:text-gaming-neon">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">Game Over</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">The page you're looking for doesn't exist or has been moved.</p>
          <div className="mt-8">
            <Link 
              to="/" 
              className="btn-gaming inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 px-8 py-4">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>Try checking the URL or navigating to another page.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoContentFound;
