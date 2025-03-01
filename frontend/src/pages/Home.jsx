import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center bg-light p-5 shadow-lg rounded" style={{ backgroundColor: '#f8f9fa' }}>
        <h1 className="display-4" style={{ color: '#007BFF' }}>Welcome to Digital Course Hub</h1>
        <p className="lead" style={{ color: '#6c757d' }}>Your one-stop destination for all your learning needs.</p>
        <hr className="my-4" />
        <p style={{ color: '#343a40' }}>
          At Digital Course Hub, we provide a wide range of online courses to help you enhance your skills and knowledge. Whether you're looking to learn a new programming language, improve your business acumen, or explore creative arts, we have something for everyone.
        </p>
        <p style={{ color: '#343a40' }}>
          Our platform offers high-quality courses from industry experts, interactive learning experiences, and a supportive community to help you achieve your learning goals.
        </p>
        <a className="btn btn-primary btn-lg" href="/resources" role="button" style={{ backgroundColor: '#007BFF', borderColor: '#007BFF' }}>Explore Courses</a>
      </div>
    </div>
  );
}

export default Home;