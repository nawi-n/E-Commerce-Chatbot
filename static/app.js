class ChatBox {
    constructor(){
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')    
        };

        this.state = false;
        this.message = [];
    }

    display(){
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.togglestate(chatBox));
        sendButton.addEventListener('click', () => this.onSendButton(chatBox));

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", (event) => {
            console.log("Key pressed:", event.key);
            if (event.key === "Enter") {
                console.log("Enter key pressed, calling onSendButton");
                this.onSendButton(chatBox);
            }    
        });
    }

    togglestate(chatBox) { 
        this.state = !this.state;
        
        if(this.state){
            chatBox.classList.add('chatbox--active');
        } else {
            chatBox.classList.remove('chatbox--active');
        }
    }

    onSendButton(chatBox){
        console.log("onSendButton:start", chatBox);
        var textField = chatBox.querySelector('input');
        let text1 = textField.value.trim();
        if (text1 === ""){
            return;
        }
        
        let msg1 = {name: "user", message: text1};
        this.message.push(msg1);

        fetch($SCRIPT_ROOT + '/predict', {
            method: 'POST',
            body: JSON.stringify({message: text1 }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(r => r.json())
        .then(r => {
            let msg2 = { name: "sam", message: r.answer};
            this.message.push(msg2);
            this.updateChatText(chatBox);
            textField.value = '';
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
    }

    updateChatText(chatBox){
        var html = '';
        this.message.slice().reverse().forEach(function(item){
            if (item.name === "sam") {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>';
            } else {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>';
            }
        });

        const chatMessages = chatBox.querySelector('.chatbox__messages');
        chatMessages.innerHTML = html;
    }
}

const chatBox = new ChatBox();
chatBox.display();
