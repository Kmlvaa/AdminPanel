import React from 'react'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="mt-4 text-2xl text-gray-600">
                Oops! The page you're looking for doesn't exist.
            </p>
            <a href="/student" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Back to Home
            </a>
        </div>
    )
}

NotFound.getLayout = (page: any) => page;