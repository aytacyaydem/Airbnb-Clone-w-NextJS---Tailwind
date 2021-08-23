function FilterButton({title, children, ...restProps}) {
    return (
        <button className="filter-button" {...restProps}>{children}</button>
    )
}

export {FilterButton}
