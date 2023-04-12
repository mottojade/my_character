import './App.css';
import React from 'react';


function App() {
  return (
    // 整个对话框的容器
    <div class="talk_container">
        <div class="talk_character">
          <div class="text-box"></div>
        </div>
        <div class="talk_input">
          <input type="text" class="input_box" placeholder="快点说点什么吧~"/>
          <input type="button" value="发送" class="send_button"/>
        </div>
    </div>
  );
};

export default App;