import styles from './Search.module.css';
function Stories({stories}) {
    return (
        <div>
            <ol>
            {stories.map(function(items, index)
            {
                return(
                    <>
                    <li key={index}>
                        <div className={styles.span}>
                        <span>
                            <a href={items.url}>{items.title}</a>
                        </span>
                        <span>Author:{items.author}</span>
                        <span>Comment:{items.num_Comment}</span>
                        <span>Point:{items.point}</span>
                        <span>Id:{items.object_id}</span>
                        </div>
                    </li>
                    <hr/>
                    </>
                )
            }
            )
            }</ol>
        </div>
    );
}

export default Stories;