import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);
//  console.log(Object.entries(chats));
const handleSelect = (u) => {
  dispatch({ type: "CHANGE_USER", payload: u });
};

return (
  <div className="chats">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
        className="userChat"
        key={chat[0]}
        onClick={() => 
          {
          console.log(chat[1].userInfo);
            handleSelect(chat[1].userInfo);
          }
          }
        >
          <img src={chat[1].userInfo.photoURL} alt="" />
               {/* <img src="https://images.pe xels.com/photos/18306267/pexels-photo-18306267/free-photo-of-young-woman-posing-at-a-fashion-shoot-next-to-a-building-on-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
           <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
        {/* <span>John</span>
        <p>Fuck Off</p> */}

          </div>
        </div>
      
      ))}
    </div>
  );
};

export default Chats;
