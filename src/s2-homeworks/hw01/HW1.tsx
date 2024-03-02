import React from "react";
import Message from "./message/Message";
import MessageSender from "./message-sender/MessageSender";
import s2 from "../../s1-main/App.module.css";
import FriendMessage from "./friend-message/FriendMessage";
import avatar from "./avatar.png";

/*
 * 1 - описать тип MessageType
 * 2 - описать тип MessagePropsType в файле Message.tsx
 * 3 - в файле Message.tsx отобразить приходящие данные
 * 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
 * 5 - сделать стили в соответствии с дизайном
 * */

// нужно создать правильный тип вместо any
export type MessageType = {
  id: number;
  user: userType;
  message: messageType;
};

type userType = {
  name: string;
  avatar: string;
};
type messageType = {
  text: string;
  time: string;
};
// структуру объекта не менять
export const message0: MessageType = {
  id: 0,
  user: {
    avatar:
      "https://sun3-8.userapi.com/s/v1/if2/DC8LTbpjhR7xcexOhKiiv4OqDQf_Xr7ahFqX2EqJ8JU0wkGlq-DwuH4A-As5EYhxiQKe27LCpNz1tSqCd51Vr72s.jpg?quality=96&crop=0,0,960,960&as=50x50,100x100,200x200,400x400&ava=1&u=oIcR1_krBsU6yMMy57tiJIsGWRoIKlhL21kFIkKMl4U&cs=200x200",
    name: "Никита", // можно менять
  },
  message: {
    text: "Привет, как дела?", // можно менять
    time: "09:00", // можно менять
  },
};
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar:
      "https://sun3-21.userapi.com/s/v1/ig2/qvSBUWzqO0UlnHO7YyXyOh099uucHlnZy_Er-QLQTu_6uDJo6uhvN_A44me12jgMOy2UwwJ04jgnPNClQDT-y99s.jpg?size=100x100&quality=95&crop=744,264,1148,1148&ava=1", // можно менять
    name: "Макс", // можно менять
  },
  message: {
    text: "Норм, у тебя как?",
    time: "09:01", // можно менять
  },
};

const HW1 = () => {
  return (
    <div id={"hw1"}>
      <div className={s2.hwTitle}>Hometask № 1</div>
      <hr></hr>
      <div className={s2.hw}>
        {/*проверка отображения (не менять)*/}
        <div>
          <Message message={message0} />
          <FriendMessage message={friendMessage0} />
        </div>

        {/*для автоматической проверки дз (не менять)*/}
        <MessageSender M={Message} />
      </div>
    </div>
  );
};

export default HW1;
