import FriendItem from "./FriendItem";
import style from "./style.module.scss";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./themeSeacrchComponent";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MyProfileContext, userDataType } from "../HomeLayout/HomeLayout";
import { CircularProgress } from "@mui/material";

export type User = {
  name: string;
  avatar: string;
  isFollow: boolean;
};

const FrendList = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { type } = useParams<{ type: string }>();
  const { userNameParams } = useParams<{ userNameParams: string }>();
  const [urlName, setUrlName] = useState<string>("");
  const myProfile = useContext(MyProfileContext);
  const [myFriendList, setMyFriendList] = useState<userDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        if (userNameParams) {
          setUrlName(userNameParams);
        } else {
          myProfile ? setUrlName(myProfile.name) : null;
        }
        let url = "";
        switch (type) {
          case "friends":
            url = `https://social-netword-fsociety-gamma.vercel.app/friend/followers/${urlName}`;
            break;
          case "followers":
            url = `https://social-netword-fsociety-gamma.vercel.app/friend/following/${urlName}`;
            break;
          case "society":
            url =
              searchQuery.length > 0
                ? `https://social-netword-fsociety-gamma.vercel.app/friend/search/${searchQuery}`
                : "https://social-netword-fsociety-gamma.vercel.app/friend/users/";
            break;
          default:
            url = "https://social-netword-fsociety-gamma.vercel.app/friend/all";
            break;
        }

        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          console.error("Access token not found in localStorage");
          return;
        }
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserList(response.data.reverse());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }

      // Виклик функції getMyFriendList() залишається тут
      const getMyFriendList = async () => {
        if (myProfile) {
          try {
            const response = await axios.get(
              `https://social-netword-fsociety-gamma.vercel.app/friend/followers/${myProfile.name}`
            );
            setMyFriendList(response.data);
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
      };

      getMyFriendList();
    };

    fetchUserData();
  }, [searchQuery, type, myProfile, urlName, userNameParams]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container">
      <div className={style.friends__container}>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <h2>{type}</h2>
          </div>
        </div>
        {type === "society" ? (
          <div className="row">
            <div className="col-12">
              <Box sx={{ flexGrow: 1 }}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </Search>
              </Box>
            </div>
          </div>
        ) : null}
        <div className="row">
          {loading ? (
            <div className="col-12 d-flex justify-content-center align-items-center">
              <CircularProgress color="success" />
            </div>
          ) : (
            myProfile &&
            userList.length > 0 &&
            userList.map((user) =>
              user.name.length > 0 ? (
                <FriendItem
                  key={user.name}
                  myFriendList={myFriendList}
                  myProfile={myProfile}
                  user={user}
                />
              ) : null
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FrendList;
