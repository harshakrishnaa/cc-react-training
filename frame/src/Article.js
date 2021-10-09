import React from 'react';
import styles from './Layout.module.css';   
function Article(props) {
    return (
        <div className={styles.flex}>
            <article>
                <h2>HTML multimedia</h2>
                
                    Created a page, which displays any YouTube video and any google map location as an iframe. In the same webpage added video,audio and image for demonstrating multimedia concept.Multimedia comes in many different formats. It can be almost anything you can hear or see, like images, music, sound, videos, records, films, animations, and more.Web pages often contain multimedia elements of different types
            </article>
            
            <article>
                <h2>HTML structure</h2>
                
                    Created a basic HTML structure to contain a Heading,a paragraph, and a list of Ordered elements.
                    Gave the body color green and the Heading a color of red. The paragraph to contains bold letters. The ordered list of items should be shown using Roman numerals.
                
            </article>
            <article>
                
                <h2>HTML layout</h2>
                
                    Created a basic home page with a header, navbar, sidebar, main and footer content. The contents of these are left to your creative imagination. As discussed, we may not be able to achieve the desired layout just by using the respective HTML tags. Instead, we have to provide additional CSS styles to style them the way we intend them to be. Used flexbox to achieve this.
                    <aside>
                        <h1>HTML Layout Elements</h1>
                        <ul>
                            <li>header</li>
                            <li>nav</li>
                            <li>section</li>
                            <li>article</li>
                            <li>aside</li>
                            <li>details</li>
                            <li>footer</li>
                        </ul>
                    </aside>
            </article>
            <article>
                <h2>HTML details and summary</h2>
                <details>
                    <summary>Detail Tag</summary>
                    <p>The details tag specifies additional details that the user can open and close on demand.Details tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within.</p>
                </details>
            </article>
        </div>
    );
}

export default Article;