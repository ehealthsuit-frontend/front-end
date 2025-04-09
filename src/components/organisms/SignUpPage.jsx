import React from 'react';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import FormGroup from '../molecules/FormGroup';

const SignUpPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <Image src="logo.png" alt="Health Insurance Logo" className="mb-6 mx-auto" />
        <h1 className="text-3xl font-extrabold text-center text-teal-800 mb-4">Create Your Account</h1>
        <p className="text-center text-gray-600 mb-6">Join us to enjoy exclusive health benefits!</p>
        <form onSubmit={handleSubmit}>
          <FormGroup value="" onChange={() => {}} placeholder="Full Name" />
          <FormGroup value="" onChange={() => {}} placeholder="Email" />
          <FormGroup value="" onChange={() => {}} placeholder="Phone Number" />
          <FormGroup value="" onChange={() => {}} placeholder="Create a password" />
          <Button onClick={handleSubmit} className="mt-4 w-full bg-teal-600 hover:bg-teal-700 transition duration-300 ease-in-out">
            Sign Up
          </Button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <a href="#" className="text-teal-600 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;