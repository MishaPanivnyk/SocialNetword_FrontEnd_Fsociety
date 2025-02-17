import axios from "axios";
import InputChat from "../MessageComponents/InputChat/InputChat";
import style from "./comments.module.scss";
import { useState } from "react";
import CommentsItem from "./CommentsItem";
import { Author, Comments } from "../Home/Home";
import { Divider } from "@mui/material";
import { postOrReelsType } from "../MyProfile/MyProfile";

export type CommentsContainer = {
  id: number;
  comments: Comments[];
  maxHeightValue?: string;
  heightValue?: string;
  myProfile: Author;
  postOrReel: postOrReelsType;
};

const CommentsContainer = ({
  id,
  comments,
  maxHeightValue,
  heightValue,
  myProfile,
  postOrReel,
}: CommentsContainer) => {
  const [commentsCollection, setCommentsCollection] =
    useState<Comments[]>(comments);

  const sendComents = async (text: string) => {
    if (myProfile) {
      const formData = new FormData();
      if (postOrReel == "reels") {
        formData.append("name_user", myProfile.name);
        formData.append("reel_id", id.toString());
        formData.append("comment", text);
      } else {
        formData.append("name_user", myProfile.name);
        formData.append("post_id", id.toString());
        formData.append("comment", text);
      }
      try {
        if (postOrReel == "reels") {
          await axios.post(
            `https://social-netword-fsociety-gamma.vercel.app/reels/comment/`,
            formData
          );
        } else {
          await axios.post(
            `https://social-netword-fsociety-gamma.vercel.app/posts/comment/`,
            formData
          );
        }
        const newComment = {
          id: 0,
          author: {
            name: myProfile.name,
            avatar: myProfile.avatar.slice(13),
            email: myProfile.email,
          },
          text: text,
        };

        setCommentsCollection((prevComments) => [...prevComments, newComment]);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <h3 className={style.comments__title}>Comments</h3>
        </div>
        <Divider className={style.divider} />
        <div className="col-12">
          <div
            style={{ maxHeight: maxHeightValue, height: heightValue }}
            className={style.comment__cloud}
          >
            {myProfile && commentsCollection.length > 0 ? (
              commentsCollection.map((comment, index) => (
                <CommentsItem
                  myName={myProfile.name}
                  id={comment.id}
                  key={index}
                  autor={comment.author}
                  text={comment.text}
                />
              ))
            ) : (
              <div className="col-12 d-flex justify-content-center align-items-center">
                <p className={style.nothing__comments}>Nothing comments</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <InputChat onEnter={sendComents} placeholder="Type a comment" />
    </div>
  );
};

export default CommentsContainer;
