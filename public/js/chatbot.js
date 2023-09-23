let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

//INTRO
let intro = ["Hello, I am robo friend. I am your Digital  assistant. I am here to guide you through your F A Q and your needs."];
let helpways = ["I can help on diferent things ! How may I help you today?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']




const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";
    if(message.includes('hello')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('hi')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('how can you help me')){
        let finalresult = helpways[Math.floor(Math.random() * helpways.length)];
        speech.text = finalresult;
    }
    if(message.includes('how to get appointments')){
        let finalresult = c_climate[Math.floor(Math.random() * c_climate.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }

    if(message.includes('pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('bye')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }

//COCONUT

    if(message.includes('best professional')){
        let finalresult = csoil[Math.floor(Math.random() * csoil.length)];
        speech.text = finalresult;
    }
    if(message.includes('best fertilizer for coconut')){
        let finalresult = cf[Math.floor(Math.random() * cf.length)];
        speech.text = finalresult;
    }
    if(message.includes('watering of coconut plant')){
        let finalresult = cw[Math.floor(Math.random() * cw.length)];
        speech.text = finalresult;
    }
    if(message.includes('help me')){
        let finalresult = helpways[Math.floor(Math.random() * helpways.length)];
        speech.text = finalresult;
    }
    if(message.includes('climatic conditions for coconut')){
        let finalresult = coconut[Math.floor(Math.random() * coconut.length)];
        speech.text = finalresult;
    }
    if(message.includes('climatic condition for coconut')){
        let finalresult = coconut[Math.floor(Math.random() * coconut.length)];
        speech.text = finalresult;
    }


    if(message.includes('coconut diseases')){
        let finalresult = cdi[Math.floor(Math.random() * cdi.length)];
        speech.text = finalresult;
    }

    if(message.includes('symptoms of bot rot')){
        let finalresult = sb[Math.floor(Math.random() * sb.length)];
        speech.text = finalresult;
    }

    if(message.includes('cure of bot rot')){
        let finalresult = cb[Math.floor(Math.random() * cb.length)];
        speech.text = finalresult;
    }

    if(message.includes('symptoms of stem bleeding')){
        let finalresult = ss[Math.floor(Math.random() * ss.length)];
        speech.text = finalresult;
    }


    if(message.includes('cure of stem bleeding')){
        let finalresult = csb[Math.floor(Math.random() * csb.length)];
        speech.text = finalresult;
    }

    if(message.includes('symptoms of leaf rot')){
        let finalresult = slr[Math.floor(Math.random() * slr.length)];
        speech.text = finalresult;
    }

    if(message.includes('cure of leaf rot')){
        let finalresult = cfr[Math.floor(Math.random() * cfr.length)];
        speech.text = finalresult;
    }



//ARECANUT

    if(message.includes('best climate for betel nut')){
        let finalresult = ac[Math.floor(Math.random() * ac.length)];
        speech.text = finalresult;
    }
    if(message.includes('water required for betel nut')){
        let finalresult = aw[Math.floor(Math.random() * aw.length)];
        speech.text = finalresult;
    }
    if(message.includes('best soil for betel nut')){
        let finalresult = areca_soil[Math.floor(Math.random() * areca_soil.length)];
        speech.text = finalresult;
    }
    if(message.includes('depth of betel nut palm roots')){
        let finalresult = ar[Math.floor(Math.random() * ar.length)];
        speech.text = finalresult;
    }
    if(message.includes('betel nut diseases')){
        let finalresult = ls[Math.floor(Math.random() * ls.length)];
        speech.text = finalresult;
    }

    if(message.includes('Symptoms of fruit drought')){
        let finalresult = sk[Math.floor(Math.random() * sk.length)];
        speech.text = finalresult;
    }

    if(message.includes('cure of fruit drought')){
        let finalresult = ck[Math.floor(Math.random() * ck.length)];
        speech.text = finalresult;
    }

    if(message.includes('Symptoms of foot rot')){
        let finalresult = fs[Math.floor(Math.random() * fs.length)];
        speech.text = finalresult;
    }
    if(message.includes('cure of foot rot')){
        let finalresult = cff[Math.floor(Math.random() * cff.length)];
        speech.text = finalresult;
    }





    
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})