import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SearchInput from '../SearchInput/SearchInput'
import { HeaderStyles } from '../components/HeaderStyles'
import { CommitStyles } from './CommitStyles'
import { CommitsContext } from '../context/CommitsContext'
import Moment from 'react-moment'

function Commits() {
  const { searchQuery } = useContext(CommitsContext)
  const [commits, setCommits] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (searchQuery !== '') {
      setIsLoading(true)

      axios
        .get(`https://api.github.com/repos/${searchQuery}/commits?per_page=10`)
        .then((response) => {
          setCommits(response.data)
          console.log(response.data)
          setIsLoading(false)
        })
    }
  }, [searchQuery])

  console.log(commits)

  return (
    <CommitStyles>
      <HeaderStyles style={{ background: '#EFF2F6', marginBottom: '32px' }}>
        <nav className="container">
          <h1>
            <Link to="/">CommitViewer</Link>
          </h1>
          <SearchInput value={searchQuery} />
        </nav>
      </HeaderStyles>

      <div className="containerBody">
        <h3>{searchQuery}</h3>

        <ul className="results">
          {isLoading === true ? (
            <li>
              <span className="loading">Loading...</span>
            </li>
          ) : (
            commits.map((commit) => (
              <li key={commit.sha}>
                <div>
                  <figure>
                    <img src={commit.author.avatar_url} alt="avatar" />
                    <figcaption>{commit.author.login}</figcaption>
                  </figure>

                  <p>{commit.commit.message}</p>
                </div>

                <Moment format="HH:mm DD/MM/YYYY">
                  {commit.commit.author.date}
                </Moment>
              </li>
            ))
          )}
        </ul>
      </div>
    </CommitStyles>
  )
}

export default Commits
