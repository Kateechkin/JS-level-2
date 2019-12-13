class User {
    constructor(name = 'Пользователь', position = 'пользователь') {
        this.name = name;
        this.position = position;
    }
}

class Message {
    constructor(text = 'Здраствуйте! Я могу вам чем-то помочь?') {
        this.text = text;
    }
    render() {
        return `<div class="chat-widget-message">
                    ${this.text}
                </div>`;
    }
}

class Chat {
    constructor(user = new User(), visibility = false) {
        this.chat = null;
        this.visible = visibility;
        this.messageContainer = null;
        this.messages = [];
        this.user = user;
        this.render();
    }
    addMessage(message) {
        this.messages.push(this.messages);
        this.messageContainer.innerHTML += message.render();
    }
    initEvents() {
        const header = this.chat.querySelector('.chat-widget__header');
        const closeButton = this.chat.querySelector('.chat-widget__close');
        // console.log(header);
        header.addEventListener('click', () => {
            this.showChat();
        });
        closeButton.addEventListener('click', () => {
            this.hideChat();
        });
    }
    showChat() {
        this.chat.classList.remove('chat-widget_closed');
    }
    hideChat() {
        this.chat.classList.add('chat-widget_closed');
    }
    render() {
        this.chat = document.createElement('div');
        this.chat.classList.add('chat-widget');
        if (!this.visible) this.chat.classList.add('chat-widget_closed');
        this.chat.innerHTML = `
        <button class="chat-widget__close">
        <svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" class="svg2"><title/><path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"/><path d="M92.12,35.79a3,3,0,0,0-4.24,0L64,59.75l-23.87-24A3,3,0,0,0,35.88,40L59.76,64,35.88,88a3,3,0,0,0,4.25,4.24L64,68.25l23.88,24A3,3,0,0,0,92.13,88L68.24,64,92.13,40A3,3,0,0,0,92.12,35.79Z"/></svg>
        </button>
        <div class="chat-widget__header">
            <div class="chat-widget__avatar">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class ="svg1"><title/><path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/></svg>
            </div>
            <div class="chat-widget__user">
                <div class="chat-widget__user-name">${this.user.name}</div>
                <div class="chat-widget__user-position">${this.user.position}</div>
            </div>
            <div class="chat-widget__welcome-message">
                Консультант!
            </div>
        </div>
        <div class="chat-widget__messages"></div>
         <div class="chat-widget__controls">
                <textarea name="chat-input" id="chat__input" rows="4"  placeholder="Введите ваше сообщение..." cols="30" style="font-size: 14px"></textarea>
                <div class="chat-widget__controls-area">
                    <button class="chat-widget__control">
                    <svg height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" class="svg4"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><circle class="cls-1" cx="24" cy="24" r="23"/><path class="cls-1" d="M35,29a11,11,0,0,1-22,0V26H35v3"/><circle class="cls-1" cx="16" cy="15" r="3"/><circle class="cls-1" cx="32" cy="15" r="3"/><line class="cls-1" x1="17" x2="31" y1="30" y2="30"/></svg>
                    </button>
                    <button class="chat-widget__control">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" wight ="20" height ="20"><title/><path d="M9,21.5A7,7,0,0,1,4.05,9.59L9.7,4a5,5,0,0,1,7.06,0,5,5,0,0,1,0,7.05l-5.65,5.63a3,3,0,0,1-4.23,0A3,3,0,0,1,6,14.53a3,3,0,0,1,.87-2.12l5.65-5.63a1,1,0,0,1,1.42,0,1,1,0,0,1,0,1.41L8.29,13.82a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l5.65-5.64a3,3,0,0,0,0-4.21,3,3,0,0,0-4.24,0L5.46,11a5,5,0,0,0,0,7,5,5,0,0,0,7.06,0l7.77-7.74a1,1,0,0,1,1.42,0,1,1,0,0,1,0,1.41l-7.77,7.75A7,7,0,0,1,9,21.5Z" fill="black"/></svg>
                    </button>
                </div>
            </div>`;
        this.messageContainer = this.chat.querySelector('.chat-widget__messages');
        this.initEvents();
        document.body.appendChild(this.chat);
    }
}


const consultant = new User('Тэглайн', 'Консультант');
const chat = new Chat(consultant);
const message = new Message();
chat.addMessage(message);