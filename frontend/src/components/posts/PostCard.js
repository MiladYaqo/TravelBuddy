import React from "react";

function PostCard({post, onDeleteClick, onCommentClick}) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <p>
                    {post.body}
                </p>

                <button className="btn btn-danger" onClick={onDeleteClick}>Delete</button>
            </div>
             <div className="card mt-3">
                    <button className="btn btn-primary" onClick={onCommentClick}>Comment</button>
              </div>
        </div>
    );
}

export default PostCard;