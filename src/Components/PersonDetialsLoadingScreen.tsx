import { Spinner } from "flowbite-react";
import LoudingISlider from "./LoudingSlider";


export default function PersonDetialsLoadingScreen() {
  return (
    <div className="px-5 pb-5 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-4">
     <div className="flex items-center justify-center h-100 md:h-full mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <div className="md:col-span-3">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-2" />
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-2" />
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-2" />
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-4" />
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-4" />
                <LoudingISlider />
        </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
              <div className='flex gap-5 flex-wrap mb-4'>
                <Spinner color="purple" aria-label="Purple spinner example" />
                <Spinner color="purple" aria-label="Purple spinner example" />
                <Spinner color="purple" aria-label="Purple spinner example" />
                <Spinner color="purple" aria-label="Purple spinner example" />
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-4" />
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-4" />          
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-4" />          
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />          
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-4" />          
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />          
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-4" />          
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />          
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />          
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-4" />          
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />          
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-4" />          
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-4" />          
            </div>
            <div className='col-span-1 md:col-span-3'>
              <div className='flex justify-between items-center flex-wrap mb-4'>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-4" />
                 <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-4" />
              </div>
              <div className='bg-white dark:bg-gray-800 shadow-lg p-5'>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
              </div>
            </div>
          </div>
    </div>
  )
}
