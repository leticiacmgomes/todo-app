export const FilterMenu = ({ filter, setFilter}) => {
    return (
        <div className="filter-menu">
            <button className={`filter-option ${filter === 'all' ? 'selected' : ''}`} onClick={() => setFilter('all')}>all</button>
            <button className={`filter-option ${filter === 'active' ? 'selected' : ''}`} onClick={() => setFilter('active')}>active</button>
            <button className={`filter-option ${filter === 'completed' ? 'selected' : ''}`} onClick={() => setFilter('completed')}>completed</button>
        </div>
    )
}