import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img 
      className="postImg"
      src="https://images.pexels.com/photos/9306303/pexels-photo-9306303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt=""></img>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          {/* link to a single post not working 
          <a to="/post/:postId" className="link"></a> */}
          Lorem ipsum dolor sit amet
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Mollitia earum consectetur aperiam illum natus blanditiis a eum reiciendis hic officia, 
      non, odio nisi inventore pariatur, quasi optio ipsum. Rerum, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Mollitia earum consectetur aperiam illum natus blanditiis a eum reiciendis hic officia, 
      non, odio nisi inventore pariatur, quasi optio ipsum. Rerum, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Mollitia earum consectetur aperiam illum natus blanditiis a eum reiciendis hic officia, 
      non, odio nisi inventore pariatur, quasi optio ipsum. Rerum, tempore.</p>
    </div>
  )
}
