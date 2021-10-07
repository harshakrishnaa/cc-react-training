function List({stories}) {
    return (
        <div>
            {stories.map(function(items)
            {
                return(
                    <>
                    <li>
                        <span>
                            <a href={items.url}>{items.title}</a>
                        </span>
                        <ul>
                            <li>Author:{items.author}</li>
                            <li>Comment:{items.num_Comment}</li>
                            <li>Point:{items.point}</li>
                            <li>Id:{items.object_id}</li>
                        </ul>
                    </li>
                    </>
                )
            }
            )}
        </div>
    );
}

export default List;