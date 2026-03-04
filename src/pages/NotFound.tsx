import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="neurgrid-container pt-32 pb-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-600 mb-3">404</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The page you are looking for does not exist or has moved.
          </p>
          <Link to="/" className="neurgrid-btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
