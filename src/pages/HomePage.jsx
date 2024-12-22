import React from 'react'
import HomeCard from "../components/HomeCard";
import Hero from "../components/Hero";
import JobListing from "../components/Joblisting";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCard />
            <JobListing isHome={true} />
            <ViewAllJobs />
        </>
    )
}

export default HomePage