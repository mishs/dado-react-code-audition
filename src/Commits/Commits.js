import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SearchInput from '../SearchInput/SearchInput'
import { HeaderStyles } from '../components/HeaderStyles'
import { CommitStyles } from './CommitStyles'
import { CommitsContext } from '../context/CommitsContext'

function Commits() {
    const { searchQuery }           = useContext(CommitsContext);
    const [commits, setCommits]     = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {   
        if (searchQuery !== '') {
            setIsLoading(true);

            axios.get(`https://api.github.com/repos/${searchQuery}/commits?per_page=10`)
            .then(response => {
                setCommits(response.data);
                console.log(response.data);
                setIsLoading(false);
            });
        }

        
    },[searchQuery]);

    console.log(commits)
    
  return (
    <CommitStyles>
      <HeaderStyles style={{ background: '#EFF2F6', marginBottom: '32px' }}>
        <nav className="container">
          <h1>
            <Link to="/">Commit Viewer</Link>
          </h1>
          <SearchInput />
        </nav>
      </HeaderStyles>

      <div className="container">
        <h3>microsoft/vscode</h3>

        <ul className="results">
          <li>
            <span className="loading">Loading...</span>
          </li>

          <li>
            <div>
              <figure>
                <img src alt="avatar" />
                <figcaption>gaearon</figcaption>
              </figure>

              <p>Log all error to console.error by default (#21130)</p>
            </div>

            <p>23:30 28/04/2021</p>
          </li>
        </ul>
      </div>
    </CommitStyles>
  )
}

export default Commits
