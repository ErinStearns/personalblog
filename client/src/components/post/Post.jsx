import './post.css';
export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/373948/pexels-photo-373948.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
            <div className="post">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit, amet</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt vitae cumque blanditiis tempore perspiciatis illum, placeat rem aliquid quidem excepturi quisquam dicta provident temporibus quia architecto nam error eius. Laborum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt vitae cumque blanditiis tempore perspiciatis illum, placeat rem aliquid quidem excepturi quisquam dicta provident temporibus quia architecto nam error eius. Laborum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt vitae cumque blanditiis tempore perspiciatis illum, placeat rem aliquid quidem excepturi quisquam dicta provident temporibus quia architecto nam error eius. Laborum.</p>
        </div>
    )
}
