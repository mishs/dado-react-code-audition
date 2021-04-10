import React from 'react'
import SearchInput from '../SearchInput/SearchInput'
import SuggestedRepos from '../SuggestedRepos/SuggestedRepos'
import Header from '../components/Header'
import { HomeStyles } from './HomeStyles'

function Home() {
    return (
        <HomeStyles className="container">
            <Header />
            <div className="hero">
                <h2>Discover the world of code</h2>
                <p>Explore open source projects from GitHub, and read their commit history to see the story of how they were built.</p>
            </div>

            <SearchInput />
            <SuggestedRepos />
        </HomeStyles>
    )
}

export default Home
