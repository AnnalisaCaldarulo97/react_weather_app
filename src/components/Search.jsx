export default function Search({ search, setSearch, handleSearch }) {
    return (
        <div className="search">
            <input type="text"
                placeholder="Enter city name..."
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        handleSearch
                }}
            />
            <button
                className="search-btn"
                onClick={handleSearch}

            >
                Search Weather
            </button>
        </div>
    )
}