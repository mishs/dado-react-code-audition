import React from 'react'
import { SuggestedReposStyles } from './SuggestedReposStyles'
import { useHistory } from 'react-router-dom';

function SuggestedRepos() {
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
