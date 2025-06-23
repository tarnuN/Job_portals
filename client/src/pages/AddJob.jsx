import React, { useRef, useState, useEffect } from 'react';
import Quill from 'quill';
import { JobCategories, JobLocations } from '../assets/assets';
import 'quill/dist/quill.snow.css';
import Footer from '../components/Footer'; // ✅ Footer import

const AddJob = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const [category, setCategory] = useState('programming');
  const [level, setLevel] = useState('Beginner level');
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      });
    }
  }, []);

  return (
    <>
      <form className='container mx-auto p-6 flex flex-col gap-6 max-w-4xl bg-white rounded shadow'>
        {/* Job Title */}
        <div className='w-full'>
          <p className='mb-1 font-semibold text-gray-700'>Job Title</p>
          <input
            type="text"
            placeholder="Type here"
            onChange={e => setTitle(e.target.value)}
            value={title}
            required
            className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </div>

        {/* Job Description */}
        <div className='w-full'>
          <p className='mb-1 font-semibold text-gray-700'>Job Description</p>
          <div
            ref={editorRef}
            className='min-h-[150px] border border-gray-300 rounded p-2'
          ></div>
        </div>

        {/* Job Fields: Category, Location */}
        <div className='flex flex-col sm:flex-row sm:gap-6 gap-4 w-full'>
          <div className='flex-1'>
            <p className='mb-1 font-semibold text-gray-700'>Job Category</p>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            >
              {JobCategories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className='flex-1'>
            <p className='mb-1 font-semibold text-gray-700'>Job Location</p>
            <select
              value={location}
              onChange={e => setLocation(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            >
              {JobLocations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Level and Salary */}
        <div className='flex flex-col sm:flex-row sm:gap-6 gap-4 w-full'>
          <div className='flex-1'>
            <p className='mb-1 font-semibold text-gray-700'>Job Level</p>
            <select
              value={level}
              onChange={e => setLevel(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            >
              <option value="Beginner level">Beginner Level</option>
              <option value="Intermediate level">Intermediate Level</option>
              <option value="Senior level">Senior Level</option>
            </select>
          </div>

          <div className='flex-1'>
            <p className='mb-1 font-semibold text-gray-700'>Job Salary</p>
            <input
              onChange={e => setSalary(Number(e.target.value))}
              type="number"
              placeholder="e.g. 2500"
              value={salary}
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className='w-full'>
          <button
            type="submit"
            className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200'
          >
            ADD
          </button>
        </div>
      </form>

      
    </>
  );
};

export default AddJob;
