import React from 'react'

import Article from './Article'

const Articles = ({articles}) => (
    <div>
        <ul>
            {articles.map(article => (
                <li key={article.id}>
                    <Article article={article}/>
                </li>
            ))}
        </ul>
    </div>
)

export default Articles