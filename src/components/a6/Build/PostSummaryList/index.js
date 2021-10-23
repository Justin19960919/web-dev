import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts.json";


const PostSummaryList = () => {
  return(
    <div>
      {
        posts.map(post => {
          return (
              <PostSummaryItem post={post}/>
          );
        })
      }
    </div>
  );
}


export default PostSummaryList;
