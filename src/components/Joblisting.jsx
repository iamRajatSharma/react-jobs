import { useState, useEffect } from 'react'
import React from 'react'
import JobListingSingle from './JobListingSingle'
import Spinner from './Spinner'

const Joblisting = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiURL = isHome ? "https://react-jobs-murex.vercel.app/jobs?_limit=3" : "http://localhost:8000/jobs"
            try {
                const res = await fetch(apiURL)
                const data = await res.json()
                setJobs(data)
            }
            catch (error) {
                console.log("Error:" + error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchJobs();
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Browse Jobs
                </h2>
                {
                    loading ? <Spinner loading={loading} /> : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {
                                jobs.map((job) => (
                                    <JobListingSingle key={job.id} job={job} />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Joblisting
