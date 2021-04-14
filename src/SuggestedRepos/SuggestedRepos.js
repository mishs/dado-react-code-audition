import React, { useContext } from 'react'
import { CommitsContext } from '../context/CommitsContext'
import { SuggestedReposStyles } from './SuggestedReposStyles'
import { useHistory } from 'react-router-dom';

function SuggestedRepos() {
    const { updateSearchQuery } = useContext(CommitsContext);
    const { push }              = useHistory();

    const repos = [
        {
            title: 'django/django'
        },
        {
            title: 'microsoft/vscode'
        },
        {
            title: 'jezen/is-thirteen'
        },
        {
            title: 'benawad/dogehouse'
        }
    ]

    function handleClick(title) {
        updateSearchQuery(title);
        push('/commits');
    }

    return (
        <SuggestedReposStyles>
            <span>Or pick one of these suggested repos</span>

            <ul>
                { 
                    repos.map((repo) => <li 
                        onClick={() => handleClick(repo.title)}>
                            {repo.title}
                        </li>
                    ) 
                }
            </ul>
        </SuggestedReposStyles>
    )
}

export default SuggestedRepos
