import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/9980612/pexels-photo-9980612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""
        className="singlePostImg" /> 
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1> 
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b> Johanna </b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut accusamus saepe omnis assumenda. Nisi quos magnam voluptas laudantium odit, possimus eveniet at consequuntur, deleniti ipsa quas natus, eligendi vitae quae!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut accusamus saepe omnis assumenda. Nisi quos magnam voluptas laudantium odit, possimus eveniet at consequuntur, deleniti ipsa quas natus, eligendi vitae quae!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut accusamus saepe omnis assumenda. Nisi quos magnam voluptas laudantium odit, possimus eveniet at consequuntur, deleniti ipsa quas natus, eligendi vitae quae!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut accusamus saepe omnis assumenda. Nisi quos magnam voluptas laudantium odit, possimus eveniet at consequuntur, deleniti ipsa quas natus, eligendi vitae quae!
        </p>
      </div>     
    </div>
  )
}
