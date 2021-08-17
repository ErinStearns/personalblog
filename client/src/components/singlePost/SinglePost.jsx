import './singlepost.css';


export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum, dolor sit.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Erin</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit libero adipisci voluptatibus mollitia! Facere odio reprehenderit nisi quia unde officia voluptates ab ut! Nostrum suscipit quisquam quaerat vero! Amet, maiores! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit libero adipisci voluptatibus mollitia! Facere odio reprehenderit nisi quia unde officia voluptates ab ut! Nostrum suscipit quisquam quaerat vero! Amet, maiores! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit libero adipisci voluptatibus mollitia! Facere odio reprehenderit nisi quia unde officia voluptates ab ut! Nostrum suscipit quisquam quaerat vero! Amet, maiores!</p>
            </div>
        </div>
    )
}
